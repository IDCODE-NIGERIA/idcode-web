'use client';
import { useEffect, useRef } from "react";
import createGlobe from "cobe";


export const Stats = () => {
    const canvaRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvaRef.current) return;

        const globe = createGlobe(canvaRef.current!, {
          devicePixelRatio: 2,
          width: 100*2,
          height: 100*2,
          phi: 0,
          theta: 0.2,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [1, 1, 1],
          markerColor: [0.2, 0.4, 1],
          glowColor: [0, 0, 0],
          arcColor: [0.2, 0.4, 1],
          arcWidth: 0.5,
          arcHeight: 0.3
        })

        function locationToAngles(lat: number, lng: number) {
            return [
                Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
                (lat * Math.PI) / 180
            ]
        }

        const [targetPhi, targetTheta] = locationToAngles(9.0820, 8.6753);

        function animate() {
            phi += 0.005;
            const distancePhi = targetPhi - phi;
            phi += distancePhi * 0.8;
            globe.update({ phi, theta: targetTheta });
            requestAnimationFrame(animate);
        }
        animate();

        return () => {
            globe.destroy();
        };
    }, [])
    return (
        <section className="bg-[#F2EAD3] py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-x-20 items-center">
                {/* Left Column */}
                <div>
                    <h2 className="text-3xl font-bold">
                        Most Extensive Identity Verification and Access Solution in Africa
                    </h2>
                    <p className="mt-4">
                        With over 100 million identities verified and 500+ enterprise customers, our platform is the trusted choice for secure and efficient identity management across the continent.
                    </p>
                    <div className="mt-10 flex flex-col items-start">
                        <h3 className="text-2xl font-medium">Here&apos;s what the numbers say:</h3>
                        <div className="flex flex-col items-start">
                            <p className="text-4xl font-bold text-idcode-green">100M+</p>
                            <p className="text-sm text-onSurfaceMuted">Identities Verified</p>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="flex justify-end">
                    <canvas ref={canvaRef}></canvas>
                </div>
            </div>
        </section>
    );
}
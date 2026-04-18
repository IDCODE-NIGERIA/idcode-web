import Image from "next/image"

export const Hero = () => {
    return (
        <section className="bg-[#F5F5F5] pt-24 pb-10">
            <div className="max-w-7xl h-[67vh] mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-26 items-center">
                {/* Left Column */}
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold tracking-tight text-onSurface leading-tight">
                        Verification and Access Control that builds trust in a digital age
                    </h1>
                    <p className="mt-6 text-lg">
                        IDCODE Nigeria is a tech-driven company specializing in verification and access control solutions. Through our partnership and integration with NIMC and other identity services, We help businesses stay ahead of growing fraud risk and impersonation threats.
                    </p>
                    <button className="mt-8 bg-[#4ADE80] text-black py-3 px-6 rounded-3xl hover:bg-idcode-green-accent transition-colors">
                        Talk to an Expert
                    </button>
                </div>
                {/* Right Column */}
                <div className="flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                        <Image src={'/identity-hero.png'} alt="Hero Image" width={1000} height={1000} className="w-full h-full object-cover" loading="eager"/>
                    </div>
                </div>
            </div>
            <section className="bg-[#F2EAD3] py-6">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xs uppercase tracking-widest text-onSurfaceMuted font-poppins">
                        Trusted by leading startups and industry clients
                    </p>
                </div>
            </section>
        </section>
    )
}
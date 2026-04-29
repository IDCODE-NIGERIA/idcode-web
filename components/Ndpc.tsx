import Image from 'next/image';

export default function NDPCBanner() {
  return (
    <section className="bg-[#F5F5F5] py-10 min-[741px]:py-16 min-[1011px]:py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="relative mx-auto 
          /* Mobile (<= 740px) */
          w-full aspect-[21/9] 
          
          /* Tablet (741px - 1010px) */
          min-[741px]:w-[85%] 
          
          /* Desktop (>= 1011px) */
          min-[1011px]:w-[70%] max-w-[900px]
          
          /* Visual styling to match a certificate/badge feel */
          drop-shadow-sm transition-opacity duration-500 hover:opacity-95"
        >
          <Image
            src="/ndpc.jpg" 
            alt="NDPC Nigeria Data Protection Commission Certified Platform"
            fill
            className="object-contain"
            priority
          />
        </div>
        
      </div>
    </section>
  );
}

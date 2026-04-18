'use client';
import Image from 'next/image';

export const Agency = () => {
  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 bg-[#F2EAD3] h-125">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
          <h2 className="font-bold text-3xl mt-10">Unlock exciting possibilities with IDCODE AGENCY</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <Image src="/agency.svg" alt="IDCODE AGENCY" width={500} height={500} />
          </div>
          {/* Right column */}
          <div>
            <h3 className='text-2xl font-medium mb-5'>We make ideas and dreams a reality</h3>
            <p className='text-lg mb-2'>The IDCODE AGENCY shares a common goal: to leave a memorable and positive impact in our world.
            
            A Nigerian technology agency by IDCODE, helping global brands build digital products faster and smarter, offering up to 40% operational cost optimisation without compromising quality.</p>
            <p className='text-lg'>Discover how IDCODE AGENCY can help you drive digital and creative transformation for your business.</p>
            <button className="mt-8 bg-[#4ADE80] text-black py-3 px-6 rounded-3xl hover:bg-idcode-green-accent transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
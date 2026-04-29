'use client';
import Image from 'next/image';

export const Agency = () => {
  return (
    <section className="bg-[#F5F5F5] py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 bg-[#93D291] rounded-lg sm:rounded-2xl p-6 sm:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <Image 
              src="/agency.svg" 
              alt="IDCODE AGENCY" 
              width={500} 
              height={500}
              className="w-full h-auto max-w-md lg:max-w-full"
            />
          </div>
          
          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">Unlock exciting possibilities with IDCODE AGENCY</h2>
            <h3 className='text-xl sm:text-2xl lg:text-3xl font-medium mb-4 sm:mb-5'>We make ideas and dreams a reality</h3>
            <p className='text-sm sm:text-base lg:text-lg text-onSurfaceMuted mb-3 sm:mb-4 leading-relaxed'>The IDCODE AGENCY shares a common goal: to leave a memorable and positive impact in our world.
            
            A Nigerian technology agency by IDCODE, helping global brands build digital products faster and smarter, offering up to 40% operational cost optimisation without compromising quality.</p>
            <p className='text-sm sm:text-base lg:text-lg text-onSurfaceMuted mb-6 sm:mb-8 leading-relaxed'>Discover how IDCODE AGENCY can help you drive digital and creative transformation for your business.</p>
            <button className="bg-[#4ADE80] text-black text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-3xl font-medium hover:bg-idcode-green-accent transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
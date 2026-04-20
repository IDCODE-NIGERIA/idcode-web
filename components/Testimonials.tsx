'use client';

import { useState } from "react";
import Image from "next/image";

const TESTIMONIALS_DATA = {
  1: [
    {
      name: "Alex Johnson",
      role: "CEO at TechFlow",
      content: "IDCODE has completely transformed our onboarding process. The verification is seamless and our users love the security it provides.",
      avatar: "/avatar1.png"
    },
    {
      name: "Sarah Chen",
      role: "Head of Operations",
      content: "The reliability of the access control system is unmatched. We've seen a 40% reduction in unauthorized access attempts.",
      avatar: "/avatar2.png"
    }
  ],
  2: [
    {
      name: "Michael Smith",
      role: "Security Director",
      content: "Integrating NIMC verification was a breeze with IDCODE. Their documentation and support are top-notch.",
      avatar: "/avatar3.png"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Manager",
      content: "We needed a solution that could scale with our user base. IDCODE delivered exactly what we needed and more.",
      avatar: "/avatar4.png"
    }
  ],
  3: [
    {
      name: "David Olatunji",
      role: "CTO, Fintech Solutions",
      content: "The trust we've built with our customers since using IDCODE is invaluable. It's the gold standard for identity verification.",
      avatar: "/avatar5.png"
    },
    {
      name: "Jessica Wu",
      role: "Compliance Officer",
      content: "Staying compliant with local regulations was a headache until we found IDCODE. Now it's automated and worry-free.",
      avatar: "/avatar6.png"
    }
  ],
  4: [
    {
      name: "Robert Taylor",
      role: "VP Engineering",
      content: "The API is robust and the latency is impressively low. It's rare to find a service this reliable in the identity space.",
      avatar: "/avatar7.png"
    },
    {
      name: "Amara Okeke",
      role: "Lead Developer",
      content: "I love how easy it is to customize the verification flow. It feels like a natural part of our application.",
      avatar: "/avatar8.png"
    }
  ]
};

export const Testimonials = () => {
    const [activeTab, setActiveTab] = useState(1);

    const logos = [
        { id: 1, src: "/Flogo1.svg", name: "Logo 1" },
        { id: 2, src: "/Flogo2.svg", name: "Logo 2" },
        { id: 3, src: "/Flogo3.svg", name: "Logo 3" },
        { id: 4, src: "/Flogo4.svg", name: "Logo 4" },
    ];

    return (
        <section className="bg-white py-8 sm:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                {/* Logo List */}
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16">
                    {logos.map((logo) => (
                        <button
                            key={logo.id}
                            onClick={() => setActiveTab(logo.id)}
                            className={`transition-all duration-300 ${
                                activeTab === logo.id 
                                ? "opacity-100 scale-110" 
                                : "opacity-40 grayscale hover:opacity-70 hover:grayscale-0"
                            }`}
                        >
                            <div className="relative w-20 h-8 sm:w-32 sm:h-12 md:w-40 md:h-16">
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    fill
                                    className={`object-contain transition-all duration-300 ${
                                        activeTab === logo.id ? "drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" : ""
                                    }`}
                                    style={{
                                        filter: activeTab === logo.id 
                                            ? 'invert(69%) sepia(87%) saturate(354%) hue-rotate(85deg) brightness(98%) contrast(92%)' 
                                            : 'none'
                                    }}
                                />
                            </div>
                            {activeTab === logo.id && (
                                <div className="h-1 w-full bg-[#4ADE80] mt-2 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {TESTIMONIALS_DATA[activeTab as keyof typeof TESTIMONIALS_DATA].map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-[#F9FAFB] p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 overflow-hidden relative shrink-0">
                                    {/* Placeholder for avatar since I don't have the actual ones */}
                                    <div className="w-full h-full flex items-center justify-center bg-[#4ADE80] text-black font-bold text-sm">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-600 italic leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
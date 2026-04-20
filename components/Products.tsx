"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "identity-code",
    tabLabel: "Identity Code",
    title: "Secure infrastructure for your users",
    description: "Identify users faster and more securely with best-in-class biometric verification.",
    features: [
      "Frictionless user onboarding",
      "Enterprise-grade security",
      "Real-time fraud detection",
      "Comprehensive compliance"
    ],
    mediaType: "image",
    mediaSrc: "/agency.svg",
    link: "/identity",
    width: 500,
    height: 500
  },
  {
    id: "access-code",
    tabLabel: "Access Code",
    title: "Total control over access permissions",
    description: "Manage internal and external access to all your applications in one seamless platform.",
    features: [
      "Granular role-based access",
      "Automated provisioning",
      "Detailed audit logging",
      "API-first integration"
    ],
    mediaType: "image",
    mediaSrc: "/product.svg",
    link: "/access",
    width: 500,
    height: 500
  },
  {
    id: "product-code",
    tabLabel: "Product Code",
    title: "Accelerate your app development",
    description: "Use our pre-built, production-ready modules to bring your products to market faster.",
    features: [
      "Pre-built modules & templates",
      "Scalable microservices",
      "Developer-friendly SDKs",
      "24/7 dedicated support"
    ],
    mediaType: "image",
    mediaSrc: "/scan2.svg",
    link: "/product",
    width: 300,
    height: 300
  }
];

export function Products() {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0].id);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Offset for sticky tabs (approx 120px)
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-surface py-8 sm:py-12 lg:py-24 bg-[#F5F5F5]" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center pb-8 sm:pb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            Your IDCODE suite
          </h2>
        </div>
      </div>

      {/* Sticky Tabs */}
      <div className="sticky top-16 sm:top-14 z-40 w-full bg-surface/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar">
            {PRODUCTS.map((product) => (
              <button
                key={product.id}
                onClick={() => scrollToSection(product.id)}
                className={`relative py-3 sm:py-4 px-3 sm:px-6 text-xs sm:text-sm lg:text-base font-medium transition-colors whitespace-nowrap outline-none
                  ${activeTab === product.id ? "text-primary" : "text-onSurfaceMuted hover:text-onSurface"}
                `}
              >
                {product.tabLabel}
                {activeTab === product.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Rows */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24 space-y-12 sm:space-y-16 lg:space-y-40" ref={containerRef}>
        {PRODUCTS.map((product, index) => (
          <ProductRow
            key={product.id}
            product={product}
            isActive={activeTab === product.id}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
}

interface ProductRowProps {
  product: typeof PRODUCTS[0];
  isActive: boolean;
}

const ProductRow = React.forwardRef<HTMLDivElement, ProductRowProps>(
  ({ product, isActive }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      // Play/pause video based on active state
      if (product.mediaType === "video" && videoRef.current) {
        if (isActive) {
          videoRef.current.play().catch((e) => console.log("Video play interrupted:", e));
        } else {
          videoRef.current.pause();
        }
      }
    }, [isActive, product.mediaType]);

    return (
      <div 
        id={product.id} 
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-fit lg:min-h-125"
      >
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col space-y-4 sm:space-y-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0.5, y: 20 }}
            animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase mb-2">
               <span>{product.tabLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold leading-tight text-onSurface">
              {product.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-onSurfaceMuted mt-3 sm:mt-4 max-w-md">
              {product.description}
            </p>
            
            <Link 
              href={product.link}
              className="inline-flex items-center mt-4 sm:mt-6 text-primary font-medium text-sm sm:text-base hover:text-idcode-bg transition-colors"
            >
              Learn more about {product.tabLabel} 
              <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>

            <ul className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start text-xs sm:text-sm text-onSurfaceMuted">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 10 0 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Media container */}
        <div className="relative w-full h-56 sm:h-72 lg:h-125 bg-secondary rounded-xl sm:rounded-2xl overflow-hidden shadow-ambient group order-1 lg:order-2">
          {product.mediaType === "video" ? (
            <video
              ref={videoRef}
              src={product.mediaSrc}
              muted
              loop
              playsInline
              autoPlay
              className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100" : "opacity-60"}`}
            />
          ) : (
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                src={product.mediaSrc}
                  alt={product.title}
                  width={product.width}
                  height={product.height}
                className={`object-cover object-center transition-all duration-1000 ease-out will-change-transform ${
                  isActive ? "scale-105 opacity-100" : "scale-100 opacity-60"
                }`}
              />
            </div>
          )}
          
          {/* Pause icon overlay to show user it's a media element if not active - optional 
          {!isActive && product.mediaType === "video" && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] transition-opacity">
               <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shrink-0">
                  <span className="block w-3 h-3 bg-white ml-1"></span>
               </div>
            </div>
          )}
          */}
        </div>
      </div>
    );
  }
);
ProductRow.displayName = "ProductRow";

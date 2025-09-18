"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Clients = ({ brands }: { brands: { src: string; alt: string }[] }) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperRef.current && brands && brands.length) {
      // Initialize Swiper
      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Autoplay],
        centeredSlides: true,
        speed: 3000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 8,
          },
        },
        loop: true,
        slidesPerView: "auto",
        allowTouchMove: true,
      });
    }

    // Cleanup
    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
        swiperInstance.current = null;
      }
    };
  }, [brands]);

  return (
    <section className="section overflow-hidden">
      {brands && brands.length > 0 && (
        <div className="is-brands-slider" ref={swiperRef}>
          <div className="swiper-wrapper">
            {brands.map(
              ({ src, alt }: { src: string; alt: string }, i: number) => (
                <div className="swiper-slide" key={i}>
                  <ImageFallback
                    src={src}
                    alt={alt}
                    width={195}
                    height={0}
                    className="object-contain grayscale opacity-70"
                  />
                </div>
              ),
            )}
            {brands.map(
              ({ src, alt }: { src: string; alt: string }, i: number) => (
                <div className="swiper-slide" key={`duplicate-${i}`}>
                  <ImageFallback
                    src={src}
                    alt={alt}
                    width={195}
                    height={0}
                    className="object-contain grayscale opacity-70"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Clients;

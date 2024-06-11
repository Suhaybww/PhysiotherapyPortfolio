import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/wobble-card";

export function ServicesSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Comprehensive Physiotherapy Services
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            I provide a wide range of physiotherapy services across the lifespan, including Medicare EPC referrals, private health clients, and home visit clients utilizing NDIS or home care packages. My caseload predominantly consists of musculoskeletal conditions, such as common orthopaedic surgeries, acute sports injuries, and back pain of varying origins and severities.
          </p>
        </div>
        <Image
          src="/photos/1.jpg"
          width={500}
          height={500}
          alt="Physiotherapy services"
          className="absolute -right-8 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Specialized Techniques
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          I hold certification in dry needling/acupuncture and have 2 years of experience utilizing this technique. Additionally, I have expertise in Mulligan's treatment philosophy and approach to treat common cervical conditions such as cervicogenic headaches and wry neck.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Tailored Care for Diverse Needs
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            I work with clients that have various disabilities, with a caseload predominantly of NDIS origin. I also spend time in various aged care centres working with senior clientele. The nature of my job requires creativity and quick thinking to adapt to the changing environment of each visit, ensuring personalized care for each individual.
          </p>
        </div>
        <Image
          src="/photos/1.jpg"
          width={500}
          height={500}
          alt="Diverse needs"
          className="absolute -right-12 md:-right-[30%] lg:-right-[15%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

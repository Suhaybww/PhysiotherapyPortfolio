import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(item.className, "")}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 bg-[#A8D3A8]"></div>
);

const items = [
    {
        title: "", // No title needed for this item
        description: "", // No description needed for this item
        header: (
          <div className="flex flex-col justify-center h-full text-center space-y-4"> {/* Added space-y-4 for spacing between paragraphs */}
            <p className="text-lg font-normal text-white">
              I am Abdullahi, a dedicated physiotherapist. My goal is to empower clients through education and personalized care.
            </p>
            <p className="text-lg font-normal text-white">
              I believe in a holistic approach that not only treats the injury but also improves overall well-being, considering physical, mental, and social health aspects.
            </p>
            <p className="text-lg font-normal text-white">
              Together, we’ll work towards your recovery and long-term health, helping you achieve your wellness goals.
            </p>
          </div>
        ),
        className: "md:col-span-2 flex items-center justify-center", // Centered content
        icon: null, // No icon needed
      },
  {
    title: "", // Empty title to ensure it's not displayed
    description: "", // Empty description to ensure it's not displayed
    header: (
      <div className="flex items-center justify-center h-full">
        <div className="avatar">
          <div className="w-36 h-36 rounded-full ring ring-[#6495ED] ring-offset-4 flex items-center justify-center">
            <img src="/photos/1.jpg" alt="Profile" className="rounded-full object-cover" />
          </div>
        </div>
      </div>
    ),
    className: "md:col-span-1 flex items-center justify-center", // Centered in the middle
    icon: null,
  },
  {
    title: "", // No title needed for this item
    description: "", // No description needed for this item
    header: (
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="text-4xl font-bold text-[#6495ED]">3+</h3>
        <p className="text-lg font-normal text-[#6495ED]">Experience</p>
      </div>
    ),
    className: "md:col-span-1 flex items-center justify-center", // Ensure it's centered
    icon: null, // No icon needed for this item
  },
  {
    // Updated bento box with new concise content
    title: "", // No title needed for this item
    description: "", // No description needed for this item
    header: (
      <div className="flex flex-col justify-center h-full text-center">
        <p className="text-lg font-normal text-white">
          I have 2 years of experience treating a variety of conditions in private practice, including musculoskeletal issues, post-surgical rehab, and sports injuries.
        </p>
        <p className="text-lg font-normal text-white mt-2">
          In my community role, I focus on NDIS clients and seniors, adapting treatments creatively to suit each individual's needs.
        </p>
      </div>
    ),
    className: "md:col-span-2 flex items-center justify-center", // Centered content
    icon: null, // No icon needed
  },
];

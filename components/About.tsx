import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "../utils/cn";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
        <BentoGrids />
      </div>
    </section>
  );
}

export function BentoGrids() {
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

const items = [
  {
    title: "",
    description: "",
    header: (
      <div className="flex flex-col justify-center h-full text-center space-y-4">
        <p className="text-lg font-normal text-white group-hover/bento:translate-x-2 transition duration-200">
          I am Abdullahi, a dedicated physiotherapist. My goal is to empower clients through education and personalized care.
        </p>
        <p className="text-lg font-normal text-white group-hover/bento:translate-x-2 transition duration-200">
          I believe in a holistic approach that not only treats the injury but also improves overall well-being, considering physical, mental, and social health aspects.
        </p>
        <p className="text-lg font-normal text-white group-hover/bento:translate-x-2 transition duration-200">
          Together, we'll work towards your recovery and long-term health, helping you achieve your wellness goals.
        </p>
      </div>
    ),
    className: "md:col-span-2 flex items-center justify-center",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <div className="flex items-center justify-center h-full">
        <div className="avatar group-hover/bento:translate-x-2 transition duration-200">
          <div className="w-36 h-36 rounded-full ring ring-[#6495ED] ring-offset-4 flex items-center justify-center">
            <img src="/photos/headshot2.jpg" alt="Profile" className="rounded-full object-cover" />
          </div>
        </div>
      </div>
    ),
    className: "md:col-span-1 flex items-center justify-center",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <div className="flex items-center justify-center h-full">
        <img src="/photos/1.jpg" alt="" className="object-cover object-center w-full h-full rounded-lg group-hover/bento:scale-105 transition duration-200" />
      </div>
    ),
    className: "md:col-span-1 flex items-center justify-center",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="text-4xl font-bold text-[#6495ED] group-hover/bento:translate-x-2 transition duration-200">3+</h3>
        <p className="text-lg font-normal text-[#6495ED] group-hover/bento:translate-x-2 transition duration-200">Experience</p>
      </div>
    ),
    className: "md:col-span-1 flex items-center justify-center",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <div className="flex items-center justify-center h-full">
        <img src="/photos/2.jpg" alt="" className="object-cover object-center w-full h-full rounded-lg group-hover/bento:scale-105 transition duration-200" />
      </div>
    ),
    className: "md:col-span-1 flex items-center justify-center",
    icon: null,
  },
  {
    title: "",
    description: "",
    header: (
      <div className="flex flex-col justify-center h-full text-center">
        <p className="text-lg font-normal text-white group-hover/bento:translate-x-2 transition duration-200">
          I have 2 years of experience treating a variety of conditions in private practice, including musculoskeletal issues, post-surgical rehab, and sports injuries.
        </p>
        <p className="text-lg font-normal text-white mt-2 group-hover/bento:translate-x-2 transition duration-200">
          In my community role, I focus on NDIS clients and seniors, adapting treatments creatively to suit each individual's needs.
        </p>
      </div>
    ),
    className: "md:col-span-3 flex items-center justify-center",
    icon: null,
  },
];
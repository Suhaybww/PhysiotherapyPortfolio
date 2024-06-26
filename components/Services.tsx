import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaDumbbell, FaRunning, FaHeartbeat, FaBrain, FaLeaf, FaTree } from "react-icons/fa";
import { IconType } from "react-icons";

// HoverEffect component to display services
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#6495ED] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <item.icon className="text-4xl text-[#6495ED]" />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Card component to style each service card
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent group-hover:border-[#6495ED] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// Component for Card title
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

// Component for Card description
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

// Main Services component to render the page
export function Services() {
  return (
    <div className="max-w-5xl mx-auto px-8 bg-C1E1C1 py-10">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">My Physiotherapy Services</h1>
        <p className="text-lg text-white leading-relaxed">
          I offer a variety of physiotherapy services designed to help you recover and maintain optimal health. Whether you need manual therapy, exercise prescriptions, or specialized neurological rehabilitation, i am here to support you.
        </p>
      </div>

      {/* HoverEffect Component to display services */}
      <HoverEffect items={services} />
    </div>
  );
}

// Services array with each service details
const services = [
  {
    title: "Manual Therapy",
    description:
      "Skilled hands-on techniques to alleviate pain and promote healing.",
    icon: FaDumbbell,
  },
  {
    title: "Exercise Prescription",
    description:
      "Evidence based programs to strengthen muscles and manage pain.",
    icon: FaRunning,
  },
  {
    title: "Pain Management",
    description:
      "Evidence-based strategies to manage acute and chronic pain effectively.",
    icon: FaHeartbeat,
  },
  {
    title: "Neurological Rehab",
    description:
      "Specialized techniques to help patients with neurological conditions such as stroke & parkinson's.",
    icon: FaBrain,
  },
  {
    title: "Sports Therapy",
    description:
      "Targeted treatment and training to optimize athletic performance.",
    icon: FaLeaf,
  },
  {
    title: "Spinal rehabilitation",
    description:
      "Techniques to improve posture, reduce pain, and prevent injuries of the spine.",
    icon: FaTree,
  },
];

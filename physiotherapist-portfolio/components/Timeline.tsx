// components/Timeline.tsx

import { useEffect } from "react";
import { FaUniversity, FaBriefcase, FaAward, FaHandsHelping, FaUserMd, FaStethoscope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineData = [
  {
    year: "2017-2019",
    title: "Bachelor of Health Sciences",
    description: "Completed a Bachelor of Health Sciences with a focus on Human Physiology and Anatomy at La Trobe University.",
    icon: FaUniversity,
  },
  {
    year: "2020-2021",
    title: "Master of Physiotherapy Practice",
    description: "Earned a Master of Physiotherapy Practice from La Trobe University, enhancing clinical skills and knowledge.",
    icon: FaUserMd,
  },
  {
    year: "2021-Present",
    title: "Private Practice Experience",
    description: "Gained experience in private practice at Physiochoice and Head2Toe, handling various musculoskeletal cases and sports injuries.",
    icon: FaBriefcase,
  },
  {
    year: "2022-Present",
    title: "Community Physiotherapy",
    description: "Worked with clients with disabilities and seniors in community roles, focusing on NDIS clients and aged care.",
    icon: FaHandsHelping,
  },
  {
    year: "2023",
    title: "Certification in Dry Needling",
    description: "Certified in dry needling/acupuncture with two years of experience in the technique.",
    icon: FaStethoscope,
  },
  {
    year: "2023",
    title: "Specialized Techniques and Awards",
    description: "Specialized in Mulligan’s treatment philosophy for cervical conditions and received recognition for contributions in physiotherapy.",
    icon: FaAward,
  },
];

export const Timeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,  // Set to false to animate every time it enters the viewport
    threshold: 0.1,  // Trigger when 10% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 bg-C1E1C1">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Professional Timeline</h2>
        <motion.ul 
          ref={ref}  // Attach the intersection observer to the ul element
          className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {timelineData.map((item, index) => (
            <motion.li 
              key={index} 
              className="mb-10"
              variants={itemVariants}
            >
              <div className="timeline-middle">
                <item.icon className="h-5 w-5 text-[#6495ED]" />
              </div>
              <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10`}>
                <time className="font-mono italic text-white">{item.year}</time>
                <div className="text-lg font-black text-white">{item.title}</div>
                <p className="text-white">{item.description}</p>
              </div>
              {index < timelineData.length - 1 && <hr className="border-white" />}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

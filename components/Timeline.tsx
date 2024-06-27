import { useEffect } from "react";
import { FaUniversity, FaBriefcase, FaAward, FaHandsHelping, FaUserMd, FaStethoscope } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    description: "Specialized in Mulligan's treatment philosophy for cervical conditions and received recognition for contributions in physiotherapy.",
    icon: FaAward,
  },
];

export const Timeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      className="py-16 bg-C1E1C1 overflow-x-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Professional Timeline</h2>
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#A3C3A3", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid #A3C3A3" }}
              date={item.year}
              dateClassName="text-white"
              iconStyle={{ background: "#6495ED", color: "#fff" }}
              icon={<item.icon />}
            >
              <motion.div variants={itemVariants}>
                <h3 className="vertical-timeline-element-title text-lg font-black">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

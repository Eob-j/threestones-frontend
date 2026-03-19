import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import fireDevOne from "/assets/fire-dev-one.jpg";
import fireDevTwo from "/assets/fire-dev-two.jpg";
import fireDevThree from "/assets/fire-dev-three.jpg";
import fireDevFour from "/assets/fire-dev-four.jpg";

import womanFire from "/assets/woman-fire.jpg";

export function ResearchImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const researchItems = [
    {
      image: fireDevOne,
      title: "Laboratory Analysis",
      description:
        "Testing emission reductions and efficiency improvements in controlled environments to validate carbon reduction calculations.",
    },
    {
      image: fireDevTwo,
      title: "Engineering Innovation",
      description:
        "Developing and refining the Threestones Fire design to maximize efficiency and minimize environmental impact.",
    },
    {
      image: fireDevThree,
      title: "Data & Climate Research",
      description:
        "Analyzing carbon emission data and tracking environmental impact across communities using the Threestones Fire.",
    },
    {
      image: fireDevFour,
      title: "Field Studies",
      description:
        "Conducting on-site research in Gambian communities to measure real-world performance and gather user feedback.",
    },
  ];

  const impactStory = {
    image: womanFire,
    title: "Empowering Communities",
    description:
      "The Threestone Fire Comapany continues to distribute the Threestone Fires throughout the community.",
  };

  return (
    <section
      id="research-impact"
      className="relative py-24 bg-gradient-to-br from-[#1a1a1a] via-[#2e5339]/20 to-[var(--charcoal)] overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[var(--gold)] mb-4">Research & Impact</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Our ongoing development and the real-world impact on communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Research Development Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-white mb-8 text-center lg:text-left">
              Ongoing Research & Development
            </h3>

            {/* HEIGHT-LOCKED IMAGE GRID */}
            <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[720px]">
              {researchItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-[#1a1a1a]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* TEXT OUTSIDE HEIGHT CONSTRAINT */}
            <motion.p
              className="text-white/70 leading-relaxed mt-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              The Threestones Fire Company has distributed hundreds of Three
              Stone Fires and continues to advance the technology through
              structured community feedback, field testing, and ongoing
              research. Our development work focuses on improving fuel
              efficiency, durability, usability, and carbon reduction outcomes
              under real-world cooking conditions.
            </motion.p>
          </motion.div>

          {/* Impact Story Section - Right Side */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-white mb-8 text-center lg:text-left">
              Community Impact Story
            </h3>

            {/* HEIGHT-MATCHED IMAGE */}
            <motion.div
              className="relative overflow-hidden rounded-lg bg-[#1a1a1a] h-[720px] mb-6 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ImageWithFallback
                src={impactStory.image}
                alt={impactStory.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-transparent opacity-50" />
              <div className="absolute inset-0 border-2 border-[var(--gold)]/20 rounded-lg group-hover:border-[var(--gold)]/40 transition-colors duration-300" />
            </motion.div>

            {/* TEXT BELOW IMAGE */}
            <h4 className="text-[var(--gold)] mb-4">{impactStory.title}</h4>
            <p className="text-white/80 leading-relaxed">
              {impactStory.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[var(--clay-red)]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

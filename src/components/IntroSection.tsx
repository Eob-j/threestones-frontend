import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import WhoWeAre from "../assets/Who-We-Are.jpg";

export function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="intro" className="py-24 bg-[var(--charcoal)]" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-h-1/10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[var(--clay-red)] mb-6">Who We Are</h2>

            <div className="flex flex-col space-y-6">
              <p className="text-lg mb-6 leading-relaxed text-white/90">
                The Threestones Company is a not for profit private enterprise.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-white/90">
                Made up of The Threestones Company, Directors and
                administrators.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                The Threestones People (2.5 billion) - manufacturers,
                distributors, Threestone carbon credit producers and owners of
                the Threestone Company.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                The Threestones Fire Company has distributed hundreds of Three
                Stone Fires and continues to advance the technology through
                structured community feedback, field testing, and ongoing
                research.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                Our development work focuses on improving fuel efficiency,
                durability, usability, and carbon reduction outcomes under
                real-world cooking conditions. To expand this research and
                validate long-term impact, additional funding is required to
                support further production trials, data collection, and wider
                community deployment.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-[500px] mx-auto">
              <ImageWithFallback
                src={WhoWeAre}
                alt="Threestones People community"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

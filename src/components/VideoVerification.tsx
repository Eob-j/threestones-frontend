import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function VideoVerification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="video-verification"
      className="py-24 bg-gradient-to-b from-[var(--charcoal)] to-[#1a1a1a]"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--clay-red)] mb-6">
              Verified Customer Story
            </h2>

            <p className="text-white mb-6 font-bold leading-tight">
              Real Video Testimonial from a ThreeStone Customer
            </p>

            <div className="flex flex-col space-y-6">
              <p className="text-lg leading-relaxed text-white/90">
                Hear directly from one of our happy customers who purchased a
                ThreeStone stove. In this short video, they share their
                experience, how the stove improved their daily cooking, and why
                they trust ThreeStone for cleaner and more efficient cooking.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                This testimonial highlights the real-life impact of the
                ThreeStone solution — from better fuel efficiency to reduced
                smoke and improved cooking comfort for families.
              </p>

              <p className="text-lg leading-relaxed text-white/90">
                Every customer story helps validate our mission and strengthens
                the trust communities place in our technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-[400px] md:h-[420px] overflow-hidden rounded-3xl shadow-2xl max-w-[650px] mx-auto">
              <iframe
                className="block w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="ThreeStone Customer Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// import { motion } from "motion/react";
// import { useInView } from "motion/react";
// import { useRef } from "react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// // import WhoWeAre from "../assets/Who-We-Are.jpg";
// import HeroImage from "/assets/lady-turning-pot-2.jpeg";

// export function IntroSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   return (
//     <section id="intro" className="py-24 bg-[var(--charcoal)]" ref={ref}>
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-h-1/10 grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-[var(--clay-red)] mb-6">Who We Are</h2>

//             <div className="flex flex-col space-y-6">
//               <p className="text-lg mb-6 leading-relaxed text-white/90">
//                 The Threestones Company is a private enterprise.
//               </p>
//               <p className="text-lg mb-6 leading-relaxed text-white/90">
//                 Made up of The Threestones Company, Directors and
//                 administrators.
//               </p>
//               <p className="text-lg leading-relaxed text-white/90">
//                 The Threestones People (2.5 billion) - manufacturers,
//                 distributors, Threestones Carbon reduction producers and owners of
//                 the Threestone Company.
//               </p>
//               <p className="text-lg leading-relaxed text-white/90">
//                 The Threestones Company has distributed thousands of Three
//                 Stone Fires and continues to advance the technology through
//                 structured community feedback, field testing, and ongoing
//                 research.
//               </p>

//               <p className="text-lg leading-relaxed text-white/90">
//                 Our development work focuses on improving fuel efficiency,
//                 durability, usability, and carbon reduction outcomes under
//                 real-world cooking conditions. To expand this research and
//                 validate long-term impact, additional funding is required to
//                 support further production trials, data collection, and wider
//                 community deployment.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="max-w-[500px] mx-auto">
//               <ImageWithFallback
//                 src={HeroImage}
//                 alt="Threestones People community"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function VideoVerification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="video-verification"
      className="bg-gradient-to-t from-[var(--charcoal)] to-[#1a1a1a] py-16 sm:py-20 lg:py-24"
      ref={ref}
    >
      <div className="container mx-auto px-4 text-black sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--clay-red)] sm:text-sm">
              Verified Operator Story
            </p>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:mb-6 lg:text-5xl">
              Human Video Verification
            </h2>

            <div className="flex flex-col gap-5 sm:gap-6">
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                You will receive videos similar to these samples, they share
                their experience, how the improved their daily cooking, and why
                they trust Threestone Company for cleaner and more efficient
                cooking.
              </p>

              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                This validation highlights the real-life impact of the
                Threestone solution from better fuel efficiency to reduced smoke
                and improved cooking comfort for families.
              </p>

              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                Your THVCR certificate strengthen trust in the Threestones
                system that people require from it's technology
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="mx-auto w-full max-w-180 overflow-hidden rounded-2xl shadow-2xl sm:rounded-3xl"
              style={{ height: 450 }}
            >
              <iframe
                title="YouTube video player"
                src="https://www.youtube.com/embed/Bn_6kFGIFtM?si=dbePUxz4So79q_y2"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import HeroBanner from "/assets/Hero-Banner.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <ImageWithFallback
          src={HeroBanner}
          alt="Gambian locals cooking with fire on a pot"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto w-full pt-24 md:pt-0">
        {/* pt-24 = 6rem offset for mobile only */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1
            className="mb-12  text-white"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Real Climate Action. Verified by Humans
            {/* Clean Cooking for Healthier Lives and a Healthier Planet */}
          </h1>
        </motion.div>

        <motion.h2
          className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Clean Cooking for Healthier Lives and a Healthier Planet
          {/* More than 2 billion people worldwide still rely on open fires and
          inefficient metal manufactured stoves to prepare their meals. */}
        </motion.h2>

        <motion.p
          className="text-white/90 text-xl md:text-2xl mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Every Threestones Certificate records a real emission reduction
          created by a real person — verified at the point of action
          {/* At Threestones Company, we believe clean cooking should be practical,
          affordable and culturally respectful. */}
        </motion.p>

        <motion.p
          className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Cleaner cooking. Stronger communities. Lasting impact.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("intro")}
      >
        <ChevronDown className="text-white" size={40} />
      </motion.div>
    </section>
  );
}

// import { motion } from "motion/react";
// import { Button } from "./ui/button";
// import { ChevronDown } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// //images
// import HeroBanner from "../assets/Hero-Banner.jpg";

// export function HeroSection() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background Image with Parallax Effect */}
//       <motion.div
//         className="absolute inset-0 z-0"
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
//         <ImageWithFallback
//           //src="https://images.unsplash.com/photo-1582648830035-324cf2f6af64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29va2luZyUyMGZpcmUlMjBwb3R8ZW58MXx8fHwxNzYxNDEwMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//             src= {HeroBanner}
//           alt="Gambian locals cooking with fire on a pot"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <h1 className="text-white mb-6 ">
//             Clean Cooking for Healthier Lives and a Healthier Planet
//           </h1>
//         </motion.div>
//         <motion.p
//           className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           More than 2 billion people worldwide still rely on open fires and inefficient metal
//           manufactured stoves to prepare their meals. These traditional methods consume
//           excessive fuel, damage the environment, and expose families, especially women and
//           children, to harmful household air pollution.
//         </motion.p>

//         <motion.p
//           className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           At Three Stone Company, a non-profit making organisation, we believe clean cooking should be practical, affordable, and
//           culturally respectful. We work with three-stone cooking communities in The Gambia,
//           redesigning the traditional fire using simple yet effective technology to make it more fuel
//           efficient and environmentally friendly.
//         </motion.p>
//         <motion.p
//           className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           Our solution reduces fuel use, lowers carbon emissions, and supports healthier homes —
//           while preserving the cooking traditions families depend on.
//           Cleaner cooking. Stronger communities. Lasting impact.
//         </motion.p>
//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//         ></motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         onClick={() => scrollToSection("intro")}
//       >
//         <ChevronDown className="text-white" size={40} />
//       </motion.div>
//     </section>
//   );
// }

import { motion } from "motion/react";
import { Shield, Flame, Lightbulb } from "lucide-react";

import Beginning from "../assets/beginning1.jpg";
import Invention1 from "../assets/invention1.jpg";
import Production from "../assets/production.jpg";
import Distribution from "../assets/stock-1.jpg";
import Invention2 from "../assets/invention2.jpg";
import Invention3 from "../assets/banner.jpg";
import Stock from "../assets/stock.jpg";

export function StartSection() {
  const milestones = [
    {
      year: "March 2025",
      title: "The Beginning",
      description:
        "The Threestone was improved to increase safety and durability whilst improving ergonomics",
      image: Beginning,
    },
    {
      year: "March 2025",
      title: "Invention 1",
      description:
        "Advanced combustion redesign reducing fuel consumption and CO2 emissions by 33%",
      image: Invention1,
    },
    {
      year: "April 2025",
      title: "Production",
      description:
        "Design and build production system, training for Threestone natives",
      image: Production,
    },
    {
      year: "May 2025",
      title: "Distribution",
      description: "Distribute 250 prototypes for field testing",
      image: Distribution,
    },
    {
      year: "June 2025",
      title: "Invention 2",
      description:
        "Prototype results equate to 50% fuel reduction and significant emissions decrease",
      image: Invention2,
    },
    {
      year: "December 2025",
      title: "Invention 3",
      description:
        "Verification system collects 250 mid-term field test results",
      image: Invention3,
    },
    {
      year: "December 2025",
      title: "Stock",
      description:
        "5,000+ Threestone distributed for credit production and sale",
      image: Stock,
    },
  ];

  const innovations = [
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Redesigned structure prevents burns and accidents",
    },
    {
      icon: Flame,
      title: "Reduced Emissions",
      description: "Up to 50% less fuel consumption in prototypes",
    },
    {
      icon: Lightbulb,
      title: "Design Innovation",
      description:
        "Efficient cooking scale from 1 to 16 people with airflow optimisation",
    },
  ];

  return (
    <section
      id="start"
      className="py-24 bg-[#1a1a1a]"
      style={{ scrollMarginTop: "5rem" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[var(--gold)] mb-6">Our Beginning</h2>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            In March 2025, We invent a new three stones fire which reduce fuel consumption by 30%.
          </p>
        </motion.div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden md:block relative mb-20">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-[var(--clay-red)]/50" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1" />
                  <div className="w-8 h-8 rounded-full bg-[var(--clay-red)] border-4 border-[#1a1a1a] shadow-lg z-10" />
                  <div className="flex-1 px-8">
                    <div className="bg-[var(--charcoal)] border border-white/10 rounded-lg shadow-lg overflow-hidden">
                      <div className="flex">
                        <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                          <img
                            src={milestone.image}
                            alt={milestone.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1">
                          <span className="text-[var(--gold)]">
                            {milestone.year}
                          </span>
                          <h3 className="text-white mt-2 mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-white/80">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="md:hidden space-y-6 mb-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[var(--charcoal)] border border-white/10 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-[var(--gold)] text-sm">
                    {milestone.year}
                  </span>
                  <h3 className="text-white mt-2 mb-2">{milestone.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= INNOVATIONS ================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[var(--charcoal)] border border-white/10 p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--clay-red)]/20 mb-4">
                <item.icon className="text-[var(--clay-red)]" size={32} />
              </div>
              <h4 className="mb-3 text-white">{item.title}</h4>
              <p className="text-sm text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import { motion } from "motion/react";
// import { useInView } from "motion/react";
// import { useRef } from "react";
// import { Shield, Flame, Lightbulb } from "lucide-react";

// import Beginning from "../assets/beginning1.jpg";
// import Invention1 from "../assets/invention1.jpg";
// import Production from "../assets/production.JPG";
// import Distribution from "../assets/stock-1.jpg";
// import Invention2 from "../assets/invention2.jpg";
// import Invention3 from "../assets/banner.jpg";
// import Stock from "../assets/stock.jpg";

// export function StartSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });

//   const milestones = [
//     {
//       year: "March 2025",
//       title: "The Beginning",
//       description:
//         "The Threestone Fire was improved to increase safety and durability whilst improving ergonomics",
//       image: Beginning
//         //image: "https://images.unsplash.com/photo-1633005622246-04892a507072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGNvb2tpbmclMjBmaXJlJTIwc3RvbmVzfGVufDF8fHx8MTc2NzA5NzUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"

//     },
//     {
//       year: "March 2025",
//       title: "Invention 1",
//       description:
//         "Redesign to create advanced fire control system combustion system, increased heat, reduced fire consumption and reduced C02 emission by 33%",
//       image: Invention1
//     },
//     {
//       year: "April 2025",
//       title: "Production",
//       description:
//         "Design and build production system, training for Threestone natives",
//       image: Production
//     },
//     {
//       year: "May 2025",
//       title: "Distribution",
//       description:
//         "Design distribution system. Distribute 250 prototypes to Threestone Carbon Manufacturers for field testing",
//       image: Distribution

//     },
//     {
//       year: "June 2025",
//       title: "Invention 2 additional to invention 1",
//       description:
//         "Additional Threestones triangles. Prototype test results equate to 50% reduction in fuel consumption, and C02 emissions. Leading up to a 90% reduction in harmful gases abosrbed by Threestone carbon credit manufacturers",
//       image: Invention2
//     },
//     {
//       year: "December 2025",
//       title: "Invention 3",
//       description:
//         "Foundational human video to AI verification system collects 250 mid term field test results.",
//       image: Invention3
//     },
//     {
//       year: "December 2025",
//       title: "Stock",
//       description:
//         "4,000 invention 1 Threestone Fires distributed for Three Stone Credit production and sale",
//       image: Stock
//     },
//   ];

//   const innovations = [
//     {
//       icon: Shield,
//       title: "Enhanced Safety",
//       description:
//         "Redesigned structure prevents burns and accidents",
//     },
//     {
//       icon: Flame,
//       title: "Reduced Emissions",
//       description:
//         "Up to 50% less fuel consumption in prototypes",
//     },
//     {
//       icon: Lightbulb,
//       title: "Design Innovation",
//       description:
//         "Easy scales allowing efficient cooking for 1 to 16 people with airflow optimization",
//     },
//   ];

//  return (
//     <section
//       id="start"
//       className="py-24 bg-[#1a1a1a]"
//       ref={ref}
//       style={{ scrollMarginTop: "5rem" }} // prevents nav overlap
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-[var(--gold)] mb-6">
//             Our Beginning
//           </h2>
//           <p className="text-lg max-w-3xl mx-auto text-white/90">
//             In March 2025, we embarked on a journey to rediscover
//             and reinvent the traditional Three Stone Fire.
//           </p>
//         </motion.div>

//         {/* ================= DESKTOP TIMELINE (UNCHANGED DESIGN) ================= */}
//         <div className="hidden md:block relative mb-20">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--clay-red)]/50" />

//           <div className="space-y-12">
//             {milestones.map((milestone, index) => (
//               <motion.div
//                 key={index}
//                 className="relative"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//               >
//                 <div
//                   className={`flex items-center ${
//                     index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                   }`}
//                 >
//                   <div className="flex-1" />
//                   <div className="w-8 h-8 rounded-full bg-[var(--clay-red)] border-4 border-[#1a1a1a] shadow-lg z-10" />
//                   <div className="flex-1 px-8">
//                     <div className="bg-[var(--charcoal)] border border-white/10 rounded-lg shadow-lg overflow-hidden">
//                       <div className="flex">
//                         <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
//                           <img
//                             src={milestone.image}
//                             alt={milestone.title}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="p-6 flex-1">
//                           <span className="text-[var(--gold)]">
//                             {milestone.year}
//                           </span>
//                           <h3 className="text-white mt-2 mb-2">
//                             {milestone.title}
//                           </h3>
//                           <p className="text-white/80">
//                             {milestone.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* ================= MOBILE TIMELINE (SIMPLIFIED) ================= */}
//         <div className="md:hidden space-y-6 mb-16">
//           {milestones.map((milestone, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="bg-[var(--charcoal)] border border-white/10 rounded-lg overflow-hidden shadow-lg">
//                 <img
//                   src={milestone.image}
//                   alt={milestone.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-5">
//                   <span className="text-[var(--gold)] text-sm">
//                     {milestone.year}
//                   </span>
//                   <h3 className="text-white mt-2 mb-2">
//                     {milestone.title}
//                   </h3>
//                   <p className="text-white/80 text-sm leading-relaxed">
//                     {milestone.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* ================= INNOVATION ICONS ================= */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {innovations.map((item, index) => (
//             <motion.div
//               key={index}
//               className="bg-[var(--charcoal)] border border-white/10 p-8 rounded-lg shadow-lg text-center"
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.8 + index * 0.15,
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.2 },
//               }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--clay-red)]/20 mb-4">
//                 <item.icon
//                   className="text-[var(--clay-red)]"
//                   size={32}
//                 />
//               </div>
//               <h4 className="mb-3 text-white">{item.title}</h4>
//               <p className="text-sm text-white/80">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

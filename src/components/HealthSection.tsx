import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart, Eye, Wind } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import Health1 from "/assets/smoke-kitchen1.jpg";
import Health2 from "/assets/smoke-kitchen2.jpg";
import Health3 from "/assets/smoke-kitchen3.jpg";

export function HealthSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const healthBenefits = [
    {
      icon: Wind,
      title: "Cleaner Air",
      stat: "90%",
      description: "Reduction in harmful smoke emissions",
    },
    {
      icon: Eye,
      title: "Better Vision",
      stat: "85%",
      description: "Fewer eye irritation complaints",
    },
    {
      icon: Heart,
      title: "Healthier Lives",
      stat: "75%",
      description: "Decrease in respiratory issues",
    },
  ];

  return (
    <section id="health" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Gradient Background - Dark throughout */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--charcoal)] via-[#2a2a2a] to-[#1a1a1a]" />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1688107389721-f3159ffadf6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZSUyMGZyZWUlMjBjb29raW5nfGVufDF8fHx8MTc2MTQwOTIxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Smoke-free cooking"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white mb-6">Health Benefits</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            The conditions the women and their infants tied to their backs must
            endure when using the old Threestone Fire everyday are truly
            appalling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {healthBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-[var(--charcoal)]/95 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <ImageWithFallback
                src={
                  [
                    Health1,
                    Health2,
                    Health3,
                    //   "https://images.unsplash.com/photo-1723643343026-b42936dba48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjBjaGlsZCUyMGNvb2tpbmclMjBmaXJlfGVufDF8fHx8MTc2MjYwMDAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    //   "https://images.unsplash.com/photo-1723643343026-b42936dba48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHYW1iaWFuJTIwbW90aGVyJTIwaW5mYW50JTIwdHJhZGl0aW9uYWwlMjBjb29raW5nfGVufDF8fHx8MTc2MjYwMDAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    //   "https://images.unsplash.com/photo-1588846798956-b1b48feac031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZmFtaWx5JTIwY29va2luZyUyMHdvb2QlMjBmaXJlfGVufDF8fHx8MTc2MjYwMDAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    //
                  ][index]
                }
                alt={`Gambian woman with infant using traditional fire - ${benefit.title}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <blockquote className="text-white text-xl italic max-w-3xl mx-auto">
            "Each Threestones Fire will begin to free them one by one and as the
            Threestones Company Progresses, their hardship will become history."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

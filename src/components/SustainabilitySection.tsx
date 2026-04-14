import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Users, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SustainabilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const globalImpacts = [
    {
      icon: Globe,
      number: "5,000+",
      label: "Carbon Reductions Generated",
    },
    {
      icon: Users,
      number: "50,000+",
      label: "Feed from Threestones Fire",
    },
    {
      icon: Award,
      number: "5,000+",
      label: "Tons CO₂ Offset",
    },
    {
      icon: TrendingUp,
      number: "50%",
      label: "Emissions Reduction",
    },
    // {
    //   icon: TrendingUp,
    //   number: "50,000",
    //   label: "",
    // },
  ];

  return (
    <section
      id="sustainability"
      className="py-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1636871694216-d04517e0d1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc3Vuc2V0JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MTQwOTIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="African landscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--charcoal)]/90 via-[var(--charcoal)]/80 to-[var(--charcoal)]/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white mb-6">
            Global Incorruptible Sustainable System
          </h2>
          <p className="text-white/90 text-lg max-w-4xl mx-auto leading-relaxed">
            When a customer invests in an invention 1 Threestone Fire with a one
            year maintenence contract. They invest in the manufacture,
            distribution, recording and maintenance of that Threestone Fire.
            After one year the same Threestones Fire is replaced or maintained
            using finance from the sale of the Threestone Reductions it produces
            to people and companies to hold permanent verified carbon
            reductions. The customer by making the initial one off capital
            investment has started a single financially sustaining circular
            system which reduces global C02 emissions every year forever.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 bg-white/10 backdrop-blur-md rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
            Our Mission
          </h3>

          <p className="text-white/90 text-lg leading-relaxed mb-6">
            Threestones Company was established to deliver social and
            environmental benefits to the three-stone cooking communities of The
            Gambia. By applying simple yet sophisticated technology, we redesign
            the traditional three-stone fire to make it:
          </p>

          <ul className="list-disc list-inside text-white/90 text-lg leading-relaxed mb-6 space-y-2">
            <li>More fuel-efficient</li>
            <li>More environmentally friendly</li>
            <li>Capable of significantly reducing carbon emissions</li>
          </ul>

          <p className="text-white/90 text-lg leading-relaxed">
            Our approach respects cultural cooking practices while creating
            healthier homes, protecting natural resources, and supporting
            sustainable development.
          </p>
        </motion.div>

        {/* Impact Numbers */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {globalImpacts.map((impact, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center border border-white/20"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--gold)]/20 mb-4">
                <impact.icon className="text-[var(--gold)]" size={28} />
              </div>
              <div className="text-3xl text-white mb-2">{impact.number}</div>
              <p className="text-white/80 text-sm">{impact.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-[var(--gold)] text-xl italic">
            From the Threestones People of Gambia - structurally incorruptible
            sustainable impact one fire at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Trees, TrendingDown, Sprout } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [fuelReduction, setFuelReduction] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setFuelReduction((prev) => {
          if (prev >= 30) {
            clearInterval(interval);
            return 30;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section
      id="impact"
      className="py-24 bg-[var(--charcoal)] relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[var(--gold)] mb-6">Environmental Impact</h2>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            Each new invention no 2 (double fire) reduces emission by 2 tonnes CO2 per annum. This translate to 2 tonnes of firewoods not being burn. Invention 2 threestones triangles to invention 2 double threestones fire. The wood remains living and growing in the forest nearby the Threestone People.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Infographic */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[var(--charcoal)] border border-white/10 p-8 rounded-lg shadow-xl">
              <h3 className="text-white mb-8 text-center">
                Global CO2 Emission Comparison
              </h3>

              <div className="space-y-6">
                {/* Old Threestone Fire */}
                <div>
                  <div className="flex justify-between mb-2 text-white/90">
                    <span>Old Threestone Fire</span>
                  </div>
                  <div className="h-10 bg-red-200 rounded-full overflow-hidden relative">
                    <motion.div
                      className="h-full bg-red-500 flex items-center justify-center"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <span className="text-white text-sm px-4">
                        8 billion tonnes CO2
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Invention One Threestones Fire */}
                <div>
                  <div className="flex justify-between mb-2 text-white/90">
                    <span>Invention One Threestones Fire</span>
                  </div>
                  <div className="h-10 bg-green-200 rounded-full overflow-hidden relative flex">
                    <motion.div
                      className="h-full bg-[var(--forest-green)] flex items-center justify-center"
                      style={{ width: "67%" }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "67%" } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <span className="text-white text-sm px-2">
                        5.36 billion tonnes
                      </span>
                    </motion.div>
                    <motion.div
                      className="h-full bg-emerald-600 flex items-center justify-center"
                      style={{ width: "33%" }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "33%" } : {}}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <span className="text-white text-sm px-2">
                        2.64 billion tonnes
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Invention Two Threestone Triangles */}
                <div>
                  <div className="flex justify-between mb-2 text-white/90">
                    <span>Invention Two Threestone Triangles</span>
                  </div>
                  <div className="h-10 bg-emerald-200 rounded-full overflow-hidden relative flex">
                    <motion.div
                      className="h-full bg-emerald-600 flex items-center justify-center"
                      style={{ width: "50%" }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "50%" } : {}}
                      transition={{ duration: 1, delay: 0.7 }}
                    >
                      <span className="text-white text-sm px-2">
                        4 billion tonnes
                      </span>
                    </motion.div>
                    <motion.div
                      className="h-full bg-emerald-700 flex items-center justify-center"
                      style={{ width: "50%" }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "50%" } : {}}
                      transition={{ duration: 1, delay: 0.8 }}
                    >
                      <span className="text-white text-sm px-2">
                        4 billion tonnes
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Forest Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1682965742594-2295b987d852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjByZWdlbmVyYXRpb24lMjBBZnJpY2F8ZW58MXx8fHwxNzYxNDA5MjE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Forest regeneration in Africa"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Impact Stats */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-white/90 text-lg mb-6">
            Estimated global CO2 reduction of fully enacted Threestones Company
            industrial manufacturing, distribution, production and invention
            number 3 human video to the verification system.
          </p>
          <div className="inline-block bg-gradient-to-br from-[var(--forest-green)]/20 to-[var(--gold)]/20 border-2 border-[var(--gold)] rounded-lg px-8 py-4">
            <h3 className="text-[var(--gold)]">
              4 billion tonnes of CO2 per annum
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

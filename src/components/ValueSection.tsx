import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Settings, Scale, Wind, Thermometer } from "lucide-react";

export function ValueSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Settings,
      title: "Safety First",
      description: "Improved design prevents accidents and burns",
      details:
        "The improved design prevents accidents and burns. Old Threestone fires are very prone to sudden collaspe due to heat erosion with the potential to cause serious accidents with boiling contents of cooking pots. Our Threestone Fires material and physical design eliminate the problem. It further reduces harmful gasses from infecting women and children which could lead to early and infant deaths.",
      color: "var(--clay-red)",
    },
    {
      icon: Wind,
      title: "Fire Combustion Control",
      description: "Optimized fuel restraint and heat supply",
      details:
        "The alternative way in which a wood fire burns is controlled by changing the position stones, to achieve maximum heat from the wood fuel. ",
      color: "var(--gold)",
    },
    {
      icon: Scale,
      title: "Sliding Scale Design",
      description: "Adapts from 1 to 16 people",
      details:
        "The size of the new Threestone Fires can expand and contract to produce the heat required to cook for between 1 and 16 people",
      color: "var(--forest-green)",
    },
    {
      icon: Thermometer,
      title: "Heat Direction and Storage",
      description: "Advanced thermal retention system",
      details:
        "Heat from the fire is radiated into the stones as they force the heat through a hole in the top of the stones insulate. The heat is then conducted to the hot plate surfaces for further cooking activities, such as grilling. The stones radiate heat for hours after the fire has gone out further increasing efficiency",
      color: "var(--clay-red)",
    },
  ];

  return (
    <section
      id="value"
      className="py-24 bg-gradient-to-b from-[var(--charcoal)] to-[#1a1a1a]"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[var(--clay-red)] mb-6">
            The Value of Innovation
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            Every element of the new Threestones has been reimagined for
            maximum efficiency, safety and environmental impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-white/10 hover:border-[var(--clay-red)]/40 bg-[var(--charcoal)]">
                <CardHeader>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: `${feature.color}30`,
                    }}
                  >
                    <feature.icon size={28} style={{ color: feature.color }} />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-white/90">{feature.description}</p>
                  <p className="text-sm text-white/70">{feature.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Visual Comparison */}
        <motion.div
          className="mt-16 bg-[#0f0f0f] border border-white/10 rounded-lg shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-red-950/40 border border-red-800/30 rounded-lg p-6 mb-4">
                <h4 className="text-red-400 mb-4">Traditional Fire</h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>❌ 100% fuel consumption</p>
                  <p>❌ High smoke output</p>
                  <p>❌ Safety concerns</p>
                  <p>❌ Inconsistent heat</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-950/40 border border-green-800/30 rounded-lg p-6 mb-4">
                <h4 className="text-[var(--forest-green)] mb-4">
                  Threestones Fire
                </h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>✅ 50% less fuel</p>
                  <p>✅ 90% smoke reduction</p>
                  <p>✅ Enhanced safety</p>
                  <p>✅ Optimal heat retention</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  DollarSign,
  Users,
  CheckCircle,
  ShoppingCart,
  TrendingUp,
  Flame,
  Video,
  RefreshCw,
} from "lucide-react";

export function SystemComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const unSystemPoints = [
    {
      icon: CheckCircle,
      header: "UN Net Zero",
      description:
        "Private corporate money invested into cookstone.",
    },
    {
      icon: Users,
      header: "Three Stone People",
      description:
        "Tool operator produces product (carbon credit).",
    },
    {
      icon: CheckCircle,
      header: "UN Net Zero",
      description:
        "unverified product (carbon credit accuracy)",
    },
    {
      icon: ShoppingCart,
      header: "Customer",
      description:
        "Private corporate sale (for money and profit)",
    },
    {
      icon: TrendingUp,
      header: "Corporate profit",
      description: "Profit and money paid back to investors",
    },
  ];

  const threeStoneSystemPoints = [
    {
      icon: Flame,
      header: "Three Stone Company",
      description:
        "Money reinvested into tool (Threestone fire).",
    },
    {
      icon: Users,
      header: "Three Stone People",
      description:
        "Tool operator produces product (carbon credit).",
    },
    {
      icon: Video,
      header: "Three Stone Company",
      description:
        "Three Stone Company AI integrates AI verification video system with over 90% accuracy.",
    },
    {
      icon: ShoppingCart,
      header: "Customer",
      description: "Three Stone Company money and profit",
    },
    {
      icon: RefreshCw,
      header: "Three Stone Company",
      description:
        "Money reinvested into tool (Three Stone Fire) production and development.",
    },
  ];

  return (
    <section
      id="system-comparison"
      className="relative py-24 bg-gradient-to-b from-[var(--charcoal)] via-[#2a2a2a] to-[#1a1a1a] overflow-hidden"
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
          <h2 className="text-[var(--gold)] mb-6">
            System Comparison
          </h2>
        </motion.div>

        {/* Comparison Grids */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* UN System Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-[var(--clay-red)] mb-8 text-center">
              UN System (Closed)
            </h3>
            <div className="space-y-6">
              {unSystemPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[var(--charcoal)] border border-white/10 rounded-lg p-6 flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1 + index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[var(--clay-red)]/20 flex items-center justify-center">
                      <point.icon
                        className="text-[var(--clay-red)]"
                        size={24}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      {point.header}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Three Stone System Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-[var(--forest-green)] mb-8 text-center">
              The Threestones Company (Open System)
            </h3>
            <div className="space-y-6">
              {threeStoneSystemPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[var(--charcoal)] border border-white/10 rounded-lg p-6 flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 1 + index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[var(--forest-green)]/20 flex items-center justify-center">
                      <point.icon
                        className="text-[var(--forest-green)]"
                        size={24}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white mb-2">
                      {point.header}
                    </h4>
                    <p className="text-white/70 text-sm">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
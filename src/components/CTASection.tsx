import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useState } from "react";
import { Button } from "./ui/button";

//API end points
import { createCheckoutSession } from "../api/stripe";

import { CheckCircle, Shield, Heart } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  const trustIndicators = [
    { icon: Heart, text: "Community First" },
    { icon: CheckCircle, text: "Verified Impact" },
    { icon: Shield, text: "Secure Payment" },
  ];

  // ✅ NEW: API interaction state

  const handleIgniteClick = async () => {
    try {
      const { url } = await createCheckoutSession();
      window.location.href = url;
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Unable to start checkout. Please try again.");
    }
  };

  return (
    <section
      id="cta"
      className="py-24 bg-gradient-to-br from-[var(--forest-green)] via-teal-700 to-[var(--forest-green)]"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white mb-6">
              Purchase a Threestones Carbon reduction Certificate equals 1 tonne
              Co2e for £50
            </h2>

            <p className="text-white/90 text-xl mb-12 leading-relaxed">
              The purchase of a threestones carbon reduction will pay for
              supplies, replacements, maintenance and administration of the
              double threestones fire for 6 months
            </p>

            <p className="text-white/90 text-xl mb-12 leading-relaxed">
              Your purchases help families cook more safely, reduce fuel use,
              and lower carbon emissions. Each ThreeStones Fire creates
              immediate and lasting environmental and social impact..
            </p>

            <p className="text-white/90 text-xl mb-12 leading-relaxed">
              <strong>What happens when you purchase:</strong>
              <br />
              • A Threestone Fire is purchased and delivered to a family
              <br />
              • Fuel consumption is reduced, lowering carbon emissions
              <br />• Cooking becomes safer, cleaner, and more efficient
            </p>

            <p className="text-white/90 text-xl mb-12 leading-relaxed">
              <strong>What you’ll receive:</strong>
              <br />
              • A ThreeStones Fire Carbon Reduction Certificate
              <br />
              • Confirmation of the individual family receiving the fire
              <br />
              • Photo and video updates showing the fire in use
              <br />• Ongoing updates on fuel savings and carbon impact
            </p>

            <p className="text-white/90 text-xl mb-12 leading-relaxed">
              <strong>Secure payment:</strong>
              <br />
              Your pay securely using reduction or debit card via Stripe. All
              payments are encrypted and processed safely.
            </p>

            <p className="mb-6 text-white/90 text-xl leading-relaxed">
              <strong>Transparency & impact:</strong>
              <br />
              Every payment is directly linked to the purchase and use of a
              ThreeStones Fire. You’ll receive regular updates so you can see
              the real-world impact of your support.
            </p>
          </motion.div>
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="relative inline-block"
          >
            {/* Ember sparks – only render on hover */}
            {isHovered &&
              Array.from({ length: 28 }).map((_, i) => {
                const left = Math.random() * 100;
                const size = 2 + Math.random() * 3;
                const drift = (Math.random() - 0.5) * 20;
                const duration = 1.8 + Math.random() * 1.2;
                const delay = Math.random() * 0.8;

                return (
                  <span
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                      left: `${left}%`,
                      top: "-8px",
                      width: `${size}px`,
                      height: `${size}px`,
                      borderRadius: "50%",
                      background: "rgba(255,190,120,0.95)",
                      animation: `emberRiseRandom ${duration}s ${delay}s infinite`,
                      transform: `translateX(${drift}px)`,
                      zIndex: 15,
                      filter: "blur(0.4px)",
                    }}
                  />
                );
              })}

            {/* Flame glow */}
            <motion.div
              variants={{
                rest: { opacity: 0, scale: 0.9 },
                hover: {
                  opacity: 1,
                  scale: 1.05,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
              className="absolute -inset-3 rounded-xl blur-xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 120%, rgba(255,140,0,0.7), rgba(255,60,0,0.5), transparent 70%)",
              }}
            />

            {/* Heat shimmer */}
            <motion.div
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,220,150,0.35), rgba(255,90,0,0.25), transparent)",
                mixBlendMode: "screen",
              }}
              animate={{ y: [0, -2, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                ease: "easeInOut",
              }}
            />

            {/* Actual button */}
            <Button
              size="lg"
              onClick={handleIgniteClick}
              className="
                relative z-10
                bg-[var(--clay-red)]
                hover:bg-[var(--clay-red)]/90
                px-10 py-6
                animate-[flameFlicker_0.4s_ease-in-out_infinite]
                shadow-lg
                hover:shadow-[0_0_40px_rgba(255,120,40,0.6)]
                transition-shadow
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              Ignite Threestone Fire
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-10 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/80"
              >
                <indicator.icon size={20} className="text-[var(--gold)]" />
                <span className="text-sm">{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import gal_1 from "/assets/gal-1.jpeg";
import gal_2 from "/assets/gal-2.jpeg";
import gal_3 from "/assets/gal-3.jpeg";
import gal_4 from "/assets/gal-4.jpeg";

const adventures = [
  {
    image: gal_1,
  },
  {
    image: gal_2,
  },
  {
    image: gal_3,
  },
  {
    image: gal_4,
  },
  // {
  //   image: Community,
  //   height: "h-[300px]",
  //   span: "md:col-span-2",
  // },
  // {
  //   image: FirestoneThree,
  //   height: "h-[260px]",
  //   span: "",
  // },
];

export function BusinessAdventuresSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="business-adventures"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--charcoal)] to-[var(--forest-green)] py-24"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-50">
        <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-[var(--gold)]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[var(--clay-red)]/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--clay-red)]">
              Business Adventures
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl">
              A gallery of the people, prototypes, and progress behind
              Threestones
            </h2>
          </div>

          {/* <div className="grid grid-cols-3 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-[var(--gold)] md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/55">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {adventures.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <div
                className="relative aspect-video overflow-hidden"
                style={{
                  height: "30rem",
                }}
              >
                <ImageWithFallback
                  src={item.image}
                  alt="Business adventure gallery image"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition duration-300 group-hover:opacity-100" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

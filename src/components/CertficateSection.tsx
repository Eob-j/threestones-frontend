import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import certificateImage from "/assets/sample HVRC.png";

export function CertificateSection() {
  const termsLink =
    "https://drive.google.com/file/d/16erB2CA0t2Q1yLKIcN4h8EC_UzMr8ylA/view?usp=drive_link";
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      className="py-24 bg-gradient-to-br from-[var(--forest-green)] via-teal-700 to-[var(--forest-green)]"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              onClick={() => setIsOpen(true)}
              className="block rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
            >
              <img
                src={certificateImage}
                alt="ThreeStone certificate"
                className="w-full h-auto object-cover"
              />
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[var(--clay-red)] mb-3">
              Verified Certification
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Threestones Human Verified Carbon reduction (THVCR) Certificate
            </h2>
            <p className="text-lg text-white/90 leading-8 mb-6">
              This certificate verifies that the certificate verifies that the
              Threestones fire has been installed and is operational. it is
              agreed by the buyer and seller who estimate the carbon reduction
              of 1 CO2e per annum.
            </p>
            <p className="text-lg text-white/90 leading-8 mb-8">
              The buyer and seller can use this certificate as a trust signal
              that the product aligns with our documented and field-tested
              videos.
            </p>

            <a
              href={termsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl px-6 py-4 text-white bg-[var(--clay-red)] hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              View Terms & Conditions
            </a>
          </motion.div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={certificateImage}
            alt="Full certificate preview"
            className="max-w-5xl w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

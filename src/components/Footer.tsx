export function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Brand Section */}
        <div className="text-center mb-12">
          <h3 className="text-[var(--gold)] mb-4">
            Threestone Company (Gambia)
          </h3>
          <p className="text-white/70">
            Truth and Value Rooted at the Point of Creation.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 The Threestones Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/60 hover:text-[var(--gold)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[var(--gold)] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[var(--gold)] transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

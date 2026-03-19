import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "intro", label: "About" },
    { id: "start", label: "Our Story" },
    { id: "value", label: "Innovation" },
    { id: "impact", label: "Impact" },
    { id: "sustainability", label: "Sustainability" },
    { id: "system-comparison", label: "System Comparison" },
    { id: "cta", label: "Get Involved" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <h3
              className={`transition-colors ${isScrolled ? "text-[var(--charcoal)]" : "text-white"}`}
            >
              Threestones Company (Gambia)
            </h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-[var(--clay-red)] ${
                  isScrolled ? "text-[var(--charcoal)]" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-[var(--clay-red)] hover:bg-[var(--clay-red)]/90"
            >
              Buy Threestone Fire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-[var(--charcoal)]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4 rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-[var(--charcoal)] hover:bg-[var(--sand-beige)] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button
                onClick={() => scrollToSection("cta")}
                className="w-full bg-[var(--clay-red)] hover:bg-[var(--clay-red)]/90"
              >
                Buy Threestone Reduction
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

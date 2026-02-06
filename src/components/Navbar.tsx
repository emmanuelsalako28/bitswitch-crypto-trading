import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Trade", href: "#trade" },
  { label: "Markets", href: "#markets" },
  { label: "About", href: "#about" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <img src={logo} alt="Bitswitch logo" className="h-8 w-8 object-contain" />
          <span className="text-foreground">Bit</span>
          <span className="text-gradient-orange">switch</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#calculator"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Calculator
          </a>
          <a
            href="#markets"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Markets
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://wa.me/2348035826698" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="sm">Get Started</Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-2 p-4">
              <a
                href="#calculator"
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Calculator
              </a>
              <a
                href="#markets"
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Markets
              </a>
              <a
                href="#contact"
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
              <div className="flex gap-3 pt-2">
                <a href="https://wa.me/2348035826698" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="hero" size="sm" className="w-full">Get Started</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

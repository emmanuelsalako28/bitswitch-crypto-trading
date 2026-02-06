import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/5 p-10 sm:p-16 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Join millions of traders worldwide. Create your account in minutes and start building your portfolio today.
            </p>
            <a href="https://wa.me/2348035836698" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-10 py-6">
                Trade with us <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

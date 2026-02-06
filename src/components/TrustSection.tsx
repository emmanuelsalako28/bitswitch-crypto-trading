import { motion } from "framer-motion";
import { Lock, ShieldCheck, FileCheck, Globe } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    title: "Advanced Encryption",
    description: "Advanced encryption to protect user data and transactions.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Infrastructure",
    description: "Secure wallet infrastructure designed to safeguard your assets.",
  },
  {
    icon: FileCheck,
    title: "Account Protection",
    description: "Comprehensive account protection and continuous monitoring.",
  },
  {
    icon: Globe,
    title: "Transparent",
    description: "Unwavering commitment to transparency and operational reliability.",
  },
];

const TrustSection = () => {
  return (
    <section id="security" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Security You Can <span className="text-gradient-green">Trust</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            At Bitswitch, security is our top priority. We are committed to protecting user funds, data, and transactions through robust security measures and transparent operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

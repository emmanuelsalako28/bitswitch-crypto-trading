import { motion } from "framer-motion";
import { Lock, Eye, Server } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    description: "256-bit AES encryption secures every transaction and piece of data on our platform.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Real-time proof of reserves and publicly audited financials you can verify anytime.",
  },
  {
    icon: Server,
    title: "99.99% Uptime",
    description: "Redundant infrastructure across multiple regions ensures maximum reliability.",
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
            Your assets are protected by industry-leading security standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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

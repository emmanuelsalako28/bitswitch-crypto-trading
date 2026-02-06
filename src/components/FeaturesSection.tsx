import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Transactions",
    description: "Execute trades in milliseconds with our high-performance matching engine.",
    gradient: "text-gradient-orange",
  },
  {
    icon: Shield,
    title: "Secure Wallets",
    description: "Enterprise-grade security with cold storage and multi-signature protection.",
    gradient: "text-gradient-green",
  },
  {
    icon: BarChart3,
    title: "Real-Time Prices",
    description: "Live market data with advanced charting tools and price alerts.",
    gradient: "text-gradient-orange",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Trade anytime, anywhere. Our platform never sleeps, so you never miss a move.",
    gradient: "text-gradient-green",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesSection = () => {
  return (
    <section id="trade" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Why Choose <span className="text-gradient-orange">Bitswitch</span>?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Built for speed, engineered for security, designed for you.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className={`font-display font-semibold text-lg mb-2 ${f.gradient}`}>{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

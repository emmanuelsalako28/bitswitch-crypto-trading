import { motion } from "framer-motion";
import { TrendingUp, Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
    {
        icon: TrendingUp,
        title: "Check the Live Price in Naira",
        description: "View the current Bitcoin selling price in NGN in real time before you proceed.",
    },
    {
        icon: Calculator,
        title: "Enter Amount to Sell",
        description: "Choose how much Bitcoin you want to sell and instantly see the naira value.",
    },
    {
        icon: CheckCircle2,
        title: "Complete Your Sale",
        description: "Send your Bitcoin and receive your payout quickly and securely.",
    },
];

const HowToTradeSection = () => {
    return (
        <section className="py-24 relative bg-accent/5">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                        Sell Bitcoin Instantly in <span className="text-gradient-orange">3 Simple Steps</span>
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        No sign-up. No account. Just fast Bitcoin selling.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative flex flex-col items-center text-center z-10"
                        >
                            <div className="w-24 h-24 rounded-full bg-background border border-border flex items-center justify-center mb-6 shadow-lg">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <step.icon className="h-8 w-8 text-primary" />
                                </div>
                            </div>
                            <h3 className="font-display font-semibold text-xl mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#markets">
                        <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                            Check Bitcoin Price
                        </Button>
                    </a>
                    <a href="https://wa.me/2348035826698" target="_blank" rel="noopener noreferrer">
                        <Button variant="hero" size="lg">
                            Sell Bitcoin Now <ArrowRight className="ml-1 h-5 w-5" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowToTradeSection;

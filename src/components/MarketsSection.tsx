import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const coins = [
  { name: "Bitcoin", symbol: "BTC", price: "$97,245.30", change: "+2.41%", up: true },
  { name: "Ethereum", symbol: "ETH", price: "$3,412.18", change: "+1.87%", up: true },
  { name: "Solana", symbol: "SOL", price: "$198.54", change: "-0.93%", up: false },
  { name: "Cardano", symbol: "ADA", price: "$0.892", change: "+3.12%", up: true },
  { name: "Ripple", symbol: "XRP", price: "$2.34", change: "-1.05%", up: false },
  { name: "Polkadot", symbol: "DOT", price: "$8.67", change: "+0.78%", up: true },
];

const MarketsSection = () => {
  return (
    <section id="markets" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Live <span className="text-gradient-green">Markets</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Track the top digital assets in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-3 text-xs font-medium text-muted-foreground border-b border-border">
            <span>Asset</span>
            <span className="text-right">Price</span>
            <span className="text-right">24h Change</span>
            <span className="text-right hidden sm:block">Action</span>
          </div>

          {coins.map((coin, i) => (
            <motion.div
              key={coin.symbol}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-4 gap-4 px-6 py-4 items-center border-b border-border/50 hover:bg-surface-hover transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {coin.symbol.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{coin.name}</div>
                  <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                </div>
              </div>
              <div className="text-right font-mono text-sm font-medium">{coin.price}</div>
              <div className={`text-right text-sm font-medium flex items-center justify-end gap-1 ${coin.up ? "text-accent" : "text-destructive"}`}>
                {coin.up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                {coin.change}
              </div>
              <div className="text-right hidden sm:block">
                <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                  Trade →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketsSection;

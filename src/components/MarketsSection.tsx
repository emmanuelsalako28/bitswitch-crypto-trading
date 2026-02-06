import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface CoinData {
  name: string;
  symbol: string;
  price: string;
  change: string;
  up: boolean;
}

const fetchPrices = async (): Promise<CoinData[]> => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd&include_24hr_change=true"
  );
  if (!res.ok) throw new Error("Failed to fetch prices");
  const data = await res.json();

  return [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: `$${data.bitcoin.usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: `${data.bitcoin.usd_24h_change >= 0 ? "+" : ""}${data.bitcoin.usd_24h_change.toFixed(2)}%`,
      up: data.bitcoin.usd_24h_change >= 0,
    },
    {
      name: "Tether",
      symbol: "USDT",
      price: `$${data.tether.usd.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`,
      change: `${data.tether.usd_24h_change >= 0 ? "+" : ""}${data.tether.usd_24h_change.toFixed(4)}%`,
      up: data.tether.usd_24h_change >= 0,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: `$${data.ethereum.usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      change: `${data.ethereum.usd_24h_change >= 0 ? "+" : ""}${data.ethereum.usd_24h_change.toFixed(2)}%`,
      up: data.ethereum.usd_24h_change >= 0,
    },
  ];
};

const MarketsSection = () => {
  const { data: coins, isLoading, isError, dataUpdatedAt, refetch } = useQuery({
    queryKey: ["crypto-prices"],
    queryFn: fetchPrices,
    refetchInterval: 30000, // refresh every 30s
    staleTime: 15000,
  });

  const fallbackCoins: CoinData[] = [
    { name: "Bitcoin", symbol: "BTC", price: "—", change: "—", up: true },
    { name: "Tether", symbol: "USDT", price: "—", change: "—", up: true },
    { name: "Ethereum", symbol: "ETH", price: "—", change: "—", up: true },
  ];

  const displayCoins = coins ?? fallbackCoins;

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
            Real-time prices for the assets we trade.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Market List */}
          <div className="lg:col-span-2 rounded-xl border border-border bg-card overflow-hidden h-fit">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-3 text-xs font-medium text-muted-foreground border-b border-border">
              <span>Asset</span>
              <span className="text-right">Price (USD)</span>
              <span className="text-right">24h Change</span>
              <span className="text-right hidden sm:block">Action</span>
            </div>

            {displayCoins.map((coin, i) => (
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
                <div className="text-right font-mono text-sm font-medium">
                  {isLoading ? (
                    <span className="inline-block w-20 h-4 bg-muted animate-pulse rounded" />
                  ) : (
                    coin.price
                  )}
                </div>
                <div className={`text-right text-sm font-medium flex items-center justify-end gap-1 ${coin.up ? "text-accent" : "text-destructive"}`}>
                  {isLoading ? (
                    <span className="inline-block w-14 h-4 bg-muted animate-pulse rounded" />
                  ) : (
                    <>
                      {coin.up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                      {coin.change}
                    </>
                  )}
                </div>
                <div className="text-right hidden sm:block">
                  <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                    Trade →
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Footer with refresh info */}
            <div className="px-6 py-3 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50">
              <span>
                {isError ? "Unable to fetch prices" : dataUpdatedAt ? `Updated ${new Date(dataUpdatedAt).toLocaleTimeString()}` : "Loading..."}
              </span>
              <button
                onClick={() => refetch()}
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <RefreshCw className="h-3 w-3" /> Refresh
              </button>
            </div>
          </div>

          {/* Connect to Trading (Visual only) */}
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col h-full">
            <h3 className="font-display font-semibold text-lg mb-6">Market Depth (BTC/USDT)</h3>

            <div className="flex-1 flex flex-col gap-1 text-xs font-mono mb-6">
              {/* Asks */}
              {[
                { p: "65,432.10", a: "0.5432", t: "ask" },
                { p: "65,430.50", a: "1.2003", t: "ask" },
                { p: "65,428.00", a: "0.1500", t: "ask" },
                { p: "65,425.20", a: "0.8921", t: "ask" },
                { p: "65,422.00", a: "2.1000", t: "ask" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center text-destructive">
                  <span>{row.p}</span>
                  <span className="text-muted-foreground">{row.a}</span>
                </div>
              ))}

              <div className="py-2 flex items-center justify-between font-bold text-lg border-y border-border/50 my-2">
                <span className="text-foreground">65,421.50</span>
                <span className="text-xs font-normal text-muted-foreground">≈ $65,421.50</span>
              </div>

              {/* Bids */}
              {[
                { p: "65,420.00", a: "1.5000", t: "bid" },
                { p: "65,418.50", a: "0.3321", t: "bid" },
                { p: "65,415.20", a: "0.6500", t: "bid" },
                { p: "65,412.00", a: "4.1002", t: "bid" },
                { p: "65,410.10", a: "0.2200", t: "bid" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center text-accent">
                  <span>{row.p}</span>
                  <span className="text-muted-foreground">{row.a}</span>
                </div>
              ))}
            </div>

            <a href="https://wa.me/2348035826698" target="_blank" rel="noopener noreferrer" className="mt-auto">
              <button className="w-full py-3 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-colors">
                Full Order Book
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketsSection;

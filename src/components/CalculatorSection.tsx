import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCw, Calculator } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const RATES = {
    BTC: { usd: 65000, name: "Bitcoin" },
    ETH: { usd: 3500, name: "Ethereum" },
    USDT: { usd: 1, name: "Tether" },
};

const USD_TO_NGN = 1750; // Estimated parallel rate

const CalculatorSection = () => {
    const [asset, setAsset] = useState("BTC");
    const [amount, setAmount] = useState<string>("0.1");
    const [payout, setPayout] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    // Use shared query for prices
    const { data: priceData, isLoading } = useQuery({
        queryKey: ["crypto-prices"],
        queryFn: fetchCryptoPrices,
        refetchInterval: 60000, // Sync with MarketsSection, but maybe less frequent? 
        // Actually if key matches, they share the hook. 
        // Let's rely on the StaleTime from MarketsSection or set a common one.
        staleTime: 30000,
    });

    const getPrice = (symbol: string) => {
        if (!priceData) {
            // Fallbacks
            if (symbol === "BTC") return 65000;
            if (symbol === "ETH") return 3500;
            if (symbol === "USDT") return 1;
            return 0;
        }
        if (symbol === "BTC") return priceData.bitcoin.usd;
        if (symbol === "ETH") return priceData.ethereum.usd;
        if (symbol === "USDT") return priceData.tether.usd;
        return 0;
    };

    const currentPrice = getPrice(asset);

    useEffect(() => {
        const calculate = () => {
            setLoading(true);
            setTimeout(() => {
                const val = parseFloat(amount || "0");
                setPayout(val * currentPrice * USD_TO_NGN);
                setLoading(false);
            }, 300);
        };

        calculate();
    }, [asset, amount, currentPrice]);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                        Calculate Your <span className="text-gradient-orange">Payout</span>
                    </h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        See exactly how much Naira you'll receive before you sell.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-3xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Left: Input Side */}
                    <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Calculator className="h-5 w-5 text-primary" /> What are you selling?
                        </h3>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label>Select Asset</Label>
                                <Select value={asset} onValueChange={setAsset}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                                        <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                                        <SelectItem value="USDT">Tether (USDT)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Amount</Label>
                                <Input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    min="0"
                                    step="0.000001"
                                    className="font-mono text-lg"
                                />
                            </div>

                            <div className="pt-4 border-t border-border mt-4">
                                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                                    <span>Exchange Rate Used:</span>
                                    <span className="font-mono">1 USD ≈ ₦{USD_TO_NGN.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>Asset Price:</span>
                                    <span className="font-mono">${currentPrice.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Result Side */}
                    <div className="p-8 md:p-12 md:w-1/2 bg-primary text-primary-foreground flex flex-col justify-center relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 bg-grid-white opacity-10" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <p className="text-primary-foreground/80 font-medium mb-1">You Receive Estimate</p>

                            <div className="text-4xl sm:text-5xl font-bold font-mono tracking-tight mb-2 break-words">
                                {loading ? (
                                    <RefreshCw className="h-10 w-10 animate-spin opacity-50" />
                                ) : (
                                    `₦${payout.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
                                )}
                            </div>

                            <p className="text-sm text-primary-foreground/60 mb-8">
                                *Values are estimates based on real-time market data.
                            </p>

                            <a href="https://wa.me/2348035826698" target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    className="w-full bg-background text-foreground hover:bg-background/90 font-bold text-lg h-14"
                                >
                                    Sell Now <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CalculatorSection;

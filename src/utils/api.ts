

// Defining a simple interface for the hook to use
export interface CryptoData {
    bitcoin: { usd: number; usd_24h_change: number };
    ethereum: { usd: number; usd_24h_change: number };
    tether: { usd: number; usd_24h_change: number };
}

export const fetchCryptoPrices = async (): Promise<CryptoData> => {
    try {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd&include_24hr_change=true"
        );

        if (!res.ok) {
            // If rate limited (429), throw specifically so we can maybe use cache or fallback
            if (res.status === 429) {
                console.warn("CoinGecko Rate Limit exceeded. Using fallback data if available.");
            }
            throw new Error(`API Error: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Failed to fetch crypto prices:", error);
        throw error;
    }
};

async function getTrendingCoins() {
    const container = document.getElementById('coins-container');
    
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        
        // Get first 20 coins
        const coins = data.coins.slice(0, 20);
        
        container.innerHTML = '';
        
        coins.forEach(coin => {
            const item = coin.item;
            const price = item.data.price;
            const change = item.data.price_change_percentage_24h.usd;
            
            const coinCard = document.createElement('div');
            coinCard.className = 'coin-card';
            coinCard.innerHTML = `
                <img src="${item.thumb}" alt="${item.name}" class="coin-image">
                <div class="coin-info">
                    <div class="coin-name">${item.name} (${item.symbol})</div>
                    <div class="rank">Rank #${item.market_cap_rank}</div>
                </div>
                <div>
                    <div class="coin-price">$${price}</div>
                    <div class="coin-change ${change >= 0 ? 'positive' : 'negative'}">
                        ${change >= 0 ? '+' : ''}${change.toFixed(2)}%
                    </div>
                </div>
            `;
            container.appendChild(coinCard);
        });
        
    } catch (error) {
        container.innerHTML = '<p>Error loading trending coins. Please try again later.</p>';
        console.error('Error:', error);
    }
}

getTrendingCoins();

// AFL Stock Exchange Game (Standalone Version - No Firebase)

let balance = 1000;
let holdings = {};

const players = [
    { name: "Bayley Fritsch", team: "Melbourne", stockPrice: 8.97 },
    { name: "Charlie Spargo", team: "Melbourne", stockPrice: 2.5 },
    { name: "Kade Chandler", team: "Melbourne", stockPrice: 8.991 },
    { name: "Trent Rivers", team: "Melbourne", stockPrice: 11.026 },
    { name: "Jake Bowey", team: "Melbourne", stockPrice: 5.75 },
    { name: "Hayden McLean", team: "Sydney", stockPrice: 7.604 },
    { name: "Nick Blakey", team: "Sydney", stockPrice: 13.331 },
    { name: "James Rowbottom", team: "Sydney", stockPrice: 13.517 }
];

document.addEventListener("DOMContentLoaded", () => {
    setupUI();
});

function setupUI() {
    document.body.insertAdjacentHTML('beforeend', `
        <h2>Balance: <span id="balance">$1000.00</span></h2>
        <h2>Stock Holdings</h2>
        <table id="holdingsTable">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Shares Owned</th>
                    <th>Price per Share</th>
                    <th>Profit/Loss</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <h2>Available Players</h2>
        <table id="playersTable">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Stock Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `);
    loadPlayers();
    updateUI();
}

function loadPlayers() {
    const tableBody = document.querySelector("#playersTable tbody");
    tableBody.innerHTML = "";
    players.forEach((player) => {
        let teamStyle = player.team === 'Melbourne' ? "background-color: navy; color: red; padding: 5px; border-radius: 5px;" : 
                        player.team === 'Sydney' ? "background-color: red; color: white; padding: 5px; border-radius: 5px;" : "";
        let row = `
            <tr>
                <td>${player.name}</td>
                <td><span style="${teamStyle}">${player.team}</span></td>
                <td>$${player.stockPrice.toFixed(2)}</td>
                <td>
                    <button onclick="buyPlayer('${player.name}')">Buy</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function buyPlayer(name) {
    const player = players.find(p => p.name === name);
    if (!player) return;
    
    const sharesToBuy = parseInt(prompt(`How many shares of ${name} do you want to buy?`), 10);
    if (isNaN(sharesToBuy) || sharesToBuy <= 0) {
        alert("Invalid number of shares.");
        return;
    }
    
    const totalCost = player.stockPrice * sharesToBuy;
    if (balance >= totalCost) {
        balance -= totalCost;
        if (!holdings[name]) {
            holdings[name] = { team: player.team, shares: 0, price: player.stockPrice };
        }
        holdings[name].shares += sharesToBuy;
        updateUI();
    } else {
        alert("Not enough funds to complete the purchase.");
    }
}

function updateUI() {
    document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
    const holdingsTable = document.querySelector("#holdingsTable tbody");
    holdingsTable.innerHTML = Object.entries(holdings).map(([player, data]) => `
        <tr>
            <td>${player}</td>
            <td>${data.team}</td>
            <td>${data.shares}</td>
            <td>$${data.price.toFixed(2)}</td>
            <td>$${((players.find(p => p.name === player).stockPrice - data.price) * data.shares).toFixed(2)}</td>
        </tr>
    `).join('') || '<tr><td colspan="5">No holdings yet</td></tr>';
}


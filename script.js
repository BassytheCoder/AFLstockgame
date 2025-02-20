let balance = parseFloat(localStorage.getItem("balance")) || 1000;
let players = [
    { name: "Marcus Bontempelli", team: "Western Bulldogs", price: 19.079 },
    { name: "Patrick Cripps", team: "Carlton", price: 18.317 },
    { name: "George Wardlaw", team: "North Melbourne", price: 9.14 },
    { name: "Will Day", team: "Hawthorn", price: 13.344 },
    { name: "Sam Durham", team: "Essendon", price: 11.19 },
    { name: "Harley Reid", team: "West Coast Eagles", price: 10.12 },
    { name: "Isaac Heeney", team: "Sydney", price: 17.304 },
    { name: "Will Ashcroft", team: "Brisbane", price: 10.821 },
    { name: "Patrick Dangerfield", team: "Geelong", price: 12.911 },
    { name: "Zak Butters", team: "Port Adelaide", price: 14.923 },
    { name: "Jake Soligo", team: "Adelaide", price: 8.225 },
    // ... (other players)
];

let currentHoldings = JSON.parse(localStorage.getItem("currentHoldings")) || [];

// Function to update the displayed balance
function updateBalance() {
    document.getElementById("balance").innerText = balance.toFixed(2);
    localStorage.setItem("balance", balance.toFixed(2));
}

function setUsername() {
    let username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Please enter a username.");
        return;
    }
    localStorage.setItem("username", username);
    document.getElementById("user-info").innerHTML = `<h3>Welcome, ${username}!</h3>`;
}

function populatePlayers() {
    console.log("populatePlayers function called");
    let table = document.getElementById("players-table");
    table.innerHTML = "";
    players.forEach((player, index) => {
        let teamClass = player.team.toLowerCase().replace(/\s+/g, '-');
        let row = `<tr class="player-container">
            <td>${player.name}</td>
            <td><span class="team-container ${teamClass}">${player.team}</span></td>
            <td>$${player.price.toFixed(2)}</td>
            <td>
                <button onclick="buyStock(${index})">Buy</button>
                <button class="short" onclick="shortStock(${index})">Short</button>
            </td>
        </tr>`;
        table.innerHTML += row;
    });
}

function buyStock(index) {
    let shares = parseInt(prompt("Enter number of shares to buy:"));
    if (isNaN(shares) || shares <= 0) return;
    let cost = shares * players[index].price;
    if (cost > balance) {
        alert("Insufficient balance!");
        return;
    }
    balance -= cost;
    updateBalance();
    addToHoldings(players[index].name, players[index].team, shares, "Buy", players[index].price);
}

function shortStock(index) {
    let shares = parseInt(prompt("Enter number of shares to short:"));
    if (isNaN(shares) || shares <= 0) return;
    let cost = shares * players[index].price;
    if (cost > balance) {
        alert("Insufficient balance!");
        return;
    }
    balance -= cost;
    updateBalance();
    addToHoldings(players[index].name, players[index].team, shares, "Short", players[index].price);
}

function addToHoldings(player, team, shares, type, price) {
    currentHoldings.push({ player, team, shares, type, price });
    localStorage.setItem("currentHoldings", JSON.stringify(currentHoldings));
    updateHoldingsTable();
    updateHoldingsBox(); // Ensure both table and box are updated
}

function sellStock(playerName) {
    let holding = currentHoldings.find(h => h.player === playerName);
    if (!holding) {
        alert("You do not own any shares of this player.");
        return;
    }
    let shares = parseInt(prompt("Enter number of shares to sell:"));
    if (isNaN(shares) || shares <= 0 || shares > holding.shares) {
        alert("Invalid number of shares.");
        return;
    }
    let earnings = shares * holding.price;
    balance += earnings;
    holding.shares -= shares;
    if (holding.shares === 0) {
        currentHoldings = currentHoldings.filter(h => h.player !== playerName);
    }
    localStorage.setItem("currentHoldings", JSON.stringify(currentHoldings));
    updateHoldingsTable();
    updateHoldingsBox(); // Ensure both table and box are updated
    updateBalance();
}

function updateHoldingsTable() {
    let table = document.getElementById("holdings-table");
    table.innerHTML = `<tr>
        <th>Player</th>
        <th>Team</th>
        <th>Shares</th>
        <th>Type</th>
        <th>Price</th>
        <th>Total Value</th>
        <th>Action</th>
    </tr>`;
    currentHoldings.forEach(holding => {
        let totalValue = (holding.shares * holding.price).toFixed(2);
        let row = `<tr>
            <td>${holding.player}</td>
            <td>${holding.team}</td>
            <td>${holding.shares}</td>
            <td>${holding.type}</td>
            <td>$${holding.price.toFixed(2)}</td>
            <td>$${totalValue}</td>
            <td><button class="sell" onclick="sellStock('${holding.player}')">Sell Position</button></td>
        </tr>`;
        table.innerHTML += row;
    });
}

function updateHoldingsBox() {
    const box = document.getElementById("holdings-box");
    box.innerHTML = "";

    currentHoldings.forEach(holding => {
        let condensedName = `${holding.player.split(" ")[0][0]}.${holding.player.split(" ")[1].substring(0, 3).toUpperCase()}`;
        let value = (holding.shares * holding.price).toFixed(2);
        let holdingItem = `<div class="holding-item ${holding.type.toLowerCase()}"><b>${condensedName}</b> $${holding.price.toFixed(2)} (${value})</div>`;
        box.innerHTML += holdingItem;
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded event fired");
    let storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        document.getElementById("user-info").innerHTML = `<h3>Welcome back, ${storedUsername}!</h3>`;
    }
    updateBalance();
    updateHoldingsTable();
    updateHoldingsBox();
    populatePlayers();
});

let balance = 1000;
let players = [
    { name: "Marcus Bontempelli", team: "Western Bulldogs", price: 19.079 },
    { name: "Patrick Cripps", team: "Carlton", price: 18.317 },
    { name: "George Wardlaw", team: "North Melbourne", price: 9.14 },
    { name: "Will Day", team: "Hawthorn", price: 13.344 },
    { name: "Sam Durham", team: "Essendon", price: 11.19 },
    { name: "Harley Reid", team: "West Coast Eagles", price: 10.12 },
    { name: "Isaac Heeney", team: "Sydney", price: 17.304 },
    // ... (other players)
];

let currentHoldings = [];

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
        let row = `<tr class="player-container">
            <td>${player.name}</td>
            <td>${player.team}</td>
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
    let table = document.getElementById("holdings-table");
    let row = `<tr>
        <td>${player}</td>
        <td>${team}</td>
        <td>${shares}</td>
        <td>${type}</td>
        <td>$${price.toFixed(2)}</td>
    </tr>`;
    table.innerHTML += row;
}

function updateBalance() {
    document.getElementById("balance").innerText = balance.toFixed(2);
}

function toggleHoldingsPopup() {
    const popup = document.getElementById("holdings-popup");
    popup.classList.toggle("hidden");
    
    // Clear the existing holdings
    document.getElementById("holdings-table").innerHTML = "";

    // Add a header row for visibility
    let headerRow = `<tr>
        <th>Player</th>
        <th>Price</th>
        <th>Value</th>
    </tr>`;
    document.getElementById("holdings-table").innerHTML += headerRow;

    // Re-add the holdings with the condensed format
    currentHoldings.forEach(holding => {
        let condensedName = `${holding.player.split(" ")[0][0]}.${holding.player.split(" ")[1].substring(0, 3).toUpperCase()}`;
        let value = (holding.shares * holding.price).toFixed(2);
        let row = `<tr>
            <td>${condensedName}</td>
            <td>$${holding.price.toFixed(2)}</td>
            <td>(${value})</td>
        </tr>`;
        document.getElementById("holdings-table").innerHTML += row;
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded event fired");
    let storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        document.getElementById("user-info").innerHTML = `<h3>Welcome back, ${storedUsername}!</h3>`;
    }
    populatePlayers();
});

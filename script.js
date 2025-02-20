let balance = parseFloat(localStorage.getItem("balance")) || 1000;
let players = [
    { name: "Marcus Bontempelli", team: "Western Bulldogs", price: 19.079 },
    { name: "Patrick Cripps", team: "Carlton", price: 18.317 },
    { name: "George Wardlaw", team: "North Melbourne", price: 9.14 },
    { name: "Will Day", team: "Hawthorn", price: 13.344 },
    { name: "Sam Durham", team: "Essendon", price: 11.19 },
    { name: "Harley Reid", team: "West Coast Eagles", price: 10.12 },
    { name: "Isaac Heeney", team: "Sydney", price: 17.304 },
    { name: "Jayden Short", team: "Richmond", price: 11.134 },
    // ... (other players)
];

let currentHoldings = JSON.parse(localStorage.getItem("currentHoldings")) || [];

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
    localStorage.setItem("currentHoldings", JSON.stringify(currentHoldings));
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
    localStorage.setItem("balance", balance.toFixed(2));
}

function toggleHoldingsOverlay() {
    const overlay = document.getElementById("holdings-overlay");
    overlay.classList.toggle("hidden");

    // Clear existing content
    overlay.innerHTML = '<span class="close-button" onclick="closeOverlay()">x</span>';

    // Populate with holdings in the condensed format
    currentHoldings.forEach(holding => {
        let condensedName = `${holding.player.split(" ")[0][0]}.${holding.player.split(" ")[1].substring(0, 3).toUpperCase()}`;
        let value = (holding.shares * holding.price).toFixed(2);
        let holdingItem = `<div class="holding-item ${holding.type.toLowerCase()}"><b>${condensedName}</b> $${holding.price.toFixed(2)} (${value})</div>`;
        overlay.innerHTML += holdingItem;
    });

    overlay.style.display = overlay.style.display === "none" ? "block" : "none";
}

function closeOverlay() {
    document.getElementById("holdings-overlay").style.display = "none";
}

// Attach the function to the graph emoji
document.getElementById("holdings-icon").addEventListener("click", toggleHoldingsOverlay);

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded event fired");
    let storedUsername = localStorage.getItem("username");
    if (storedUsername) {
        document.getElementById("user-info").innerHTML = `<h3>Welcome back, ${storedUsername}!</h3>`;
    }
    updateBalance();
    currentHoldings.forEach(holding => {
        let table = document.getElementById("holdings-table");
        let row = `<tr>
            <td>${holding.player}</td>
            <td>${holding.team}</td>
            <td>${holding.shares}</td>
            <td>${holding.type}</td>
            <td>$${holding.price.toFixed(2)}</td>
        </tr>`;
        table.innerHTML += row;
    });
    populatePlayers();
});

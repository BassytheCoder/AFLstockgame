let balance = 1000;
let players = [
    { name: "Marcus Bontempelli", team: "Western Bulldogs", price: 19.079 },
    { name: "Patrick Cripps", team: "Carlton", price: 18.317 },
    { name: "Isaac Heeney", team: "Sydney", price: 17.304 },
    { name: "Max Gawn", team: "Melbourne", price: 17.167 },
    { name: "Caleb Serong", team: "Fremantle", price: 16.978 },
    { name: "Lachie Neale", team: "Brisbane", price: 16.804 },
    { name: "Nick Daicos", team: "Collingwood", price: 16.778 },
    { name: "Christian Petracca", team: "Melbourne", price: 16.654 },
    { name: "Izak Rankine", team: "Adelaide", price: 16.640 },
    { name: "Matt Rowell", team: "Gold Coast", price: 16.148 },
    { name: "Hayden Young", team: "Fremantle", price: 16.143 },
    { name: "Tristan Xerri", team: "North Melbourne", price: 16.122 },
    { name: "Adam Treloar", team: "Western Bulldogs", price: 15.887 },
    { name: "Noah Anderson", team: "Gold Coast", price: 15.765 },
    { name: "Chad Warner", team: "Sydney", price: 15.676 },
    { name: "Zach Merrett", team: "Essendon", price: 15.604 },
    { name: "Zak Butters", team: "Port Adelaide", price: 15.581 },
    { name: "Luke Davies-Uniacke", team: "North Melbourne", price: 15.400 },
    { name: "Harry Sheezel", team: "North Melbourne", price: 15.214 },
    { name: "Jai Newcombe", team: "Hawthorn", price: 15.076 },
    { name: "Jack Sinclair", team: "St Kilda", price: 14.905 },
    { name: "Max Holmes", team: "Geelong", price: 14.872 },
    { name: "Josh Kelly", team: "Greater Western Sydney", price: 14.706 },
    { name: "Sam Flanders", team: "Gold Coast", price: 14.700 },
    { name: "Ed Richards", team: "Western Bulldogs", price: 14.605 },
    { name: "Errol Gulden", team: "Sydney", price: 14.408 },
    { name: "Tom Liberatore", team: "Western Bulldogs", price: 14.356 },
    { name: "Marc Pittonet", team: "Carlton", price: 14.264 },
    { name: "Tom Green", team: "Greater Western Sydney", price: 14.244 },
    { name: "Rowan Marshall", team: "St Kilda", price: 14.157 },
    { name: "Tom De Koning", team: "Carlton", price: 14.022 }
];

function setUsername() {
    let username = document.getElementById("username").value;
    if (username.trim() === "") {
        alert("Please enter a username.");
        return;
    }
    document.getElementById("user-info").innerHTML = `<h3>Welcome, ${username}!</h3>`;
}

function populatePlayers() {
    let table = document.getElementById("players-table");
    table.innerHTML = "";
    players.forEach((player, index) => {
        let row = `<tr>
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>$${player.price.toFixed(2)}</td>
            <td>
                <button onclick="buyStock(${index})">Buy</button>
                <button onclick="shortStock(${index})">Short</button>
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

document.addEventListener("DOMContentLoaded", populatePlayers);

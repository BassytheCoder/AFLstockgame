let balance = 1000;
let players = [
    { name: "Bayley Fritsch", team: "Melbourne", price: 8.97 },
    { name: "Charlie Spargo", team: "Melbourne", price: 2.5 },
    { name: "Kade Chandler", team: "Melbourne", price: 8.991 },
    // Add the rest of the players here
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

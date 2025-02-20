let balance = 1000;
let players = [
    { name: "Marcus Bontempelli", team: "Western Bulldogs", price: 19.079 },
    { name: "Patrick Cripps", team: "Carlton", price: 18.317 },
    { name: "Isaac Heeney", team: "Sydney", price: 17.304 },
    // ... (other players)
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

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOMContentLoaded event fired");
    populatePlayers();
});

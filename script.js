let balance = parseFloat(localStorage.getItem("balance")) || 1000;
let currentPage = 1;
const playersPerPage = 20;
let players = [];
let currentHoldings = JSON.parse(localStorage.getItem("currentHoldings")) || [];

function searchPlayers() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let table = document.getElementById('players-table');
    table.innerHTML = '';

    let filteredPlayers = players.filter(player => player.name.toLowerCase().includes(input));

    if (input === '') {
        currentPage = 1;
        populatePlayers();
        return;
    }

    filteredPlayers.forEach((player, index) => {
        let teamClass = player.team.toLowerCase().replace(/\s+/g, '-');
        let row = `<tr class="player-container">
            <td onclick="loadAndDisplayStats(${players.indexOf(player)}, '${player.name}', filteredPlayers)">
                ${player.name}
                <div class="position-container">${player.position}</div>
                <div class="player-stats hidden" id="stats-${players.indexOf(player)}"></div>
            </td>
            <td><span class="team-container ${teamClass}">${player.team}</span></td>
            <td>$${player.price.toFixed(2)}</td>
            <td class="button-cell">
                <button onclick="buyStock(${players.indexOf(player)})">Buy</button>
                <button class="short" onclick="shortStock(${players.indexOf(player)})">Short</button>
            </td>
        </tr>`;
        table.innerHTML += row;
    });
}

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

function changePage(page) {
    const totalPages = Math.ceil(players.length / playersPerPage);
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    currentPage = page;
    populatePlayers();
}

function nextPage() {
    changePage(currentPage + 1);
}

function prevPage() {
    changePage(currentPage - 1);
}

function paginatePlayers(players) {
    const start = (currentPage - 1) * playersPerPage;
    const end = start + playersPerPage;
    return players.slice(start, end);
}

function filterByTeam(team) {
    console.log(`Filtering by team: ${team}`);
    return players.filter(player => player.team === team);
}

function sortByPrice(players, order = 'asc') { // Changed to accept players and order as parameters
    return players.sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
}

function populateTeamFilter() {
    console.log("Populating team filter");
    const teamFilter = document.getElementById("teamFilter");
    const teams = [...new Set(players.map(player => player.team))];
    teams.forEach(team => {
        const option = document.createElement("option");
        option.value = team;
        option.text = team;
        teamFilter.add(option);
    });
}

function populatePlayers() {
    let filteredPlayers = players;

    const teamFilter = document.getElementById("teamFilter").value;
    if (teamFilter !== "") {
        filteredPlayers = filterByTeam(teamFilter);
    }

    const sortOrder = document.getElementById("sortOrder").value;
    filteredPlayers = sortByPrice(filteredPlayers, sortOrder);

    const paginatedPlayers = paginatePlayers(filteredPlayers);

    let table = document.getElementById("players-table");
    table.innerHTML = "";
    paginatedPlayers.forEach((player, index) => {
        let teamClass = player.team.toLowerCase().replace(/\s+/g, '-');
        let row = `<tr class="player-container">
            <td onclick="loadAndDisplayStats(${players.indexOf(player)}, '${player.name}')">
                ${player.name}
                <div class="position-container">${player.position}</div>
                <div class="player-stats hidden" id="stats-${players.indexOf(player)}"></div>
            </td>
            <td><span class="team-container ${teamClass}">${getTeamAbbreviation(player.team)}</span></td>
            <td>$${player.price.toFixed(2)}</td>
            <td class="button-cell">
                <button onclick="buyStock(${players.indexOf(player)})">Buy</button>
                <button class="short" onclick="shortStock(${players.indexOf(player)})">Short</button>
            </td>
        </tr>`;
        table.innerHTML += row;
    });

    document.getElementById("page-number").innerText = `Page ${currentPage}`;
}

function loadAndDisplayStats(index, playerName) {
    const statsDiv = document.getElementById(`stats-${index}`);
    if (statsDiv.classList.contains("hidden")) {
        fetch('afl-player-stats-2024.csv')
            .then(response => response.text())
            .then(data => {
                const rows = data.split('\n');
                const playerRow = rows.find(row => row.includes(playerName));
                if (playerRow) {
                    const columns = playerRow.split(',');
                    const playerStats = `
                        ${parseFloat(columns[16]).toFixed(1)} Disp 
                        ${parseFloat(columns[49]).toFixed(1)} Mks 
                        ${parseFloat(columns[64]).toFixed(1)} Tckl 
                        ${parseFloat(columns[76]).toFixed(1)} Si
                    `;
                    statsDiv.innerHTML = playerStats;
                }
                statsDiv.classList.remove("hidden");
            });
    } else {
        statsDiv.classList.toggle("hidden");
    }
}

function buyStock(index) {
    const player = players[index];
    let shares = parseInt(prompt("Enter number of shares to buy:"));
    if (isNaN(shares) || shares <= 0) return;
    let cost = shares * player.price;
    if (cost > balance) {
        alert("Insufficient balance!");
        return;
    }
    balance -= cost;
    updateBalance();
    addToHoldings(player.name, player.team, shares, "Buy", player.price);
    console.log("Bought shares:", shares, "Cost:", cost, "New Balance:", balance);
}

function shortStock(index) {
    const player = players[index];
    let shares = parseInt(prompt("Enter number of shares to short:"));
    if (isNaN(shares) || shares <= 0) return;
    let revenue = shares * player.price;
    balance += revenue;
    updateBalance();
    addToHoldings(player.name, player.team, shares, "Short", player.price);
    console.log("Shorted shares:", shares, "Revenue:", revenue, "New Balance:", balance);
}

function addToHoldings(player, team, shares, type, price) {
    currentHoldings.push({ player, team, shares, type, price });
    localStorage.setItem("currentHoldings", JSON.stringify(currentHoldings));
    updateHoldingsTable();
    updateHoldingsBox();
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
    let currentPrice = players.find(p => p.name === playerName).price;
    let impact = shares * currentPrice;
    if (holding.type === "Short") {
        balance -= impact;
    } else {
        balance += impact;
    }
    holding.shares -= shares;
    if (holding.shares === 0) {
        currentHoldings = currentHoldings.filter(h => h.player !== playerName);
    }
    localStorage.setItem("currentHoldings", JSON.stringify(currentHoldings));
    updateHoldingsTable();
    updateHoldingsBox();
    updateBalance();
}

function updateHoldingsTable() {
    let table = document.getElementById("holdings-table");
    table.innerHTML = `<tr>
        <th>Player</th>
        <th>Team</th>
        <th>Shares</th>
        <th>Type</th>
        <th>Purchase Price</th>
        <th>Price</th>
        <th>Total Value (Profit/Loss)</th>
        <th>Action</th>
    </tr>`;
    currentHoldings.forEach(holding => {
        let currentPrice = players.find(p => p.name === holding.player).price;
        let totalValue = (holding.shares * currentPrice).toFixed(2);
        let profitLoss = (holding.shares * (currentPrice - holding.price)).toFixed(2);
        let profitLossText = profitLoss >= 0 ? `(+${profitLoss})` : `(${profitLoss})`;
        let row = `<tr>
            <td>${holding.player}</td>
            <td>${holding.team}</td>
            <td>${holding.shares}</td>
            <td>${holding.type}</td>
            <td>$${holding.price.toFixed(2)}</td>
            <td>$${currentPrice.toFixed(2)}</td>
            <td>$${totalValue} ${profitLossText}</td>
            <td><button class="sell" onclick="sellStock('${holding.player}')">Sell Position</button></td>
        </tr>`;
        table.innerHTML += row;
    });
}

function updateHoldingsBox() {
    const box = document.getElementById("holdings-box");
    box.innerHTML = "";

    currentHoldings.forEach(holding => {
        const teamAbbreviation = getTeamAbbreviation(holding.team);
        let condensedName = `${holding.player.split(" ")[0][0]}.${holding.player.split(" ")[1].substring(0, 3).toUpperCase()}`;
        let value = (holding.shares * holding.price).toFixed(2);
        let holdingItem = `<div class="holding-item ${holding.type.toLowerCase()}">
            <span class="team-abbreviation ${holding.team.toLowerCase().replace(/\s+/g, '-')}">${teamAbbreviation}</span>
            <b>${condensedName} </b> $${holding.price.toFixed(2)} (${value}) <!-- Added space between price and player name -->
        </div>`;
        box.innerHTML += holdingItem;
    });
}

// Function to get team abbreviation
function getTeamAbbreviation(team) {
    const teamAbbreviations = {
        "Adelaide": "ADE",
        "Brisbane": "BRI",
        "Carlton": "CAR",
        "Collingwood": "COLL",
        "Essendon": "ESS",
        "Fremantle": "FRE",
        "Geelong": "GEE",
        "Gold Coast": "GCS",
        "Greater Western Sydney": "GWS",
        "Hawthorn": "HAW",
        "Melbourne": "MEL",
        "North Melbourne": "NMFC",
        "Port Adelaide": "PA",
        "Richmond": "RIC",
        "St Kilda": "STK",
        "Sydney": "SYD",
        "West Coast": "WCE",
        "Western Bulldogs": "WB"
    };
    return teamAbbreviations[team] || team;
}

function loadPlayerData() {
    fetch('afl-player-stats-2024.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            players = rows.slice(1).map(row => {
                const columns = row.split(',');
                return {
                    name: columns[0],
                    team: columns[1],
                    position: columns[4], // Assuming position is in the 5th column
                    price: parseFloat(columns[6]), // Assuming price is in the 7th column
                };
            });
            populateTeamFilter();
            populatePlayers();
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
    loadPlayerData(); // Load player data from CSV
});

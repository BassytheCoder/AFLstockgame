// AFL Stock Exchange Game with Login, Firebase, Weekly Leaderboard & Shorting Fixes

// Firebase Configuration (Replace with your Firebase credentials)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let currentUser = null;
let balance = 1000;
let holdings = {};
let weeklyResetDate = "Monday";

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
    document.body.insertAdjacentHTML('beforeend', `
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Enter Username" />
        <button onclick="loginUser()">Login</button>
        <h2>Balance: <span id="balance">$1000.00</span></h2>
        <h2>Stock Holdings</h2>
        <table id="holdingsTable">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Shares Owned</th>
                    <th>Shorted Shares</th>
                    <th>Price per Share</th>
                    <th>Profit/Loss</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <h2>Leaderboard</h2>
        <ul id="leaderboard"></ul>
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
    setTimeout(() => {
        loadPlayers();
    }, 300); // Slightly increased delay to ensure table loads
    loadLeaderboard();
});

function loadPlayers() {
    const tableBody = document.querySelector("#playersTable tbody");
    if (!tableBody) {
        console.error("Players table not found!");
        return;
    }
    tableBody.innerHTML = "";

    const fragment = document.createDocumentFragment();
    players.forEach((player) => {
        let teamStyle = player.team === 'Melbourne' ? "background-color: navy; color: red; padding: 5px; border-radius: 5px;" : 
                        player.team === 'Sydney' ? "background-color: red; color: white; padding: 5px; border-radius: 5px;" : "";
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${player.name}</td>
            <td><span style="${teamStyle}">${player.team}</span></td>
            <td>$${player.stockPrice.toFixed(2)}</td>
            <td>
                <button onclick="buyOrShortPlayer('${player.name}', 'buy')">Buy</button>
                <button onclick="buyOrShortPlayer('${player.name}', 'short')">Short</button>
            </td>
        `;
        fragment.appendChild(row);
    });
    tableBody.appendChild(fragment);
}

function loginUser() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter a username.");
        return;
    }
    currentUser = username;
    
    db.collection("users").doc(username).get().then(doc => {
        if (doc.exists) {
            balance = doc.data().balance;
            holdings = doc.data().holdings;
        } else {
            balance = 1000;
            holdings = {};
            db.collection("users").doc(username).set({ balance, holdings });
        }
        updateUI();
    });
}

function loadLeaderboard() {
    const leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = "Loading...";
    db.collection("users").orderBy("balance", "desc").limit(10).get().then(snapshot => {
        leaderboard.innerHTML = snapshot.docs.map(doc => `<li>${doc.id}: $${doc.data().balance.toFixed(2)}</li>`).join('');
    });
}

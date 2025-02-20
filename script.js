let balance = parseFloat(localStorage.getItem("balance")) || 1000;
let currentPage = 1;
const playersPerPage = 20;

const players = [
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
    { name: "Bayley Fritsch", team: "Melbourne", price: 8.97 },
    { name: "Charlie Spargo", team: "Melbourne", price: 2.5 },
    { name: "Kade Chandler", team: "Melbourne", price: 8.991 },
    { name: "Trent Rivers", team: "Melbourne", price: 11.026 },
    { name: "Jake Bowey", team: "Melbourne", price: 5.75 },
    { name: "Bailey Laurie", team: "Melbourne", price: 4.35 },
    { name: "Blake Howes", team: "Melbourne", price: 6.056 },
    { name: "Judd McVee", team: "Melbourne", price: 9.278 },
    { name: "Jacob van Rooyen", team: "Melbourne", price: 6.414 },
    { name: "Caleb Windsor", team: "Melbourne", price: 7.937 },
    { name: "Steven May", team: "Melbourne", price: 9.705 },
    { name: "Max Gawn", team: "Melbourne", price: 17.167 },
    { name: "Adam Tomlinson", team: "Melbourne", price: 9.537 },
    { name: "Jack Viney", team: "Melbourne", price: 11.957 },
    { name: "Jack Billings", team: "Melbourne", price: 5.744 },
    { name: "Christian Salem", team: "Melbourne", price: 8.853 },
    { name: "Alex Neal-Bullen", team: "Melbourne", price: 11.378 },
    { name: "Christian Petracca", team: "Melbourne", price: 16.654 },
    { name: "Ed Langdon", team: "Melbourne", price: 8.341 },
    { name: "Jake Lever", team: "Melbourne", price: 9.289 },
    { name: "Josh Schache", team: "Melbourne", price: 2.7 },
    { name: "Clayton Oliver", team: "Melbourne", price: 10.676 },
    { name: "Tom Sparrow", team: "Melbourne", price: 7.581 },
    { name: "Hayden McLean", team: "Sydney", price: 7.604 },
    { name: "Nick Blakey", team: "Sydney", price: 13.331 },
    { name: "James Rowbottom", team: "Sydney", price: 13.517 },
    { name: "Sam Wicks", team: "Sydney", price: 6.819 },
    { name: "Joel Amartey", team: "Sydney", price: 5.888 },
    { name: "Tom McCartin", team: "Sydney", price: 8.3 },
    { name: "Justin McInerney", team: "Sydney", price: 9.79 },
    { name: "Chad Warner", team: "Sydney", price: 15.676 },
    { name: "Matt Roberts", team: "Sydney", price: 8.065 },
    { name: "Errol Gulden", team: "Sydney", price: 14.408 },
    { name: "Braeden Campbell", team: "Sydney", price: 5.722 },
    { name: "Logan McDonald", team: "Sydney", price: 7.031 },
    { name: "James Jordon", team: "Sydney", price: 7.842 },
    { name: "Dane Rampe", team: "Sydney", price: 6.757 },
    { name: "Robbie Fox", team: "Sydney", price: 5.806 },
    { name: "Harry Cunningham", team: "Sydney", price: 5.17 },
    { name: "Brodie Grundy", team: "Sydney", price: 12.273 },
    { name: "Jake Lloyd", team: "Sydney", price: 8.935 },
    { name: "Isaac Heeney", team: "Sydney", price: 17.304 },
    { name: "Lewis Melican", team: "Sydney", price: 7.279 },
    { name: "Tom Papley", team: "Sydney", price: 10.781 },
    { name: "Will Hayward", team: "Sydney", price: 8.104 },
    { name: "Oliver Florent", team: "Sydney", price: 9.946 },
    { name: "Hugh McCluggage", team: "Brisbane", price: 12.859 },
    { name: "Cam Rayner", team: "Brisbane", price: 11.4 },
    { name: "Zac Bailey", team: "Brisbane", price: 10.009 },
    { name: "Jack Payne", team: "Brisbane", price: 7.144 },
    { name: "Brandon Starcevich", team: "Brisbane", price: 7.514 },
    { name: "Oscar McInerney", team: "Brisbane", price: 13.404 },
    { name: "Keidean Coleman", team: "Brisbane", price: 8.5 },
    { name: "Kai Lohmann", team: "Brisbane", price: 8.907 },
    { name: "Darcy Wilmot", team: "Brisbane", price: 10.233 },
    { name: "Jaspa Fletcher", team: "Brisbane", price: 7.015 },
    { name: "Dayne Zorko", team: "Brisbane", price: 12.17 },
    { name: "Ryan Lester", team: "Brisbane", price: 9.007 },
    { name: "Lachie Neale", team: "Brisbane", price: 16.804 },
    { name: "Lincoln McCarthy", team: "Brisbane", price: 7.963 },
    { name: "Jarryd Lyons", team: "Brisbane", price: 6.2 },
    { name: "Joe Daniher", team: "Brisbane", price: 9.707 },
    { name: "Darcy Gardiner", team: "Brisbane", price: 5.086 },
    { name: "Callum Ah Chee", team: "Brisbane", price: 8.108 },
    { name: "Charlie Cameron", team: "Brisbane", price: 6.967 },
    { name: "Josh Dunkley", team: "Brisbane", price: 12.837 },
    { name: "Eric Hipwood", team: "Brisbane", price: 6.542 },
    { name: "Harris Andrews", team: "Brisbane", price: 11.419 },
    { name: "Jarrod Berry", team: "Brisbane", price: 8.567 },
    { name: "Harry McKay", team: "Carlton", price: 10.2 },
    { name: "Matthew Kennedy", team: "Carlton", price: 9.117 },
    { name: "Lachie Fogarty", team: "Carlton", price: 9.107 },
    { name: "Adam Cerra", team: "Carlton", price: 10.392 },
    { name: "Jordan Boyd", team: "Carlton", price: 6.226 },
    { name: "Tom De Koning", team: "Carlton", price: 14.022 },
    { name: "Matthew Cottrell", team: "Carlton", price: 7.279 },
    { name: "Brodie Kemp", team: "Carlton", price: 7.595 },
    { name: "Jack Carroll", team: "Carlton", price: 6.147 },
    { name: "Matthew Owies", team: "Carlton", price: 7.057 },
    { name: "Oliver Hollands", team: "Carlton", price: 6.652 },
    { name: "George Hewett", team: "Carlton", price: 12.118 },
    { name: "Zac Williams", team: "Carlton", price: 9.216 },
    { name: "Adam Saad", team: "Carlton", price: 11.889 },
    { name: "Sam Docherty", team: "Carlton", price: 2.85 },
    { name: "Blake Acres", team: "Carlton", price: 10.074 },
    { name: "Orazio Fantasia", team: "Carlton", price: 7 },
    { name: "Mitch McGovern", team: "Carlton", price: 8.933 },
    { name: "Nic Newman", team: "Carlton", price: 10.221 },
    { name: "David Cuningham", team: "Carlton", price: 6.98 },
    { name: "Charlie Curnow", team: "Carlton", price: 11.543 },
    { name: "Lewis Young", team: "Carlton", price: 7.389 },
    { name: "Jack Lukosius", team: "Gold Coast", price: 8.2 },
    { name: "Malcolm Rosas", team: "Gold Coast", price: 6.171 },
    { name: "Thomas Berry", team: "Gold Coast", price: 6.129 },
    { name: "Ben King", team: "Gold Coast", price: 6.782 },
    { name: "Wil Powell", team: "Gold Coast", price: 9.967 },
    { name: "Connor Budarick", team: "Gold Coast", price: 7.85 },
    { name: "Charlie Ballard", team: "Gold Coast", price: 8.691 },
    { name: "Noah Anderson", team: "Gold Coast", price: 15.765 },
    { name: "Matt Rowell", team: "Gold Coast", price: 16.148 },
    { name: "Sam Flanders", team: "Gold Coast", price: 14.7 },
    { name: "Bodhi Uwland", team: "Gold Coast", price: 9 },
    { name: "Bailey Humphrey", team: "Gold Coast", price: 6.743 },
    { name: "Levi Casboult", team: "Gold Coast", price: 2.667 },
    { name: "David Swallow", team: "Gold Coast", price: 5.695 },
    { name: "Jarrod Witts", team: "Gold Coast", price: 13.994 },
    { name: "Brandon Ellis", team: "Gold Coast", price: 3.6 },
    { name: "Alex Sexton", team: "Gold Coast", price: 7.527 },
    { name: "Sam Collins", team: "Gold Coast", price: 13.391 },
    { name: "Nick Holman", team: "Gold Coast", price: 6.876 },
    { name: "Touk Miller", team: "Gold Coast", price: 13.311 },
    { name: "Brayden Fiorini", team: "Gold Coast", price: 9.292 },
    { name: "Darcy Macpherson", team: "Gold Coast", price: 1.5 },
    { name: "Ben Ainsworth", team: "Gold Coast", price: 7.129 },
    { name: "Liam Baker", team: "Richmond", price: 11.678 },
    { name: "Daniel Rioli", team: "Richmond", price: 11.6 },
    { name: "Noah Balta", team: "Richmond", price: 8.163 },
    { name: "Jacob Koschitzke", team: "Richmond", price: 5.821 },
    { name: "Jack Ross", team: "Richmond", price: 9.257 },
    { name: "Thomson Dow", team: "Richmond", price: 7.071 },
    { name: "Maurice Rioli", team: "Richmond", price: 7.478 },
    { name: "Samson Ryan", team: "Richmond", price: 4.088 },
    { name: "Sam Banks", team: "Richmond", price: 6.667 },
    { name: "Josh Gibcus", team: "Richmond", price: 8.75 },
    { name: "Tylar Young", team: "Richmond", price: 4.822 },
    { name: "Seth Campbell", team: "Richmond", price: 6.538 },
    { name: "Dylan Grimes", team: "Richmond", price: 3.64 },
    { name: "Dion Prestia", team: "Richmond", price: 11.323 },
    { name: "Kamdyn McIntosh", team: "Richmond", price: 4.786 },
    { name: "Nick Vlastuin", team: "Richmond", price: 10.909 },
    { name: "Nathan Broad", team: "Richmond", price: 7.255 },
    { name: "Sam Naismith", team: "Richmond", price: 5.767 },
    { name: "Jayden Short", team: "Richmond", price: 8.136 },
    { name: "Marlion Pickett", team: "Richmond", price: 7.069 },
    { name: "Jacob Hopper", team: "Richmond", price: 9.1 },
    { name: "Shai Bolton", team: "Richmond", price: 11.218 },
    { name: "Tim Taranto", team: "Richmond", price: 11.447 },
    { name: "John Noble", team: "Collingwood", price: 8.655 },
    { name: "Lachie Schultz", team: "Collingwood", price: 6.52 },
    { name: "Patrick Lipinski", team: "Collingwood", price: 9.996 },
    { name: "Beau McCreery", team: "Collingwood", price: 7.741 },
    { name: "Josh Daicos", team: "Collingwood", price: 9.996 },
    { name: "Bobby Hill", team: "Collingwood", price: 7.874 },
    { name: "Isaac Quaynor", team: "Collingwood", price: 7.152 },
    { name: "Charlie Dean", team: "Collingwood", price: 7.463 },
    { name: "Nick Daicos", team: "Collingwood", price: 16.778 },
    { name: "Scott Pendlebury", team: "Collingwood", price: 12.26 },
    { name: "Steele Sidebottom", team: "Collingwood", price: 8.373 },
    { name: "Will Hoskin-Elliott", team: "Collingwood", price: 7.84 },
    { name: "Brody Mihocek", team: "Collingwood", price: 8.682 },
    { name: "Tom Mitchell", team: "Collingwood", price: 8.833 },
    { name: "Jamie Elliott", team: "Collingwood", price: 7.193 },
    { name: "Jack Crisp", team: "Collingwood", price: 13.504 },
    { name: "Darcy Moore", team: "Collingwood", price: 11.165 },
    { name: "Oleg Markov", team: "Collingwood", price: 6.217 },
    { name: "Darcy Cameron", team: "Collingwood", price: 13.757 },
    { name: "Brayden Maynard", team: "Collingwood", price: 9.791 },
    { name: "Jordan De Goey", team: "Collingwood", price: 10.631 },
    { name: "Ash Johnson", team: "Collingwood", price: -0.2 },
    { name: "Mason Cox", team: "Collingwood", price: 6.388 },
    { name: "Brent Daniels", team: "Greater Western Sydney", price: 12.142 },
    { name: "Jacob Wehr", team: "Greater Western Sydney", price: 5.809 },
    { name: "Sam Taylor", team: "Greater Western Sydney", price: 10.044 },
    { name: "Xavier O'Halloran", team: "Greater Western Sydney", price: 7.568 },
    { name: "Connor Idun", team: "Greater Western Sydney", price: 11.056 },
    { name: "Jake Riccardi", team: "Greater Western Sydney", price: 5.695 },
    { name: "Toby Bedford", team: "Greater Western Sydney", price: 7.391 },
    { name: "Kieren Briggs", team: "Greater Western Sydney", price: 13.188 },
    { name: "Lachie Ash", team: "Greater Western Sydney", price: 9.147 },
    { name: "Tom Green", team: "Greater Western Sydney", price: 14.244 },
    { name: "Jack Buckley", team: "Greater Western Sydney", price: 11.387 },
    { name: "Callum M. Brown", team: "Greater Western Sydney", price: 7.869 },
    { name: "Aaron Cadman", team: "Greater Western Sydney", price: 6.496 },
    { name: "Harvey Thomas", team: "Greater Western Sydney", price: 6.9 },
    { name: "Toby McMullin", team: "Greater Western Sydney", price: 5.536 },
    { name: "Callan Ward", team: "Greater Western Sydney", price: 9.815 },
    { name: "Stephen Coniglio", team: "Greater Western Sydney", price: 9.493 },
    { name: "Lachie Whitfield", team: "Greater Western Sydney", price: 9.664 },
    { name: "Nick Haynes", team: "Greater Western Sydney", price: 5.1 },
    { name: "Toby Greene", team: "Greater Western Sydney", price: 10.6 },
    { name: "Jesse Hogan", team: "Greater Western Sydney", price: 12.016 },
    { name: "Josh Kelly", team: "Greater Western Sydney", price: 14.706 },
    { name: "Harry Himmelberg", team: "Greater Western Sydney", price: 10.964 },
    { name: "Corey Durdin", team: "Carlton", price: 4.179 },
    { name: "Rhyan Mansell", team: "Richmond", price: 8.919 },
    { name: "Dustin Martin", team: "Richmond", price: 8.031 },
    { name: "Tom Lynch", team: "Richmond", price: 4.4 },
    { name: "Toby Nankervis", team: "Richmond", price: 12.919 },
    { name: "Finlay Macrae", team: "Collingwood", price: 6.389 },
    { name: "Jeremy Howe", team: "Collingwood", price: 9.474 },
    { name: "Ben McKay", team: "Essendon", price: 10.287 },
    { name: "Xavier Duursma", team: "Essendon", price: 9.06 },
    { name: "Jye Caldwell", team: "Essendon", price: 11.322 },
    { name: "Harrison Jones", team: "Essendon", price: 6.467 },
    { name: "Nic Martin", team: "Essendon", price: 12.73 },
    { name: "Zach Reid", team: "Essendon", price: 1.7 },
    { name: "Jye Menzie", team: "Essendon", price: 2 },
    { name: "Sam Durham", team: "Essendon", price: 12.636 },
    { name: "Nik Cox", team: "Essendon", price: 5.22 },
    { name: "Archie Perkins", team: "Essendon", price: 7.756 },
    { name: "Elijah Tsatas", team: "Essendon", price: 4.457 },
    { name: "Todd Goldstein", team: "Essendon", price: 9.364 },
    { name: "Dyson Heppell", team: "Essendon", price: 10.867 },
    { name: "Jake Stringer", team: "Essendon", price: 9.791 },
    { name: "Jake Kelly", team: "Essendon", price: 5.935 },
    { name: "Peter Wright", team: "Essendon", price: 8.186 },
    { name: "Jade Gresham", team: "Essendon", price: 8.164 },
    { name: "Kyle Langford", team: "Essendon", price: 10.77 },
    { name: "Zach Merrett", team: "Essendon", price: 15.604 },
    { name: "Matt Guelfi", team: "Essendon", price: 8.546 },
    { name: "Mason Redman", team: "Essendon", price: 10.448 },
    { name: "Andrew McGrath", team: "Essendon", price: 10.652 },
    { name: "Will Setterfield", team: "Essendon", price: 11.875 },
    { name: "Mitch Lewis", team: "Hawthorn", price: 5.8 },
    { name: "Ned Reeves", team: "Hawthorn", price: 7.7 },
    { name: "James Worpel", team: "Hawthorn", price: 12.444 },
    { name: "Massimo D'Ambrosio", team: "Hawthorn", price: 11.338 },
    { name: "Dylan Moore", team: "Hawthorn", price: 12.144 },
    { name: "Conor Nash", team: "Hawthorn", price: 8.816 },
    { name: "Finn Maginness", team: "Hawthorn", price: 5.769 },
    { name: "Jack Ginnivan", team: "Hawthorn", price: 7.391 },
    { name: "Connor Macdonald", team: "Hawthorn", price: 8.588 },
    { name: "Josh Ward", team: "Hawthorn", price: 5.775 },
    { name: "Jai Newcombe", team: "Hawthorn", price: 15.076 },
    { name: "Nick Watson", team: "Hawthorn", price: 8.122 },
    { name: "Cam Mackenzie", team: "Hawthorn", price: 8.18 },
    { name: "Josh Weddle", team: "Hawthorn", price: 11.22 },
    { name: "Luke Breust", team: "Hawthorn", price: 6.126 },
    { name: "Jack Gunston", team: "Hawthorn", price: 6.372 },
    { name: "Sam Frost", team: "Hawthorn", price: 6.567 },
    { name: "Jarman Impey", team: "Hawthorn", price: 9.464 },
    { name: "Karl Amon", team: "Hawthorn", price: 9.388 },
    { name: "James Sicily", team: "Hawthorn", price: 12.227 },
    { name: "Blake Hardwick", team: "Hawthorn", price: 9.52 },
    { name: "Mabior Chol", team: "Hawthorn", price: 7.443 },
    { name: "Jack Scrimshaw", team: "Hawthorn", price: 10.537 },
    { name: "Finn Callaghan", team: "Greater Western Sydney", price: 11.646 },
    { name: "Harry Perryman", team: "Greater Western Sydney", price: 8.862 },
    { name: "Callum Coleman-Jones", team: "North Melbourne", price: 4.067 },
    { name: "Nick Larkey", team: "North Melbourne", price: 7.97 },
    { name: "Toby Pink", team: "North Melbourne", price: 5.087 },
    { name: "Jaidyn Stephenson", team: "North Melbourne", price: 7.475 },
    { name: "Luke Davies-Uniacke", team: "North Melbourne", price: 15.4 },
    { name: "Paul Curtis", team: "North Melbourne", price: 7.161 },
    { name: "Dylan Stephens", team: "North Melbourne", price: 5.963 },
    { name: "Tristan Xerri", team: "North Melbourne", price: 16.122 },
    { name: "Bailey Scott", team: "North Melbourne", price: 7.491 },
    { name: "Tom Powell", team: "North Melbourne", price: 11.722 },
    { name: "Kallan Dawson", team: "North Melbourne", price: 7.5 },
    { name: "Eddie Ford", team: "North Melbourne", price: 5.594 },
    { name: "Charlie Lazzaro", team: "North Melbourne", price: 4.7 },
    { name: "Josh Goater", team: "North Melbourne", price: 4.9 },
    { name: "George Wardlaw", team: "North Melbourne", price: 12.261 },
    { name: "Zane Duursma", team: "North Melbourne", price: 5.269 },
    { name: "Harry Sheezel", team: "North Melbourne", price: 15.214 },
    { name: "Colby McKercher", team: "North Melbourne", price: 7.606 },
    { name: "Liam Shiels", team: "North Melbourne", price: 5.482 },
    { name: "Aidan Corr", team: "North Melbourne", price: 7.657 },
    { name: "Darcy Tucker", team: "North Melbourne", price: 6.774 },
    { name: "Cameron Zurhaar", team: "North Melbourne", price: 8.373 },
    { name: "Zac Fisher", team: "North Melbourne", price: 7.083 },
    { name: "Jack Henry", team: "Geelong", price: 9.124 },
    { name: "Zach Guthrie", team: "Geelong", price: 10.092 },
    { name: "Gryan Miers", team: "Geelong", price: 12.284 },
    { name: "Mark O'Connor", team: "Geelong", price: 7.546 },
    { name: "Sam De Koning", team: "Geelong", price: 9.311 },
    { name: "Tanner Bruhn", team: "Geelong", price: 9.318 },
    { name: "Oliver Henry", team: "Geelong", price: 6.813 },
    { name: "Max Holmes", team: "Geelong", price: 14.872 },
    { name: "Jhye Clark", team: "Geelong", price: 5.78 },
    { name: "Oliver Dempsey", team: "Geelong", price: 9.824 },
    { name: "Tom Hawkins", team: "Geelong", price: 7.3 },
    { name: "Patrick Dangerfield", team: "Geelong", price: 13.806 },
    { name: "Rhys Stanley", team: "Geelong", price: 7.5 },
    { name: "Mitch Duncan", team: "Geelong", price: 7.891 },
    { name: "Tom Stewart", team: "Geelong", price: 11.726 },
    { name: "Zach Tuohy", team: "Geelong", price: 8.1 },
    { name: "Jeremy Cameron", team: "Geelong", price: 12.529 },
    { name: "Jake Kolodjashnij", team: "Geelong", price: 7.667 },
    { name: "Mark Blicavs", team: "Geelong", price: 9.579 },
    { name: "Shaun Mannagh", team: "Geelong", price: 13.283 },
    { name: "Tom Atkins", team: "Geelong", price: 10.05 },
    { name: "Tyson Stengle", team: "Geelong", price: 12.048 },
    { name: "Brad Close", team: "Geelong", price: 8.072 },
    { name: "Jack Higgins", team: "St Kilda", price: 9.625 },
    { name: "Liam Henry", team: "St Kilda", price: 10.233 },
    { name: "Max King", team: "St Kilda", price: 6.392 },
    { name: "Liam Stocker", team: "St Kilda", price: 6.45 },
    { name: "Ryan Byrnes", team: "St Kilda", price: 6.887 },
    { name: "Nasiah Wanganeen-Milera", team: "St Kilda", price: 11.545 },
    { name: "Lance Collard", team: "St Kilda", price: 0.933 },
    { name: "Cooper Sharman", team: "St Kilda", price: 7.061 },
    { name: "Mattaes Phillipou", team: "St Kilda", price: 6.4 },
    { name: "Marcus Windhager", team: "St Kilda", price: 6.98 },
    { name: "Mitch Owens", team: "St Kilda", price: 7.713 },
    { name: "Darcy Wilson", team: "St Kilda", price: 7.491 },
    { name: "Sebastian Ross", team: "St Kilda", price: 8.7 },
    { name: "Brad Crouch", team: "St Kilda", price: 6.5 },
    { name: "Tim Membrey", team: "St Kilda", price: 7.653 },
    { name: "Mason Wood", team: "St Kilda", price: 9.322 },
    { name: "Bradley Hill", team: "St Kilda", price: 9.668 },
    { name: "Jack Steele", team: "St Kilda", price: 13.422 },
    { name: "Callum Wilkie", team: "St Kilda", price: 11.5 },
    { name: "Zaine Cordy", team: "St Kilda", price: 7.513 },
    { name: "Rowan Marshall", team: "St Kilda", price: 14.157 },
    { name: "Riley Bonner", team: "St Kilda", price: 7.458 },
    { name: "Josh Battle", team: "St Kilda", price: 10.917 },
    { name: "Chris Burgess", team: "Adelaide", price: 4.043 },
    { name: "Lachlan Murphy", team: "Adelaide", price: 7.388 },
    { name: "Izak Rankine", team: "Adelaide", price: 16.64 },
    { name: "Mitchell Hinge", team: "Adelaide", price: 11.35 },
    { name: "Jordon Butts", team: "Adelaide", price: 6.98 },
    { name: "Lachlan Sholl", team: "Adelaide", price: 8.305 },
    { name: "Chayce Jones", team: "Adelaide", price: 8.131 },
    { name: "James Borlase", team: "Adelaide", price: 6.85 },
    { name: "Josh Worrell", team: "Adelaide", price: 9.185 },
    { name: "Luke Pedlar", team: "Adelaide", price: 4.125 },
    { name: "Sam Berry", team: "Adelaide", price: 7.961 },
    { name: "Max Michalanney", team: "Adelaide", price: 5.47 },
    { name: "Josh Rachele", team: "Adelaide", price: 9.518 },
    { name: "Jake Soligo", team: "Adelaide", price: 10.539 },
    { name: "Lachlan Gollant", team: "Adelaide", price: 2.225 },
    { name: "Brodie Smith", team: "Adelaide", price: 6.707 },
    { name: "Rory Laird", team: "Adelaide", price: 12.161 },
    { name: "Matt Crouch", team: "Adelaide", price: 12.113 },
    { name: "Reilly O'Brien", team: "Adelaide", price: 11.671 },
    { name: "Wayne Milera", team: "Adelaide", price: 6.667 },
    { name: "Jordan Dawson", team: "Adelaide", price: 13.386 },
    { name: "Ben Keays", team: "Adelaide", price: 10.543 },
    { name: "Darcy Fogarty", team: "Adelaide", price: 10.2 }
    { name: "Kysaiah Pickett", team: "Melbourne", price: 11.7 },
    { name: "Taj Woewodin", team: "Melbourne", price: 3.475 },
    { name: "Tom McDonald", team: "Melbourne", price: 10.3 },
    { name: "Ben Brown", team: "Melbourne", price: 4.2 },
    { name: "Marty Hore", team: "Melbourne", price: 4.267 },
    { name: "Lachlan Bramble", team: "Western Bulldogs", price: 8.608 },
    { name: "Aaron Naughton", team: "Western Bulldogs", price: 10.09 },
    { name: "Tim English", team: "Western Bulldogs", price: 12.483 },
    { name: "Laitham Vandermeer", team: "Western Bulldogs", price: 5.342 },
    { name: "Nick Coffield", team: "Western Bulldogs", price: 3.25 },
    { name: "Rhylee West", team: "Western Bulldogs", price: 8.329 },
    { name: "Ed Richards", team: "Western Bulldogs", price: 14.605 },
    { name: "Lachlan McNeil", team: "Western Bulldogs", price: 8.108 },
    { name: "Jamarra Ugle-Hagan", team: "Western Bulldogs", price: 6.618 },
    { name: "Cody Weightman", team: "Western Bulldogs", price: 8.218 },
    { name: "Harvey Gallagher", team: "Western Bulldogs", price: 4.695 },
    { name: "Ryley Sanders", team: "Western Bulldogs", price: 6.493 },
    { name: "Liam Jones", team: "Western Bulldogs", price: 9.629 },
    { name: "Tom Liberatore", team: "Western Bulldogs", price: 14.356 },
    { name: "Adam Treloar", team: "Western Bulldogs", price: 15.887 },
    { name: "Jason Johannisen", team: "Western Bulldogs", price: 8.2 },
    { name: "Caleb Daniel", team: "Western Bulldogs", price: 7.1 },
    { name: "Marcus Bontempelli", team: "Western Bulldogs", price: 19.079 },
    { name: "James Harmes", team: "Western Bulldogs", price: 8.067 },
    { name: "Rory Lobb", team: "Western Bulldogs", price: 9.55 },
    { name: "Bailey Williams", team: "Western Bulldogs", price: 8.9 },
    { name: "Bailey Dale", team: "Western Bulldogs", price: 13.242 },
    { name: "Buku Khamis", team: "Western Bulldogs", price: 6.041 },
    { name: "Willem Drew", team: "Port Adelaide", price: 11.642 },
    { name: "Connor Rozee", team: "Port Adelaide", price: 11.67 },
    { name: "Esava Ratugolea", team: "Port Adelaide", price: 6.974 },
    { name: "Kane Farrell", team: "Port Adelaide", price: 9.605 },
    { name: "Brandon Zerk-Thatcher", team: "Port Adelaide", price: 7.396 },
    { name: "Jed McEntee", team: "Port Adelaide", price: 3.779 },
    { name: "Todd Marshall", team: "Port Adelaide", price: 5.447 },
    { name: "Jackson Mead", team: "Port Adelaide", price: 7.558 },
    { name: "Zak Butters", team: "Port Adelaide", price: 15.581 },
    { name: "Miles Bergman", team: "Port Adelaide", price: 9.258 },
    { name: "Lachie Jones", team: "Port Adelaide", price: 7.138 },
    { name: "Jason Horne-Francis", team: "Port Adelaide", price: 12.033 },
    { name: "Francis Evans", team: "Port Adelaide", price: 4.388 },
    { name: "Travis Boak", team: "Port Adelaide", price: 9.196 },
    { name: "Charlie Dixon", team: "Port Adelaide", price: 8.683 },
    { name: "Ollie Wines", team: "Port Adelaide", price: 11.28 },
    { name: "Aliir Aliir", team: "Port Adelaide", price: 9.132 },
    { name: "Willie Rioli", team: "Port Adelaide", price: 8.145 },
    { name: "Jeremy Finlayson", team: "Port Adelaide", price: 6.708 },
    { name: "Darcy Byrne-Jones", team: "Port Adelaide", price: 8.45 },
    { name: "Ryan Burton", team: "Port Adelaide", price: 8.06 },
    { name: "Dan Houston", team: "Port Adelaide", price: 13.909 },
    { name: "Ivan Soldo", team: "Port Adelaide", price: 10.85 },
    { name: "Oscar Allen", team: "West Coast", price: 6.318 },
    { name: "Bailey J. Williams", team: "West Coast", price: 8.783 },
    { name: "Jack Petruccelle", team: "West Coast", price: 6.65 },
    { name: "Luke Edwards", team: "West Coast", price: 4.008 },
    { name: "Callum Jamieson", team: "West Coast", price: 5.175 },
    { name: "Tyler Brockman", team: "West Coast", price: 5.87 },
    { name: "Campbell Chesser", team: "West Coast", price: 5.95 },
    { name: "Reuben Ginbey", team: "West Coast", price: 9.235 },
    { name: "Brady Hough", team: "West Coast", price: 5.722 },
    { name: "Harley Reid", team: "West Coast", price: 11.28 },
    { name: "Noah Long", team: "West Coast", price: 4.629 },
    { name: "Andrew Gaff", team: "West Coast", price: 5.8 },
    { name: "Jamie Cripps", team: "West Coast", price: 9.139 },
    { name: "Jack Darling", team: "West Coast", price: 6.352 },
    { name: "Elliot Yeo", team: "West Coast", price: 13.91 },
    { name: "Jeremy McGovern", team: "West Coast", price: 12.911 },
    { name: "Tim Kelly", team: "West Coast", price: 13.515 },
    { name: "Liam Duggan", team: "West Coast", price: 8.905 },
    { name: "Tom Barrass", team: "West Coast", price: 11.739 },
    { name: "Tom Cole", team: "West Coast", price: 7.252 },
    { name: "Jayden Hunt", team: "West Coast", price: 9.275 },
    { name: "Jake Waterman", team: "West Coast", price: 10.75 },
    { name: "Alex Witherden", team: "West Coast", price: 8.094 },
    { name: "Noah Answerth", team: "Brisbane", price: 6.319 },
    { name: "Deven Robertson", team: "Brisbane", price: 2.6 },
    { name: "Conor McKenna", team: "Brisbane", price: 4.15 },
    { name: "Andrew Brayshaw", team: "Fremantle", price: 13.443 },
    { name: "Jordan Clark", team: "Fremantle", price: 10.287 },
    { name: "Hayden Young", team: "Fremantle", price: 16.143 },
    { name: "Jeremy Sharp", team: "Fremantle", price: 7.87 },
    { name: "Luke Jackson", team: "Fremantle", price: 13.117 },
    { name: "Caleb Serong", team: "Fremantle", price: 16.978 },
    { name: "Josh Treacy", team: "Fremantle", price: 10.68 },
    { name: "Matthew Johnson", team: "Fremantle", price: 6.242 },
    { name: "Neil Erasmus", team: "Fremantle", price: 2.65 },
    { name: "Jye Amiss", team: "Fremantle", price: 5.568 },
    { name: "Tom Emmett", team: "Fremantle", price: 5.754 },
    { name: "Karl Worner", team: "Fremantle", price: 5.125 },
    { name: "Michael Walters", team: "Fremantle", price: 5.124 },
    { name: "Nat Fyfe", team: "Fremantle", price: 9.409 },
    { name: "James Aish", team: "Fremantle", price: 6.025 },
    { name: "Alex Pearce", team: "Fremantle", price: 10.067 },
    { name: "Sam Switkowski", team: "Fremantle", price: 10.88 },
    { name: "Oscar McDonald", team: "Fremantle", price: -3.3 },
    { name: "Ethan Hughes", team: "Fremantle", price: 4.333 },
    { name: "Brennan Cox", team: "Fremantle", price: 7.789 },
    { name: "Bailey Banfield", team: "Fremantle", price: 8.305 },
    { name: "Luke Ryan", team: "Fremantle", price: 11.374 },
    { name: "Michael Frederick", team: "Fremantle", price: 6.455 },
    { name: "Reef McInnes", team: "Collingwood", price: 5.667 },
    { name: "Billy Frampton", team: "Collingwood", price: 6.406 },
    { name: "Zak Jones", team: "St Kilda", price: 7.6 },
    { name: "Jack Sinclair", team: "St Kilda", price: 14.905 },
    { name: "Ned McHenry", team: "Adelaide", price: 4.28 },
    { name: "Mark Keane", team: "Adelaide", price: 10.11 },
    { name: "Taylor Walker", team: "Adelaide", price: 8.783 },
    { name: "Mitch Knevitt", team: "Geelong", price: 3.65 },
    { name: "Oisin Mullin", team: "Geelong", price: 5.458 },
    { name: "Brandan Parfitt", team: "Geelong", price: 11 },
    { name: "Brandon Walker", team: "Fremantle", price: 6.974 },
    { name: "Joshua Draper", team: "Fremantle", price: 5.95 },
    { name: "Matt Taberner", team: "Fremantle", price: 4.28 },
    { name: "Jaeger O'Meara", team: "Fremantle", price: 8.245 },
    { name: "Luke McDonald", team: "North Melbourne", price: 7.195 },
    { name: "Jy Simpkin", team: "North Melbourne", price: 10.667 },
    { name: "Harrison Petty", team: "Melbourne", price: 4.925 },
    { name: "Sam Draper", team: "Essendon", price: 11.431 },
    { name: "Ben Hobbs", team: "Essendon", price: 5.358 },
    { name: "Alwyn Davey Jnr", team: "Essendon", price: 3.91 },
    { name: "Nick Hind", team: "Essendon", price: 7.933 },
    { name: "Jayden Laverde", team: "Essendon", price: 6.61 },
    { name: "Corey Warner", team: "Sydney", price: 3.2 },
    { name: "Ned Moyle", team: "Gold Coast", price: 13.713 },
    { name: "Jed Walter", team: "Gold Coast", price: 2.729 },
    { name: "Rory Atkins", team: "Gold Coast", price: 6.2 },
    { name: "Ben Long", team: "Gold Coast", price: 7.4 },
    { name: "Oskar Baker", team: "Western Bulldogs", price: 5.267 },
    { name: "Caleb Poulter", team: "Western Bulldogs", price: 6.057 },
    { name: "Sam Darcy", team: "Western Bulldogs", price: 9.671 },
    { name: "Dylan Williams", team: "Port Adelaide", price: 3.32 },
    { name: "Jase Burgoyne", team: "Port Adelaide", price: 9.291 },
    { name: "Ben Miller", team: "Richmond", price: 10.095 },
    { name: "Mykelti Lefau", team: "Richmond", price: 5.73 },
    { name: "Judson Clarke", team: "Richmond", price: 1.2 },
    { name: "Tom Brown", team: "Richmond", price: 6.894 },
    { name: "James Trezise", team: "Richmond", price: 7.214 },
    { name: "James Peatling", team: "Greater Western Sydney", price: 9.037 },
    { name: "Harry Barnett", team: "West Coast", price: -1.6 },
    { name: "Ryan Maric", team: "West Coast", price: 5.158 },
    { name: "Jamaine Jones", team: "West Coast", price: 4.136 },
    { name: "Darcy Fort", team: "Brisbane", price: 4.033 },
    { name: "Elijah Hollands", team: "Carlton", price: 10.005 },
    { name: "Caleb Marchbank", team: "Carlton", price: 4.2 },
    { name: "Jacob Weitering", team: "Carlton", price: 10.786 },
    { name: "Darcy Parish", team: "Essendon", price: 9.742 },
    { name: "Anthony Caminiti", team: "St Kilda", price: 5.967 },
    { name: "Angus Hastie", team: "St Kilda", price: 1.72 },
    { name: "Dan Butler", team: "St Kilda", price: 4.581 },
    { name: "Jack Williams", team: "West Coast", price: 6.617 },
    { name: "Taylor Duryea", team: "Western Bulldogs", price: 6.245 },
    { name: "Jack Macrae", team: "Western Bulldogs", price: 8.537 },
    { name: "Tyler Sonsie", team: "Richmond", price: 4.75 },
    { name: "Caleb Mitchell", team: "Sydney", price: 1.5 },
    { name: "Toby Conway", team: "Geelong", price: 10.4 },
    { name: "Jack Bowes", team: "Geelong", price: 10.864 },
    { name: "Harry Morrison", team: "Hawthorn", price: 8.525 },
    { name: "Lloyd Meek", team: "Hawthorn", price: 12.51 },
    { name: "Henry Hustwaite", team: "Hawthorn", price: 3.425 },
    { name: "Patrick Parnell", team: "Adelaide", price: -0.2 },
    { name: "Brayden Cook", team: "Adelaide", price: 6.36 },
    { name: "Luke Nankervis", team: "Adelaide", price: 7.775 },
    { name: "James Tunstill", team: "Brisbane", price: 4.85 },
    { name: "Charlie Comben", team: "North Melbourne", price: 9.395 },
    { name: "Hugh Greenwood", team: "North Melbourne", price: 8.233 },
    { name: "Mitch Georgiades", team: "Port Adelaide", price: 7.205 },
    { name: "Taylor Adams", team: "Sydney", price: 8.489 },
    { name: "Loch Rawlinson", team: "West Coast", price: -2.8 },
    { name: "Josh Rotham", team: "West Coast", price: 3.062 },
    { name: "Sam Clohesy", team: "Gold Coast", price: 9.165 },
    { name: "Mac Andrew", team: "Gold Coast", price: 8.65 },
    { name: "Will Graham", team: "Gold Coast", price: 8.918 },
    { name: "Ethan Read", team: "Gold Coast", price: 4.475 },
    { name: "Kane McAuliffe", team: "Richmond", price: 5.344 },
    { name: "Jack Graham", team: "Richmond", price: 8.943 },
    { name: "Sam Butler", team: "Hawthorn", price: 2.1 },
    { name: "Seamus Mitchell", team: "Hawthorn", price: 2.8 },
    { name: "Max Ramsden", team: "Hawthorn", price: 1.533 },
    { name: "Koltyn Tholstrup", team: "Melbourne", price: 6.71 },
    { name: "James O'Donnell", team: "Western Bulldogs", price: 5.471 },
    { name: "Hugo Garcia", team: "St Kilda", price: 4.478 },
    { name: "Will Hamill", team: "Adelaide", price: 7.114 },
    { name: "Sam Walsh", team: "Carlton", price: 13.58 },
    { name: "Marc Pittonet", team: "Carlton", price: 14.264 },
    { name: "Sam Powell-Pepper", team: "Port Adelaide", price: 3.933 },
    { name: "Shannon Neale", team: "Geelong", price: 6.673 },
    { name: "Connor O'Sullivan", team: "Geelong", price: 5.9 },

    // ... (other players)
];

let currentHoldings = JSON.parse(localStorage.getItem("currentHoldings")) || [];

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
    return players.filter(player => player.team === team);
}

function sortByPrice(order = 'asc') {
    return players.sort((a, b) => {
        return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
}

function populatePlayers() {
    console.log("populatePlayers function called");
    let filteredPlayers = players;

    const teamFilter = document.getElementById("teamFilter").value;
    if (teamFilter) {
        filteredPlayers = filterByTeam(teamFilter);
    }

    const sortOrder = document.getElementById("sortOrder").value;
    filteredPlayers = sortByPrice(sortOrder);

    const paginatedPlayers = paginatePlayers(filteredPlayers);

    let table = document.getElementById("players-table");
    table.innerHTML = "";
    paginatedPlayers.forEach((player, index) => {
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

    document.getElementById("page-number").innerText = `Page ${currentPage}`;
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
    let revenue = shares * players[index].price;
    balance += revenue;
    updateBalance();
    addToHoldings(players[index].name, players[index].team, shares, "Short", players[index].price);
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

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
    let revenue = shares * players[index].price;
    balance += revenue;
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

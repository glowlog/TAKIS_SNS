// index.js

// Function to fetch JSON data from points.json
async function fetchPoints() {
  const response = await fetch("points.json");
  const data = await response.json();
  return data;
}

// Function to update the table with user points and booster status
async function updateTable() {
  // Get the table element
  const table = document.getElementById("userTable");

  // Fetch user points from points.json
  const userPoints = await fetchPoints();

  // Create an array of user objects sorted by points in descending order
  const sortedUsers = Object.entries(userPoints)
    .sort((a, b) => b[1].points - a[1].points)
    .map(([user, { points, hasBooster }]) => ({ user, points, hasBooster }));

  // Loop through the sorted array and dynamically populate the table
  sortedUsers.forEach(({ user, points, hasBooster }) => {
    const row = table.insertRow(-1); // -1 inserts the row at the end of the table

    // Insert user, points, hasBooster, and Twitter profile link (if available) into the row
    const cellUser = row.insertCell(0);
    cellUser.textContent = user;

    const cellPoints = row.insertCell(1);
    cellPoints.textContent = points;

    const cellHasBooster = row.insertCell(2);
    cellHasBooster.textContent = hasBooster ? "Yes" : "No";

    const cellLink = row.insertCell(3);
    if (user.startsWith("@")) {
      const twitterLink = `https://twitter.com/${user.slice(1)}`;
      cellLink.innerHTML = `<a href="${twitterLink}">${twitterLink}</a>`;
    }
  });
}

// Call the updateTable function when the page is loaded
updateTable();

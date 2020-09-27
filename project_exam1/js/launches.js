//Fetch SpaceX open API, and run the displayLaunches function - or console log any errors//
async function createLaunches() {
  try {
    let url = "https://api.spacexdata.com/v4/launches/upcoming";
    let response = await fetch(url);
    let launches = await response.json();
    displayLaunches(launches);
    console.log(launches);
  } catch (error) {
    console.log(error);
  }
}
createLaunches();
//Display launches in the div "launch-container" that I have set up in the html page//
//Needed to change the format on the dates, so it was understandable//
function displayLaunches(launches) {
  const container = document.querySelector(".launch-container");
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let html = "";
  for (detail in launches) {
    let launchId = launches[detail].id;
    let date = new Date(launches[detail].date_utc);
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let name = launches[detail].name;
    html += `
    <tr class="upcoming-launch-result">
    <td id="launch-date">${day}. ${month} ${year}</th>
    <td id ="launch-name">${name}</td>
    <td id="launch-details">
    <a href="launch-details.html?id=${launchId}"">Details</a>
</tr>`;
  }
  container.innerHTML = html;
}
//Adds the json results to the innerHTML on the page, and makes a button the user can click for further details.//

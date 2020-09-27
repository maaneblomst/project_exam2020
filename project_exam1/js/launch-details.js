//Get the ID of the launch from the URL. I coded this in launches.js, in the "details"-button//
//This is so that it can fetch the right launch from the API. If there is no id in the url//
//it will just return to the homepage.//
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}
//Fetch SpaceX launch API, and add the launch-id, so that we can fetch details from one specific launch.//
//When a json is returned, run the function displayLaunchDetails - or log errors (please don't)//
async function createLaunchDetails() {
  try {
    let baseUrl = "https://api.spacexdata.com/v4/launches/";
    let detailsUrl = baseUrl + id;
    let response = await fetch(detailsUrl);
    let details = await response.json();
    displayLaunchDetails(details);
    console.log(details);
  } catch (error) {
    console.log(error);
  }
}
createLaunchDetails();
//This function displays the launch details in the format I wanted in the container set up in the launches.html//
function displayLaunchDetails(details) {
  const detailContainer = document.querySelector(".launch-result-container");
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
  for (launchDetail in details) {
    let date = new Date(details.date_utc);
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let name = details.name;
    let description = details.details
      ? details.details
      : "No description yet, check back soon.";
    //If the API does not have details about the specific launch, I want this message to be displayed instead of "null" or "undefined", to not confuse the user.//
    html = `
      <div class="row">
        <div class="column">
        <img src="images/launch-details/rocketship.jpg" alt="A rocketship in space.">
        </div>
        <div class="column">
          <div class="launch-result">
            <h1>${name}</h1>
            <h3>Launch date:</h3><p class="launch-detail-text">${day}. ${month} ${year}</p>
            <h3>Description:</h3><p class="launch-detail-text">${description}</p>
          </div>
        </div>
      </div>`;
  }
  detailContainer.innerHTML = html;
  document.title = details.name + " Launch Details" + " | " + document.title;
}
//Added the details from the json to html, and changed the title for the page to the specific launch//

//Navigation - hamburger:
//I learned how to make this on https://www.w3schools.com/howto/howto_js_topnav_responsive.asp //
//This function selects my top nav, and if it has the class "top-nav", it is supposed to add//
//The class that makes the nav responsive (responsive behavior defined in styles.css).//
//Else, it is just supposed to stay the same (as it is in desktop)//
// This is the actual "hamburger" that toggles from the html code: <a href="#" class="icon" onclick="navFunction()"><i class="fa fa-bars"></i></a>//

function navFunction() {
  const nav = document.querySelector(".top-nav");
  if (nav.className === "top-nav") {
    nav.className += " responsive";
  } else {
    nav.className = "top-nav";
  }
}

//Collapsibles - This is also inspired from https://www.w3schools.com/howto/howto_js_collapsible.asp.//
//I learned this method to first declare all the buttons I have given the classname ".collapsible".//
//Next, I made a for loop that activates an eventlistener, to listen for when someone clicks the collapsible button.//
//When someone clicks, it runs the function that toggles on the class "active" on the active collapsible.//
//After that, the active elements sibling are supposed to not display - else - it will display in block-style//.
const coll = document.querySelectorAll(".collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

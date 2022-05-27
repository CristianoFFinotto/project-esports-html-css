/**
 * take ID name from DOM and hide the other element
 * @param string id
*/

function openTeam(teamName) {
  let i;
  let x = document.getElementsByClassName("team");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(teamName).style.display = "block";
}




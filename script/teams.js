/**
 * @file: main.js
 * @author: Gabriele Bovolenta
 * Project-esports
 *
 * Manage teams
 */

/**
 * take ID name from DOM and hide the other element
 * @param {string} - id team
*/

function openTeam(teamName) {

  let teams = document.getElementsByClassName("team");

  for (let i = 0; i < teams.length; i ++) {
    teams[i].style.display = "none";
  }
  
  document.getElementById(teamName).style.display = "block";
}
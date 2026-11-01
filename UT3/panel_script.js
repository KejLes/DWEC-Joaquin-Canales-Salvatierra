"use strict";

const playerName = document.getElementById("playerName");
const playerAge = document.getElementById("playerAge");
const panel = document.getElementById("panel");
const playButton = document.getElementById("playButton");

const savedName = sessionStorage.getItem("playerName");
const savedAge = Number(sessionStorage.getItem("playerAge"));

if (savedName === null || isNaN(savedAge) || savedAge < 13) {
	window.location.href = "index.html";
} else {
	playerName.textContent = "Jugador: " + savedName.toLocaleUpperCase();
	playerAge.textContent = "Edad: " + savedAge + " años";

	if (savedAge < 18) {
		panel.style.backgroundColor = "lightblue";
	} else {
		panel.style.backgroundColor = "lightgreen";
	}
}

playButton.addEventListener("click", function () {
	window.location.href = "game.html";
});
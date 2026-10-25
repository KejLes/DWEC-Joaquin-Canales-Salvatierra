"use strict";

const form = document.getElementById("form");
const birthdate = document.getElementById("birthdate");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const bornDay = new Date(birthdate.value);
	const today = new Date();

	let calculatedAge = today.getFullYear() - bornDay.getFullYear();
	const month = today.getMonth() - bornDay.getMonth();

	if (month < 0 || (month === 0 && today.getDate() < bornDay.getDate())) {
		calculatedAge--;
	}

	if (calculatedAge < 13) {
		message.textContent = "No es apto para menores de 13 años.";
		message.classList.remove("hidden");
		message.classList.add("error");
		return;
	}

	message.textContent = "";
	message.classList.add("hidden");
	message.classList.remove("error");

	window.location.href = "game.html";

});
"use strict";

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const birthdateInput = document.getElementById("birthdate");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const name = nameInput.value.trim();
	const bornDay = new Date(birthdateInput.value);
	const today = new Date();

	if (name === "" || isNaN(bornDay.getTime()) || bornDay > today) {
		message.textContent = "Acceso denegado";
		message.classList.remove("hidden");
		message.classList.add("error");
		return;
	}

	let calculatedAge = today.getFullYear() - bornDay.getFullYear();
	const month = today.getMonth() - bornDay.getMonth();

	if (month < 0 || (month === 0 && today.getDate() < bornDay.getDate())) {
		calculatedAge--;
	}

	if (calculatedAge < 13) {
		message.textContent = "Acceso denegado";
		message.classList.remove("hidden");
		message.classList.add("error");
		return;
	}

	sessionStorage.setItem("playerName", name);
	sessionStorage.setItem("playerAge", calculatedAge);

	window.location.href = "panel.html";
});
const form = document.querySelector(".content__form");
const emailMessage = document.querySelector(".form__error--empty");
const errorEmail = document.querySelector(".form__error");
const email = document.querySelector(".email");
const errorImg = document.querySelector(".form__error-img");

form.addEventListener("submit", (e) => {
	if (!email.value) {
		e.preventDefault();
		emailMessage.innerHTML = "Please provide a valid email";
		errorImg.style.visibility = "visible";
		errorEmail.textContent = "";
		email.style.border = "1px solid red";
	} else {
		emailMessage.textContent = "";
		errorImg.style.visibility = "hidden";
		email.style.border = "1px solid hsl(0, 36%, 70%)";
	}
});

email.addEventListener("input", () => {
	if (email.value) {
		const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
		if (regexMatch) {
			errorEmail.textContent = "";
			errorImg.style.visibility = "hidden";
			email.style.border = "1px solid hsl(0, 36%, 70%)";
		} else {
			errorEmail.innerHTML = "Please provide a valid email";
			emailMessage.textContent = "";
			email.style.border = "1px solid red";
			errorImg.style.visibility = "visible";
		}
	} else {
		emailMessage.innerHTML = "Please provide a valid email 1 111";
		errorEmail.textContent = "";
		email.style.border = "1px solid red";
		errorImg.style.visibility = "visible";
	}
});

let emailInput = document.querySelector('[type="email"]');
let passwordInput = document.querySelector('[type="password"]');
let btn = document.querySelector('[type="button"]');
let showPassBtn = document.querySelector("i");
let infoArr = [
	["NPC_1111", "example123@gmail.com", "12345678", "0987654321"],
	["PXVC", "pxvcuong2347@gmail.com", "cuong8002", "0967386112"],
	[
		"uAreRickRolled",
		"rickastley@gmail.com",
		"NeverGonnaGiveYouUp",
		"0857439123",
	],
];

localStorage.setItem("info array", JSON.stringify(infoArr));

btn.addEventListener("click", function () {
	let infoArr = JSON.parse(localStorage.getItem("info array"));
	let count = 0;

	for (let i = 0; i < infoArr.length; i++) {
		if (
			emailInput.value === infoArr[i][1] &&
			passwordInput.value === infoArr[i][2]
		) {
			window.location.href = "https://www.youtube.com";
		} else {
			count++;
		}

		if (count === infoArr.length) {
			alert("Invalid email or password");
		}
	}
});

showPassBtn.addEventListener("click", function () {
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		showPassBtn.classList.add("fa-eye-slash");
		showPassBtn.classList.remove("fa-eye");
	} else {
		passwordInput.type = "password";
		showPassBtn.classList.add("fa-eye");
		showPassBtn.classList.remove("fa-eye-slash");
	}
});

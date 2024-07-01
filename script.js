//********** ***// hamburger menu //********** ***//

const navMenu = document.querySelector(".nav__menu");
const navBtnOpen = document.querySelector(".nav__toggle-open");
const navBtnClose = document.querySelector(".nav__toggle-close");
const openNavHandler = () => {
	navMenu.style.display = "flex";
	navBtnOpen.style.display = "none";
	navBtnClose.style.display = "inline-block";
};

const closeNavHandler = () => {
	navMenu.style.display = "none";
	navBtnOpen.style.display = "inline-block";
	navBtnClose.style.display = "none";
};

navBtnOpen.addEventListener("click", openNavHandler);
navBtnClose.addEventListener("click", closeNavHandler);

// close the nav menu on click of the nav link on small screens
const navItems = navMenu.querySelectorAll("a");
if (window.innerWidth < 768) {
	navItems.forEach((item) => {
		item.addEventListener("click", closeNavHandler);
	});
}




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

// toggle theme

// const themeBTN = document.querySelector(".nav__theme-btn");
// const body = document.querySelector(".dark")

// themeBTN.addEventListener('click', ()=>{
// let bodyClass =document.body.className
// if(bodyClass ="dark"){

// 	document.body.className =bodyClass
// 	// change toggle button
// 	// themeBTN.innerHTML="<ion-icon name="sunny-outline"></ion-icon>"
// }else{
// 	{

// 	bodyClass.classList.remove("dark")
// 	document.body.className = bodyClass
// 	}
// }
// })

const themeBTN = document.querySelector(".nav__theme-btn");
const body = document.querySelector(".dark-mode");
themeBTN.addEventListener('click', ()=>{
body.classList.toggle("active")
})
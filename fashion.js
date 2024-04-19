/* Hamburger Menu */
// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Humberger Menu Diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Diluar Sidebar Untuk Menghilangkan Nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Kolom Search
const searchInput = document.querySelector(".navbar-search");
document.querySelector(".search-input").onclick=()=>{
  searchInput.classList.toggle("active");
};
document.addEventListener("click", function (e) {
  if (!searchInput.contains(e.target)) {
    searchInput.classList.remove("active");
  };
});

// Menu Profil
const subMenu = document.getElementById("subMenu");
const avatar = document.querySelector(".avatar");
const sub_menu = document.querySelector(".sub-menu");
avatar.onclick=()=>{
  subMenu.classList.toggle("active");
};
document.addEventListener("click", function (e) {
  if (!avatar.contains(e.target) && !sub_menu.contains(e.target)) {
    subMenu.classList.remove("active");
  };
});

/* Slidebar */ 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/* */

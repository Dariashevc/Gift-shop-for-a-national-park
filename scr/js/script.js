// Toggle Sidebar Filters
function toggleFilter() {
    var filterOptions = document.getElementById("filter-options");
    var sideNav = document.getElementById("side-nav");
    if (filterOptions.style.display === "none") {
        filterOptions.style.display = "block";
        sideNav.style.width = "220px"; 
    } else {
        filterOptions.style.display = "none";
        sideNav.style.width = "80px";
    }
}
document.getElementById("filter-options").style.display = "none";

// Price Range Display
function updatePrice() {
    var price = document.getElementById("price-range").value;
    document.getElementById("price-display").textContent = "$" + price;
}

// Scroll to Shop Section
function scrollToShop() {
    const shopSection = document.getElementById('shop-section');
    const yOffset = -75; // offset for the sticky header
    const y = shopSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}


// Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);

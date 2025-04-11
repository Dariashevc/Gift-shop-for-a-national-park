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

// Function to update the price display dynamically
function updatePrice() {
    var price = document.getElementById("price-range").value;
    document.getElementById("price-display").textContent = "$" + price;
}
document.getElementById("filter-options").style.display = "none"; 

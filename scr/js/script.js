// Function to toggle the filter options display
function toggleFilter() {
    var filterOptions = document.getElementById("filter-options");
    var sideNav = document.getElementById("side-nav");
    // Toggle the display of the filter options
    if (filterOptions.style.display === "none") {
        filterOptions.style.display = "block";
        sideNav.style.width = "220px"; // Show full sidebar
    } else {
        filterOptions.style.display = "none";
        sideNav.style.width = "80px"; // Collapse sidebar to just show Filters
    }
}

// Function to update the price display dynamically
function updatePrice() {
    var price = document.getElementById("price-range").value;
    document.getElementById("price-display").textContent = "$" + price;
}

// Set initial state to collapsed (only Filters visible)
document.getElementById("filter-options").style.display = "none"; // Hide filter options initially

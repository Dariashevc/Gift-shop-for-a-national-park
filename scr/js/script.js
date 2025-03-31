// Function to toggle the filter section and expand/collapse sidebar
function toggleFilter() {
    var sideNav = document.getElementById("side-nav");
    var filterOptions = document.getElementById("filter-options");

    // Toggle the display of the filter options and the sidebar width
    if (filterOptions.style.display === "none") {
        filterOptions.style.display = "block";
        sideNav.style.width = "220px"; // Expand the sidebar
        sideNav.classList.add("expanded");
    } else {
        filterOptions.style.display = "none";
        sideNav.style.width = "80px"; // Collapse the sidebar
        sideNav.classList.remove("expanded");
    }
}

// Set initial state of filter options to hidden (collapsed sidebar)
document.getElementById("filter-options").style.display = "none";

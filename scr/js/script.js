// Toggle the sidebar to show and hide filter options
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

// Set initial state to collapsed (only Filters visible)
document.getElementById("filter-options").style.display = "none";

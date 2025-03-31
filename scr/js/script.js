// Toggle the sidebar to show and hide filter options and toggle arrow direction
function toggleFilter() {
    var filterOptions = document.getElementById("filter-options");
    var sideNav = document.getElementById("side-nav");
    var arrow = document.getElementById("toggle-arrow");
    
    // Toggle the display of the filter options
    if (filterOptions.style.display === "none") {
        filterOptions.style.display = "block";
        sideNav.style.width = "220px"; // Show full sidebar
        arrow.classList.remove("fa-chevron-down");
        arrow.classList.add("fa-chevron-up"); // Change arrow direction
    } else {
        filterOptions.style.display = "none";
        sideNav.style.width = "80px"; // Collapse sidebar to just show Filters
        arrow.classList.remove("fa-chevron-up");
        arrow.classList.add("fa-chevron-down"); // Change arrow direction
    }
}

// Set initial state to collapsed (only Filters visible)
document.getElementById("filter-options").style.display = "none";

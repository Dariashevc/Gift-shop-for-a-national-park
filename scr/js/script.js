// Function to update the displayed price value
function updatePriceValue(value) {
    document.getElementById("price-value").textContent = value;
}

// Function to apply filters (Can be expanded later to filter actual products)
function applyFilters() {
    const selectedCategories = [];
    document.querySelectorAll('input[name="category"]:checked').forEach((checkbox) => {
        selectedCategories.push(checkbox.value);
    });

    const selectedColors = [];
    document.querySelectorAll('input[name="color"]:checked').forEach((checkbox) => {
        selectedColors.push(checkbox.value);
    });

    const selectedSize = document.querySelector('input[name="size"]:checked')?.value || "Any";
    const maxPrice = document.getElementById("price-range").value;

    console.log("Filters Applied:");
    console.log("Categories:", selectedCategories);
    console.log("Colors:", selectedColors);
    console.log("Size:", selectedSize);
    console.log("Max Price:", maxPrice);
}

// Function for search (to be implemented)
function searchProducts() {
    alert("Search function coming soon!");
}

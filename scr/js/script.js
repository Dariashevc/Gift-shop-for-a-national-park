// Create and append everything using JavaScript

// Create Header
const header = document.createElement('header');
document.body.appendChild(header);

// Logo
const logoDiv = document.createElement('div');
logoDiv.classList.add('logo');
const logoLink = document.createElement('a');
logoLink.href = 'index.html';
const logoIcon = document.createElement('i');
logoIcon.classList.add('fas', 'fa-tree');
logoLink.appendChild(logoIcon);
logoLink.innerHTML += ' National Park Gift Shop';
logoDiv.appendChild(logoLink);
header.appendChild(logoDiv);

// Search container
const searchContainer = document.createElement('div');
searchContainer.classList.add('search-container');
const searchBar = document.createElement('div');
searchBar.classList.add('search-bar');
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.id = 'search';
searchInput.placeholder = 'Search for products...';
const searchButton = document.createElement('button');
searchButton.onclick = function () { alert('Searching for: ' + searchInput.value); };
const searchIcon = document.createElement('i');
searchIcon.classList.add('fas', 'fa-search');
searchButton.appendChild(searchIcon);
searchBar.appendChild(searchInput);
searchBar.appendChild(searchButton);
searchContainer.appendChild(searchBar);
header.appendChild(searchContainer);

// Icons
const iconsDiv = document.createElement('div');
iconsDiv.classList.add('icons');
const favoriteIcon = document.createElement('a');
favoriteIcon.href = '/scr/childPages/favoritePage.html';
const cartIcon = document.createElement('a');
cartIcon.href = '/scr/childPages/cartPage.html';
const heartIcon = document.createElement('i');
heartIcon.classList.add('fas', 'fa-heart');
const cartIconImg = document.createElement('i');
cartIconImg.classList.add('fas', 'fa-shopping-cart');
favoriteIcon.appendChild(heartIcon);
cartIcon.appendChild(cartIconImg);
iconsDiv.appendChild(favoriteIcon);
iconsDiv.appendChild(cartIcon);
header.appendChild(iconsDiv);

// Create Hero Section
const heroSection = document.createElement('section');
heroSection.classList.add('hero-section');
document.body.appendChild(heroSection);

// Slideshow
const slideshow = document.createElement('div');
slideshow.classList.add('slideshow');
const slides = [
    './scr/images/pexels-cliford-mervil-988071-2398220.jpg',
    './scr/images/pexels-josh-willink-11499-701016.jpg',
    './scr/images/pexels-peter-kovesi-421914941-17437531.jpg'
];
slides.forEach((imgSrc, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.backgroundImage = `url(${imgSrc})`;
    if (index === 0) slide.classList.add('active'); // Add 'active' class to first slide
    slideshow.appendChild(slide);
});
heroSection.appendChild(slideshow);

// Hero Content
const heroContent = document.createElement('div');
heroContent.classList.add('hero-content');
const heroHeading = document.createElement('h1');
heroHeading.textContent = 'Bring the beautiful memories of nature home';
const heroButton = document.createElement('button');
heroButton.textContent = 'Go Shopping Now';
heroButton.onclick = function () { alert('Scroll to Shop Section'); };
heroContent.appendChild(heroHeading);
heroContent.appendChild(heroButton);
heroSection.appendChild(heroContent);

// Create Sidebar Filter Section
const sideNav = document.createElement('div');
sideNav.classList.add('side-nav');
document.body.appendChild(sideNav);

const filterTitle = document.createElement('div');
filterTitle.classList.add('filter-title');
const filterTitleH2 = document.createElement('h2');
filterTitleH2.textContent = 'Filters';
const filterArrow = document.createElement('i');
filterArrow.classList.add('fas', 'fa-chevron-right');
filterTitleH2.appendChild(filterArrow);
filterTitle.appendChild(filterTitleH2);
sideNav.appendChild(filterTitle);

const filterOptions = document.createElement('div');
filterOptions.classList.add('filter-options');
const categories = ['Hats', 'T-shirts', 'Cups', 'Toys'];
const colors = ['Red', 'Blue', 'Green', 'Black'];
const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

// Categories
const categorySection = document.createElement('h3');
categorySection.textContent = 'Categories';
const categoryFilter = document.createElement('div');
categoryFilter.classList.add('filter-section');
categories.forEach(category => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(category));
    categoryFilter.appendChild(label);
});
filterOptions.appendChild(categorySection);
filterOptions.appendChild(categoryFilter);

// Colors
const colorSection = document.createElement('h3');
colorSection.textContent = 'Colors';
const colorFilter = document.createElement('div');
colorFilter.classList.add('filter-section');
colors.forEach(color => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(color));
    colorFilter.appendChild(label);
});
filterOptions.appendChild(colorSection);
filterOptions.appendChild(colorFilter);

// Size
const sizeSection = document.createElement('h3');
sizeSection.textContent = 'Size';
const sizeFilter = document.createElement('div');
sizeFilter.classList.add('filter-section');
sizes.forEach(size => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(size));
    sizeFilter.appendChild(label);
});
filterOptions.appendChild(sizeSection);
filterOptions.appendChild(sizeFilter);

// Price Range
const priceRangeSection = document.createElement('h3');
priceRangeSection.textContent = 'Price Range';
const priceFilter = document.createElement('div');
priceFilter.classList.add('filter-section');
const priceRange = document.createElement('input');
priceRange.type = 'range';
priceRange.id = 'price-range';
priceRange.min = '0';
priceRange.max = '100';
priceRange.value = '50';
priceRange.oninput = function () { updatePrice(); };
const priceDisplay = document.createElement('span');
priceDisplay.id = 'price-display';
priceDisplay.textContent = '$50';
priceFilter.appendChild(priceRange);
priceFilter.appendChild(document.createTextNode(' Max'));
priceFilter.appendChild(priceDisplay);
filterOptions.appendChild(priceRangeSection);
filterOptions.appendChild(priceFilter);

// Apply Filters Button
const applyFiltersButton = document.createElement('button');
applyFiltersButton.textContent = 'Apply Filters';
filterOptions.appendChild(applyFiltersButton);

// Append filter options to sidebar
sideNav.appendChild(filterOptions);

// Create Product List Section
const productContainer = document.createElement('ul');
productContainer.classList.add('product-container');
document.body.appendChild(productContainer);

// Sample Products Data
const products = [
    { name: 'Cup 1', price: 25, img: './scr/images/cup1.jpg' },
    { name: 'T-shirt 1', price: 30, img: './scr/images/cup2.jpg' },
    { name: 'Hat 1', price: 18, img: './scr/images/cup3.jpg' },
    { name: 'Toy 1', price: 10, img: './scr/images/cup4.jpg' }
];

products.forEach(product => {
    const productItem = document.createElement('li');
    productItem.classList.add('product-item');
    const productImg = document.createElement('img');
    productImg.src = product.img;
    productImg.alt = product.name;
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.textContent = `$${product.price}`;
    const productButtons = document.createElement('div');
    productButtons.classList.add('product-buttons');
    const cartButton = document.createElement('button');
    cartButton.onclick = function () { alert('Added to cart: ' + product.name); };
    cartButton.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    const favoriteButton = document.createElement('button');
    favoriteButton.onclick = function () { alert('Added to favorites: ' + product.name); };
    favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
    productButtons.appendChild(cartButton);
    productButtons.appendChild(favoriteButton);
    productItem.appendChild(productImg);
    productItem.appendChild(productPrice);
    productItem.appendChild(productButtons);
    productContainer.appendChild(productItem);
});

// Price Range Update
function updatePrice() {
    const priceRangeValue = document.getElementById('price-range').value;
    document.getElementById('price-display').textContent = `$${priceRangeValue}`;
}

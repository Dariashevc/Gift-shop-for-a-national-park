// === Create Header ===
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

// Search
const searchContainer = document.createElement('div');
searchContainer.classList.add('search-container');
const searchBar = document.createElement('div');
searchBar.classList.add('search-bar');
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.id = 'search';
searchInput.placeholder = 'Search for products...';
const searchButton = document.createElement('button');
searchButton.onclick = function () {
    alert('Searching for: ' + searchInput.value);
};
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

// === Create Hero Section ===
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
    if (index === 0) slide.classList.add('active');
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
heroButton.onclick = function () {
    document.querySelector('.product-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
};
heroContent.appendChild(heroHeading);
heroContent.appendChild(heroButton);
heroSection.appendChild(heroContent);

// === Create Sidebar Filter ===
const sideNav = document.createElement('div');
sideNav.classList.add('side-nav');
document.body.appendChild(sideNav);

const filterTitle = document.createElement('div');
filterTitle.classList.add('filter-title');
const filterTitleH2 = document.createElement('h2');
filterTitleH2.textContent = 'Filters';
const filterArrow = document.createElement('i');
filterArrow.classList.add('fas', 'fa-chevron-right');
filterArrow.id = 'filter-arrow';
filterTitleH2.appendChild(filterArrow);
filterTitle.appendChild(filterTitleH2);
sideNav.appendChild(filterTitle);

// Expandable filters
filterTitle.onclick = function () {
    const options = document.querySelector('.filter-options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
    sideNav.classList.toggle('expanded');
    filterArrow.style.transform = options.style.display === 'block' ? 'rotate(90deg)' : 'rotate(0deg)';
};

const filterOptions = document.createElement('div');
filterOptions.classList.add('filter-options');
const categories = ['Hats', 'T-shirts', 'Cups', 'Toys'];
const colors = ['Red', 'Blue', 'Green', 'Black'];
const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

// Helper to build filter sections
function createFilterSection(title, items) {
    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = title;
    const section = document.createElement('div');
    section.classList.add('filter-section');
    items.forEach(item => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(item));
        section.appendChild(label);
    });
    filterOptions.appendChild(sectionTitle);
    filterOptions.appendChild(section);
}

createFilterSection('Categories', categories);
createFilterSection('Colors', colors);
createFilterSection('Size', sizes);

// Price Range
const priceSectionTitle = document.createElement('h3');
priceSectionTitle.textContent = 'Price Range';
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
filterOptions.appendChild(priceSectionTitle);
filterOptions.appendChild(priceFilter);

// Apply button
const applyBtn = document.createElement('button');
applyBtn.textContent = 'Apply Filters';
filterOptions.appendChild(applyBtn);
sideNav.appendChild(filterOptions);

// === Create Product List ===
const productContainer = document.createElement('ul');
productContainer.classList.add('product-container');
document.body.appendChild(productContainer);

// Sample product data
const products = [
    { name: 'Cup 1', price: 25, img: './scr/images/cup1.jpg' },
    { name: 'T-shirt 1', price: 30, img: './scr/images/cup2.jpg' },
    { name: 'Hat 1', price: 18, img: './scr/images/cup3.jpg' },
    { name: 'Toy 1', price: 10, img: './scr/images/cup4.jpg' }
];

products.forEach(product => {
    const item = document.createElement('li');
    item.classList.add('product-item');
    const img = document.createElement('img');
    img.src = product.img;
    img.alt = product.name;
    const price = document.createElement('p');
    price.classList.add('product-price');
    price.textContent = `$${product.price}`;
    const btns = document.createElement('div');
    btns.classList.add('product-buttons');
    const cartBtn = document.createElement('button');
    cartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
    cartBtn.onclick = () => alert('Added to cart: ' + product.name);
    const favBtn = document.createElement('button');
    favBtn.innerHTML = '<i class="fas fa-heart"></i>';
    favBtn.onclick = () => alert('Added to favorites: ' + product.name);
    btns.appendChild(cartBtn);
    btns.appendChild(favBtn);
    item.appendChild(img);
    item.appendChild(price);
    item.appendChild(btns);
    productContainer.appendChild(item);
});

// === Price Range Display Function ===
function updatePrice() {
    const value = document.getElementById('price-range').value;
    document.getElementById('price-display').textContent = `$${value}`;
}

// === Slideshow Rotation ===
let currentSlide = 0;
setInterval(() => {
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (currentSlide + 1) % allSlides.length;
    allSlides[currentSlide].classList.add('active');
}, 4000);

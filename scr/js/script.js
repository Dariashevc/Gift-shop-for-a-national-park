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
    const searchValue = searchInput.value.trim().toLowerCase();
    const items = document.querySelectorAll('.product-item');

    items.forEach(item => {
        const productName = item.querySelector('img').alt.toLowerCase();
        if (productName.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    productContainer.scrollIntoView({ behavior: 'smooth' });
};
searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') { // Check if Enter key was pressed
    event.preventDefault(); // Prevent the default form submission behavior (if any)
    searchButton.click(); // Trigger the search button click event
  }
});
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
favoriteIcon.href = '/scr/childPages/favorite.html';
const cartIcon = document.createElement('a');
cartIcon.href = '/scr/childPages/cart.html';
const heartIcon = document.createElement('i');
heartIcon.classList.add('fas', 'fa-heart');
const cartIconImg = document.createElement('i');
cartIconImg.classList.add('fas', 'fa-shopping-cart');
favoriteIcon.appendChild(heartIcon);
cartIcon.appendChild(cartIconImg);
iconsDiv.appendChild(favoriteIcon);
iconsDiv.appendChild(cartIcon);

// === Add Menu Icon ===
const menuButton = document.createElement('button');
menuButton.classList.add('menu-btn');
const menuIcon = document.createElement('i');
menuIcon.classList.add('fas', 'fa-bars');
menuButton.appendChild(menuIcon);
iconsDiv.appendChild(menuButton);  // Add the menu button to icons div
header.appendChild(iconsDiv);

// === Create Menu Modal ===
const menuModal = document.createElement('div');
menuModal.classList.add('menu-modal');
menuModal.style.display = 'none';  // Initially hidden
document.body.appendChild(menuModal);

// Add Close Button in the top-right corner
const closeButton = document.createElement('button');
closeButton.classList.add('close-btn');
closeButton.innerHTML = '&times;';  // '×' symbol for close
closeButton.onclick = function () {
    menuModal.style.display = 'none';
};
menuModal.appendChild(closeButton);

// Links in Modal
const menuLinks = [
    { text: 'About Us', href: '/scr/childPages/aboutUs.html' },
    { text: 'Contact Us', href: '#' },
    { text: 'Delivery Information', href: '#' },
    { text: 'Submit a Testimonial', href: '#' }
];

const menuList = document.createElement('ul');
menuLinks.forEach(linkObj => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = linkObj.href;
    link.textContent = linkObj.text;
    listItem.appendChild(link);
    menuList.appendChild(listItem);
});
menuModal.appendChild(menuList);

// === Toggle Menu Modal Visibility ===
menuButton.onclick = function () {
    if (menuModal.style.display === 'none') {
        menuModal.style.display = 'block';
    } else {
        menuModal.style.display = 'none';
    }
};

// === Close Modal on 'Esc' key ===
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        menuModal.style.display = 'none';
    }
});

// === Close Menu Modal when clicking outside ===
window.addEventListener('click', function (event) {
    if (menuModal.style.display === 'block' && !menuModal.contains(event.target) && event.target !== menuButton && !menuButton.contains(event.target)) {
        menuModal.style.display = 'none';
    }
});



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
    const filterBar = document.querySelector('.filter-bar'); 
    const offset = filterBar.offsetTop - window.innerHeight * 0.09; 
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
};
heroContent.appendChild(heroHeading);
heroContent.appendChild(heroButton);
heroSection.appendChild(heroContent);

// ==== Filter Bar and Modal ====
const filterBar = document.createElement('div');
filterBar.classList.add('filter-bar');
const filterBtn = document.createElement('button');
filterBtn.classList.add('filter-toggle-btn');
filterBtn.innerHTML = 'Filters <i id="filter-arrow" class="fas fa-chevron-down"></i>';
filterBar.appendChild(filterBtn);
document.body.appendChild(filterBar);

const filterModal = document.createElement('div');
filterModal.classList.add('filter-modal');
filterModal.style.display = 'none';
document.body.appendChild(filterModal);

const filterOptions = document.createElement('div');
filterOptions.classList.add('filter-options');
filterModal.appendChild(filterOptions);

// Filters data
const categories = ['Cup', 'Hat', 'Toy', 'T-shirt'];
const colors = ['red', 'blue', 'black', 'grey', 'brown'];

// Create a filter section
function createFilterSection(title, items, type) {
    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = title;
    const section = document.createElement('div');
    section.classList.add('filter-section');
    items.forEach(item => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = item;
        checkbox.classList.add(type === 'category' ? 'category-checkbox' : 'color-checkbox');
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(item));
        section.appendChild(label);
    });
    filterOptions.appendChild(sectionTitle);
    filterOptions.appendChild(section);
}

createFilterSection('Categories', categories, 'category');
createFilterSection('Colors', colors, 'color');

// Price Filter
const priceSectionTitle = document.createElement('h3');
priceSectionTitle.textContent = 'Price Range';
const priceFilter = document.createElement('div');
priceFilter.classList.add('filter-section');

const priceRange = document.createElement('input');
priceRange.type = 'range';
priceRange.id = 'price-range';
priceRange.min = '0';
priceRange.max = '50';
priceRange.value = '50';
priceRange.oninput = function () {
    updatePrice();
};

const priceDisplay = document.createElement('span');
priceDisplay.id = 'price-display';
priceDisplay.textContent = '$50';

priceFilter.appendChild(priceRange);
priceFilter.appendChild(document.createTextNode(' Max '));
priceFilter.appendChild(priceDisplay);

filterOptions.appendChild(priceSectionTitle);
filterOptions.appendChild(priceFilter);

// Apply Filters Button
const applyBtn = document.createElement('button');
applyBtn.textContent = 'Apply Filters';
filterOptions.appendChild(applyBtn);

// Filter Modal Toggle
filterBtn.onclick = function () {
    const arrow = document.getElementById('filter-arrow');
    if (filterModal.style.display === 'none') {
        filterModal.style.display = 'block';
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-up');
    } else {
        filterModal.style.display = 'none';
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');
    }
};

// === Create Product List ===
const productContainer = document.createElement('ul');
productContainer.classList.add('product-container');
document.body.appendChild(productContainer);

// === Product Data ===
const products = [
    { name: 'Cup', price: 18, img: './scr/images/cup1.jpg', colors: ['black'] },
    { name: 'Cup', price: 20, img: './scr/images/cup2.jpg', colors: ['black'] },
    { name: 'Cup', price: 20, img: './scr/images/cup3.jpg', colors: ['white'] },
    { name: 'Cup', price: 25, img: './scr/images/cup4.jpg', colors: ['white'] },
    { name: 'Hat', price: 25, img: './scr/images/hat1.jpg', colors: ['grey'] },
    { name: 'Hat', price: 35, img: './scr/images/hat2.jpg', colors: ['brown'] },
    { name: 'Hat', price: 30, img: './scr/images/hat3.jpg', colors: ['blue'] },
    { name: 'Toy elk', price: 40, img: './scr/images/toy1.jpg', colors: ['brown'] },
    { name: 'Toy fox', price: 45, img: './scr/images/toy2.jpg', colors: ['brown'] },
    { name: 'Toy wolf', price: 45, img: './scr/images/toy3.jpg', colors: ['grey'] },
    { name: 'Toy hare', price: 40, img: './scr/images/toy4.jpg', colors: ['grey'] },
    {
        name: 'T-shirt',
        price: 15,
        img: './scr/images/red-tshirt.jpg',
        colors: ['red', 'blue', 'black', 'grey'],
        colorImages: {
            red: './scr/images/red-tshirt.jpg',
            blue: './scr/images/blue-tshirt.jpg',
            black: './scr/images/black-tshirt.jpg',
            grey: './scr/images/grey-tshirt.jpg'
        }
    }
];

// === Render Products ===
function renderProducts(productList) {
    productContainer.innerHTML = '';
    productList.forEach(product => {
        const item = document.createElement('li');
        item.classList.add('product-item');

        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.name;

        const colorButtons = document.createElement('div');
        colorButtons.classList.add('color-buttons');

        if (product.colorImages) {
            Object.keys(product.colorImages).forEach(color => {
                const colorButton = document.createElement('button');
                colorButton.style.backgroundColor = color;
                colorButton.title = color;
                colorButton.onclick = () => {
                    img.src = product.colorImages[color];
                };
                colorButtons.appendChild(colorButton);
            });
        } else {
            product.colors.forEach(color => {
                const colorButton = document.createElement('button');
                colorButton.style.backgroundColor = color;
                colorButton.title = color;
                colorButtons.appendChild(colorButton);
            });
        }

        const price = document.createElement('p');
        price.classList.add('product-price');
        price.textContent = `$${product.price}`;

        const btns = document.createElement('div');
        btns.classList.add('product-buttons');

        const cartBtn = document.createElement('button');
        cartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
        cartBtn.onclick = () => {
            Swal.fire({
                icon: 'success',
                title: 'Added to Cart',
                text: product.name + ' has been added to your cart!',
                timer: 1500,
                showConfirmButton: false
            });
        };

        const favBtn = document.createElement('button');
        favBtn.innerHTML = '<i class="fas fa-heart"></i>';
        favBtn.onclick = () => {
            Swal.fire({
                icon: 'success',
                title: 'Added to Favorites',
                text: product.name + ' has been added to your favorites!',
                timer: 1500,
                showConfirmButton: false
            });
        };

        btns.appendChild(cartBtn);
        btns.appendChild(favBtn);

        item.appendChild(img);
        if (colorButtons.children.length > 0) {
          item.appendChild(price);
            item.appendChild(colorButtons);
        }

        item.appendChild(btns);

        productContainer.appendChild(item);
    });
}

// Initial render
renderProducts(products);

// === Apply Filters ===
applyBtn.onclick = function () {
    const selectedCategories = [];
    const selectedColors = [];

    const categoryCheckboxes = filterModal.querySelectorAll('.category-checkbox:checked');
    categoryCheckboxes.forEach(checkbox => selectedCategories.push(checkbox.value));

    const colorCheckboxes = filterModal.querySelectorAll('.color-checkbox:checked');
    colorCheckboxes.forEach(checkbox => {
        const normalized = colorMapping[checkbox.value] || checkbox.value; // Normalize color
        selectedColors.push(normalized.toLowerCase());
    });

    const selectedPrice = parseInt(document.getElementById('price-range').value);

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.name.split(' ')[0]);
        const colorMatch = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color.toLowerCase()));
        const priceMatch = product.price <= selectedPrice;

        return categoryMatch && colorMatch && priceMatch;
    });

    console.log('Selected Colors:', selectedColors);
    console.log('Filtered Products:', filteredProducts);

    renderProducts(filteredProducts);

    filterModal.style.display = 'none';
    const arrow = document.getElementById('filter-arrow');
    arrow.classList.remove('fa-chevron-up');
    arrow.classList.add('fa-chevron-down');
};

// === Update Price Display ===
function updatePrice() {
    const value = document.getElementById('price-range').value;
    document.getElementById('price-display').textContent = `$${value}`;
}

// === Slideshow (if applicable) ===
let currentSlide = 0;
setInterval(() => {
    const allSlides = document.querySelectorAll('.slide');
    if (allSlides.length === 0) return;
    allSlides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (currentSlide + 1) % allSlides.length;
    allSlides[currentSlide].classList.add('active');
}, 4000);


// === Create Footer ===
const footer = document.createElement('footer');
footer.classList.add('footer');
document.body.appendChild(footer);

// Social Media Section
const socialMedia = document.createElement('div');
socialMedia.classList.add('social-media');

const socials = [
    { href: 'https://facebook.com', icon: 'fa-brands fa-facebook-f' },
    { href: 'https://twitter.com', icon: 'fa-brands fa-twitter' },
    { href: 'https://instagram.com', icon: 'fa-brands fa-instagram' }
];

socials.forEach(s => {
    const link = document.createElement('a');
    link.href = s.href;
    link.target = '_blank';
    link.innerHTML = `<i class="${s.icon}"></i>`;
    socialMedia.appendChild(link);
});

footer.appendChild(socialMedia);

// Footer Links Section
const footerLinks = document.createElement('div');
footerLinks.classList.add('footer-links');

const links = [
    { text: 'About Us', href: '/scr/childPages/aboutUs.html' },
    { text: 'Contact Us', href: '#' },
    { text: 'Delivery Information', href: '#' },
    { text: 'Submit a Testimonial', href: '#' }
];

links.forEach(linkObj => {
    const link = document.createElement('a');
    link.href = linkObj.href;
    link.textContent = linkObj.text;
    footerLinks.appendChild(link);
});

footer.appendChild(footerLinks);

async function fetchProducts() {
  try {
    const response = await fetch('./scr/php/products.php');
    const products = await response.json();
    console.log(products); 
    displayProducts(products); 
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();

// Example color mapping in JavaScript
const colorMapping = {
    DarkRed: 'red',
    LightBlue: 'blue',
    red: 'red',
    blue: 'blue',
    black: 'black',
    grey: 'grey',
    white: 'white',
    brown: 'brown'
};

// Function to normalize color before sending to the server
function normalizeColor(selectedColor) {
    return colorMapping[selectedColor] || selectedColor;
}

// Example usage
const selectedColor = document.getElementById('colorFilter').value; // Assume this is the selected color
const normalizedColor = normalizeColor(selectedColor);

// Send normalized color to the server
fetch('/path/to/products.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ color: normalizedColor })
});

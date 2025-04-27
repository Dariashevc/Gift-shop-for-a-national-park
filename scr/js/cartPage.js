// === Create Header ===
const header = document.createElement('header');
document.body.appendChild(header);

// Logo
const logoDiv = document.createElement('div');
logoDiv.classList.add('logo');
const logoLink = document.createElement('a');
logoLink.href = '/index.html';
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
    { text: 'About Us', href: '#' },
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
    { text: 'About Us', href: '#' },
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

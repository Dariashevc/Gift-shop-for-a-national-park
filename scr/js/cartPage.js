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


document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    renderCart(cart);
});

function renderCart(items) {
    const container = document.createElement("div");
    container.style.padding = "20px";
    container.style.fontFamily = "Arial, sans-serif";

    const title = document.createElement("h1");
    title.textContent = "Your Shopping Cart";
    container.appendChild(title);

    if (items.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.textContent = "Your cart is empty.";
        container.appendChild(emptyMsg);
    } else {
        items.forEach((item, index) => {
            const card = document.createElement("div");
            card.style.display = "flex";
            card.style.alignItems = "center";
            card.style.marginBottom = "15px";
            card.style.padding = "10px";
            card.style.border = "1px solid #ccc";
            card.style.borderRadius = "10px";
            card.style.background = "#fff";

            const img = document.createElement("img");
            img.src = item.img;
            img.alt = item.name;
            img.style.width = "100px";
            img.style.marginRight = "20px";

            const info = document.createElement("div");

            const name = document.createElement("h3");
            name.textContent = item.name;

            const price = document.createElement("p");
            price.textContent = `Price: $${item.price}`;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.style.marginTop = "10px";
            removeBtn.onclick = () => {
                removeFromCart(index);
            };

            info.appendChild(name);
            info.appendChild(price);
            info.appendChild(removeBtn);

            card.appendChild(img);
            card.appendChild(info);

            container.appendChild(card);
        });
    }

    document.body.innerHTML = "";
    document.body.appendChild(container);
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(cart);
}


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

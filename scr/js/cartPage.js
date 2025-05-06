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

// Menu Icon
const menuButton = document.createElement('button');
menuButton.classList.add('menu-btn');
const menuIcon = document.createElement('i');
menuIcon.classList.add('fas', 'fa-bars');
menuButton.appendChild(menuIcon);
iconsDiv.appendChild(menuButton);
header.appendChild(iconsDiv);

// === Create Menu Modal ===
const menuModal = document.createElement('div');
menuModal.classList.add('menu-modal');
menuModal.style.display = 'none';
document.body.appendChild(menuModal);

// Close Button
const closeButton = document.createElement('button');
closeButton.classList.add('close-btn');
closeButton.innerHTML = '&times;';
closeButton.onclick = function () {
    menuModal.style.display = 'none';
};
menuModal.appendChild(closeButton);

// Modal Links
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

// Toggle Menu Modal
menuButton.onclick = function () {
    menuModal.style.display = menuModal.style.display === 'none' ? 'block' : 'none';
};

// Close on Esc
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        menuModal.style.display = 'none';
    }
});

// Close on Outside Click
window.addEventListener('click', function (event) {
    if (
        menuModal.style.display === 'block' &&
        !menuModal.contains(event.target) &&
        event.target !== menuButton &&
        !menuButton.contains(event.target)
    ) {
        menuModal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // === Setup ===
    const body = document.body;
    body.style.margin = '0';
    body.style.fontFamily = 'Arial, sans-serif';

    // === Main Section ===
    const main = document.createElement('main');
    main.id = 'cart-main';

    const headerHeight = header.offsetHeight;
    main.style.padding = `${headerHeight + 20}px 20px 300px 20px`;

    // Title
    const heading = document.createElement('h1');
    heading.textContent = 'Your Shopping Cart';
    heading.style.textAlign = 'center';
    heading.style.color = 'white';
    main.appendChild(heading);

    // Cart Container
    const cartContainer = document.createElement('ul');
    cartContainer.id = 'cartContainer';
    cartContainer.className = 'product-container';
    main.appendChild(cartContainer);

    // === Utilities ===
    function getCartItems() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    function renderCart(cartItems) {
        cartContainer.innerHTML = '';

        if (cartItems.length === 0) {
            const emptyMsg = document.createElement('p');
            emptyMsg.textContent = 'Your cart is empty.';
            emptyMsg.style.color = 'white';
            emptyMsg.style.textAlign = 'center';
            cartContainer.appendChild(emptyMsg);
            return;
        }

        cartItems.forEach(product => {
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
            } else if (product.colors) {
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

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.onclick = () => {
                const updatedCart = getCartItems().filter(item => item.name !== product.name);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                renderCart(updatedCart);
            };

            btns.appendChild(removeBtn);

            item.appendChild(img);
            item.appendChild(price);
            item.appendChild(colorButtons);
            item.appendChild(btns);

            cartContainer.appendChild(item);
        });
    }

    // Initial Render
    renderCart(getCartItems());

    // === Add to Body in Correct Order ===
    body.appendChild(main); // Append main content first
    body.appendChild(footer); // Append footer after main content
});

// === Create Footer ===
const footer = document.createElement('footer');
footer.classList.add('footer');

// Social Media
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

// Footer Links
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

const root = document.getElementById('about-page');

// HEADER
const header = document.createElement('header');
header.className = 'header';
header.innerHTML = `
  <div class="logo">National Park Gift Shop</div>
  <nav class="nav">
    <a href="index.html">Home</a>
    <a href="about.html" class="active">About Us</a>
    <a href="favorites.html"><i class="fas fa-heart"></i></a>
    <a href="cart.html"><i class="fas fa-shopping-cart"></i></a>
  </nav>
`;
root.appendChild(header);

// MAIN CONTENT
const main = document.createElement('main');
main.className = 'about-section';

const hero = document.createElement('section');
hero.className = 'about-hero';
hero.innerHTML = `
  <h1>About Us</h1>
  <p>Bringing the beauty of nature into your home.</p>
`;

const content = document.createElement('section');
content.className = 'about-content';
content.innerHTML = `
  <h2>Our Story</h2>
  <p>
    National Park Gift Shop was founded with a mission: to help people
    carry a piece of the great outdoors with them, no matter where they go.
    Whether it’s a handcrafted mug, a cozy t-shirt, or a toy inspired by
    forest wildlife, each item is designed with love for nature and adventure.
  </p>

  <h2>What We Offer</h2>
  <ul>
    <li>Eco-friendly and high-quality souvenirs</li>
    <li>Products inspired by real national parks</li>
    <li>Fast and reliable shipping</li>
  </ul>

  <h2>Our Vision</h2>
  <p>
    We believe in sustainability, education, and a deep appreciation for the
    natural world. Through every product we sell, we aim to promote environmental
    awareness and celebrate the beauty of our parks.
  </p>
`;

main.appendChild(hero);
main.appendChild(content);
root.appendChild(main);

// FOOTER
const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = `
  <p>&copy; 2025 National Park Gift Shop</p>
  <div class="social-icons">
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
  </div>
`;
root.appendChild(footer);

<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$database = "national_park_shop";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$products = [
    [
        'name' => 'Cup',
        'price' => 18,
        'img' => './scr/images/cup1.jpg',
        'colors' => ['black']
    ],
    [
        'name' => 'Cup',
        'price' => 20,
        'img' => './scr/images/cup2.jpg',
        'colors' => ['#bdb157']
    ],
    [
        'name' => 'Cup',
        'price' => 20,
        'img' => './scr/images/cup3.jpg',
        'colors' => ['black']
    ],
    [
        'name' => 'Cup',
        'price' => 25,
        'img' => './scr/images/cup4.jpg',
        'colors' => ['white']
    ],
    [
        'name' => 'Hat',
        'price' => 25,
        'img' => './scr/images/hat1.jpg',
        'colors' => ['#888cb5']
    ],
    [
        'name' => 'Hat',
        'price' => 35,
        'img' => './scr/images/hat2.jpg',
        'colors' => ['#7a3140']
    ],
    [
        'name' => 'Hat',
        'price' => 30,
        'img' => './scr/images/hat3.jpg',
        'colors' => ['#83b6c7']
    ],
    [
        'name' => 'Toy elk',
        'price' => 40,
        'img' => './scr/images/toy1.jpg',
        'colors' => ['#806940']
    ],
    [
        'name' => 'Toy fox',
        'price' => 45,
        'img' => './scr/images/toy2.jpg',
        'colors' => ['#b88135']
    ],
    [
        'name' => 'Toy wolf',
        'price' => 45,
        'img' => './scr/images/toy3.jpg',
        'colors' => ['grey']
    ],
    [
        'name' => 'Toy hare',
        'price' => 40,
        'img' => './scr/images/toy4.jpg',
        'colors' => ['grey']
    ],
    [
        'name' => 'Tshirt',
        'price' => 15,
        'img' => './scr/images/red-tshirt.jpg', // default
        'colors' => ['red', 'blue', 'black', 'grey'],
        'colorImages' => [
            'red' => './scr/images/red-tshirt.jpg',
            'blue' => './scr/images/blue-tshirt.jpg',
            'black' => './scr/images/black-tshirt.jpg',
            'grey' => './scr/images/grey-tshirt.jpg'
        ]
    ]
];

// Receive filters (via POST)
$category = $_POST['category'] ?? '';
$color = $_POST['color'] ?? '';
$maxPrice = $_POST['maxPrice'] ?? 1000;
$searchQuery = strtolower($_POST['searchQuery'] ?? '');

// Filter products
$filteredProducts = array_filter($products, function ($product) use ($category, $color, $maxPrice, $searchQuery) {
    $matchCategory = !$category || stripos($product['name'], $category) !== false;
    $matchColor = true;
    if ($color) {
        $matchColor = in_array($color, $product['colors']);
    }
    $matchPrice = $product['price'] <= $maxPrice;
    $matchSearch = !$searchQuery || stripos($product['name'], $searchQuery) !== false;

    return $matchCategory && $matchColor && $matchPrice && $matchSearch;
});

// Return HTML code for each product
foreach ($filteredProducts as $product) {
    echo '<div class="product">';
    echo '<img src="' . htmlspecialchars($product['img']) . '" alt="' . htmlspecialchars($product['name']) . '">';
    echo '<h3>' . htmlspecialchars($product['name']) . '</h3>';
    echo '<p>$' . htmlspecialchars($product['price']) . '</p>';
    echo '</div>';
}

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

echo json_encode($products);

$conn->close();
?>
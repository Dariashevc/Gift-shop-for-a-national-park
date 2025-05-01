<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$database = "national_park_shop";

// Database connection
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Define products
$products = [
    [
        'name' => 'Cup',
        'price' => 18,
        'img' => './scr/images/cup1.jpg',
        'colors' => [
            ['visual' => 'black', 'logical' => 'black']
        ]
    ],
    [
        'name' => 'Cup',
        'price' => 20,
        'img' => './scr/images/cup2.jpg',
        'colors' => [
            ['visual' => 'black', 'logical' => 'black']
        ]
    ],
    [
        'name' => 'Cup',
        'price' => 20,
        'img' => './scr/images/cup3.jpg',
        'colors' => [
            ['visual' => 'white', 'logical' => 'white']
        ]
    ],
    [
        'name' => 'Cup',
        'price' => 25,
        'img' => './scr/images/cup4.jpg',
        'colors' => [
            ['visual' => 'white', 'logical' => 'white']
        ]
    ],
    [
        'name' => 'Hat',
        'price' => 25,
        'img' => './scr/images/hat1.jpg',
        'colors' => [
            ['visual' => 'grey', 'logical' => 'grey']
        ]
    ],
    [
        'name' => 'Hat',
        'price' => 35,
        'img' => './scr/images/hat2.jpg',
        'colors' => [
            ['visual' => 'DarkRed', 'logical' => 'red']
        ]
    ],
    [
        'name' => 'Hat',
        'price' => 30,
        'img' => './scr/images/hat3.jpg',
        'colors' => [
            ['visual' => 'LightBlue', 'logical' => 'blue']
        ]
    ],
    [
        'name' => 'Toy elk',
        'price' => 40,
        'img' => './scr/images/toy1.jpg',
        'colors' => [
            ['visual' => 'brown', 'logical' => 'brown']
        ]
    ],
    [
        'name' => 'Toy fox',
        'price' => 45,
        'img' => './scr/images/toy2.jpg',
        'colors' => [
            ['visual' => 'brown', 'logical' => 'brown']
        ]
    ],
    [
        'name' => 'Toy wolf',
        'price' => 45,
        'img' => './scr/images/toy3.jpg',
        'colors' => [
            ['visual' => 'grey', 'logical' => 'grey']
        ]
    ],
    [
        'name' => 'Toy hare',
        'price' => 40,
        'img' => './scr/images/toy4.jpg',
        'colors' => [
            ['visual' => 'grey', 'logical' => 'grey']
        ]
    ],
    [
        'name' => 'T-shirt',
        'price' => 15,
        'img' => './scr/images/red-tshirt.jpg',
        'colors' => [
            ['visual' => 'red', 'logical' => 'red'],
            ['visual' => 'blue', 'logical' => 'blue'],
            ['visual' => 'black', 'logical' => 'black'],
            ['visual' => 'grey', 'logical' => 'grey'],
            ['visual' => 'DarkRed', 'logical' => 'red'],
            ['visual' => 'LightBlue', 'logical' => 'blue']
        ],
        'colorImages' => [
            'red' => './scr/images/red-tshirt.jpg',
            'blue' => './scr/images/blue-tshirt.jpg',
            'black' => './scr/images/black-tshirt.jpg',
            'grey' => './scr/images/grey-tshirt.jpg'
        ]
    ]
];

// Receive filters from POST
$category = $_POST['category'] ?? '';
$color = $_POST['color'] ?? '';
$maxPrice = $_POST['maxPrice'] ?? 1000;
$searchQuery = strtolower($_POST['searchQuery'] ?? '');

// Filter logic
$filteredProducts = array_filter($products, function ($product) use ($category, $color, $maxPrice, $searchQuery) {
    $matchCategory = !$category || stripos($product['name'], $category) !== false;
    $matchColor = true;

    if ($color) {
        $matchColor = false;
        foreach ($product['colors'] as $col) {
            if ($col['logical'] === $color) {
                $matchColor = true;
                break;
            }
        }
    }

    $matchPrice = $product['price'] <= $maxPrice;
    $matchSearch = !$searchQuery || stripos($product['name'], $searchQuery) !== false;

    return $matchCategory && $matchColor && $matchPrice && $matchSearch;
});

// Return filtered products only
echo json_encode(array_values($filteredProducts));

// Close DB connection
$conn->close();
?>
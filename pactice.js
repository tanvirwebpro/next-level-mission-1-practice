const rawApiData = [
  { "id": 1, "productName": "Wireless Mouse", "category": "Electronics", "price": 19.99, "rating": 4.5, "stock": 120 },
  { "id": 2, "productName": "Bluetooth Headphones", "category": "Electronics", "price": 49.99, "rating": 4.7, "stock": 75 },
  { "id": 3, "productName": "Mechanical Keyboard", "category": "Electronics", "price": 89.99, "rating": 4.6, "stock": 45 },
  { "id": 4, "productName": "Gaming Chair", "category": "Furniture", "price": 149.99, "rating": 4.3, "stock": 30 },
  { "id": 5, "productName": "Smart Watch", "category": "Wearables", "price": 99.99, "rating": 4.4, "stock": 80 },
  { "id": 6, "productName": "Running Shoes", "category": "Sportswear", "price": 59.99, "rating": 4.2, "stock": 110 },
  { "id": 7, "productName": "Yoga Mat", "category": "Fitness", "price": 24.99, "rating": 4.1, "stock": 150 },
  { "id": 8, "productName": "LED Monitor", "category": "Electronics", "price": 129.99, "rating": 4.5, "stock": 60 },
  { "id": 9, "productName": "Desk Lamp", "category": "Home Decor", "price": 29.99, "rating": 4.3, "stock": 90 },
  { "id": 10, "productName": "Electric Kettle", "category": "Appliances", "price": 39.99, "rating": 4.4, "stock": 100 },
  { "id": 11, "productName": "Backpack", "category": "Accessories", "price": 44.99, "rating": 4.6, "stock": 85 },
  { "id": 12, "productName": "Sunglasses", "category": "Accessories", "price": 19.49, "rating": 4.2, "stock": 140 },
  { "id": 13, "productName": "Coffee Maker", "category": "Appliances", "price": 79.99, "rating": 4.5, "stock": 55 },
  { "id": 14, "productName": "Water Bottle", "category": "Fitness", "price": 14.99, "rating": 4.1, "stock": 200 },
  { "id": 15, "productName": "Desk Organizer", "category": "Office Supplies", "price": 22.49, "rating": 4.0, "stock": 130 },
  { "id": 16, "productName": "Wireless Charger", "category": "Electronics", "price": 27.99, "rating": 4.3, "stock": 95 },
  { "id": 17, "productName": "Hoodie", "category": "Clothing", "price": 34.99, "rating": 4.4, "stock": 115 },
  { "id": 18, "productName": "Action Camera", "category": "Electronics", "price": 199.99, "rating": 4.6, "stock": 25 },
  { "id": 19, "productName": "Wireless Earbuds", "category": "Electronics", "price": 59.99, "rating": 4.7, "stock": 70 },
  { "id": 20, "productName": "Office Chair", "category": "Furniture", "price": 129.49, "rating": 4.3, "stock": 40 }
];

// Output => [{ name : " Phone "} ,{name : " Smart Watch"}]

// Process 
// Filter => Electronics
// Sort by => Rating 
// Slice => first 3 (top 3)
// Map => transform object shape to {name : "Name"}

const topElectronicsProducts = rawApiData
.filter((item)=> item.category === "Electronics")
.sort((a,b)=> b.rating - a.rating).slice(0 ,3)
.map(item => ({name :item.productName})) 

console.log(topElectronicsProducts)
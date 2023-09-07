import { MongoClient } from "mongodb";

const db =
    // Order
    [
        { "_id": 1, "item": "almonds", "price": 12, "quantity": 2 },
        { "_id": 2, "item": "pecans", "price": 20, "quantity": 1 },
        { "_id": 3, "item": "pecans", "price": 20, "quantity": 3 },
    ];

// Inventory
[
    { "_id": 1, "sku": "almonds", "description": "product 1", "instock": 120 },
    { "_id": 2, "sku": "bread", "description": "product 2", "instock": 80 },
    { "_id": 3, "sku": "cashews", "description": "product 3", "instock": 60 },
    { "_id": 4, "sku": "pecans", "description": "product 4", "instock": 70 },
];

// Users
[
    { "userName": "admin", password: "MindX@2022" },
    { "userName": "alice", password: "MindX@2022" }
]
    ;

const connectToDb = () => {
    const client = new MongoClient("mongodb://localhost:27017");
    {
        const database = client.db("your_db_name");
        db.inventories = database.collection("inventories");
        db.orders = database.collection("orders");
        db.users = database.collection("users");
    };
};

export default connectToDb

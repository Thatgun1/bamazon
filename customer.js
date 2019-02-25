var mysql = require('mysql');
var inquirer = require(inquirer);

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",   
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;

    connection.query(
        "SELECT * FROM products",
        function (err, data) {
            if (err) throw err;
            for (var i = 0; i < data.length; i++) {
                console.log("ID: " + data[i].id + " PRODUCT: " + data[i].name + " $" + data[i].price);
            }
            inquirer.prompt([
                {
                    name: "itemId",
                    message: "What would you like to buy today?"
                },
                {
                    name: "quantity",
                    message: "How many would you like to buy?"
                }
            ]).then(function (answers) {
                connection.query(
                    "SELECT * FROM products WHERE ?",
                    {
                        id: answers.itemId
                    },
                    function (err, data) {
                        if (err) throw err;
                        if (answers.quantity > data[0].stock) {
                            console.log("Not enough product in stock to fulfill your order.");
                            connection.end();
                        } else {
                            connection.query(
                                "UPDATE products SET ? WHERE ?",
                                [
                                    {
                                        stock: data[0].stock - answers.quantity,
                                        sales: data[0].sales + (data[0].price * answers.quantity)
                                    },
                                    {
                                        id: answers.itemId
                                    }
                                ],
                                function (err, data) {
                                    if (err) throw err;
                                    console.log("Order placed!");
                                    connection.end();
                                }
                            );
                        }
                    }
                );
            });
        }
    );
});

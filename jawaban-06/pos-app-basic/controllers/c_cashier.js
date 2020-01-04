const dbConnection = require("../utils/connection");

exports.getIndexPage = (req, res, next) => {
    let dataCashier = [];
    let dataProduct = [];
    dbConnection.query('SELECT * FROM t_cashier', (err, data)=>{
        dataCashier = data;
    });
    dbConnection.query('SELECT * FROM t_product', (err, data)=>{
        dataProduct = data;
    });
    dbConnection.query("SELECT o.*, p.product_name as product, c.cashier_name as cashier FROM t_order o INNER JOIN t_product p ON o.id_product = p.id INNER JOIN t_cashier c ON o.id_cashier = c.id ORDER BY o.date desc", (err, data) => {
        res.render("index", {
            pageTitle: "Ark Food Court",
            dataOrder: data,dataCashier,dataProduct
        });
    });
};

exports.getProductPage = (req, res, next) => {
    dbConnection.query("SELECT * FROM t_product ORDER BY category ASC", (err, data) => {
        res.render("products", {
            pageTitle: "Ark Food Product",
            data: data
        });
    });
};

exports.postAddOrder = (req, res, next) => {
    const id_product = req.body.id_product;
    const id_cashier = req.body.id_cashier;
    const dateObject = new Date().toISOString().slice(0, 10);
    const date = dateObject.toString();
    dbConnection.query(
        "INSERT INTO t_order SET?", {
            id_product,
            id_cashier,
            date
        },
        (err, result) => {
            if (err) throw err;
            res.redirect("/");
        }
    );
};

exports.deleteOrder = (req, res, next) => {
    const id = req.body.id;
    dbConnection.query(
        "DELETE FROM t_order WHERE ?", {
            id
        },
        (err, result) => {
            if (err) throw err;
            res.redirect("/");
            console.log("One order list is deleted!");
        }
    );
};

exports.postAddProductItem = (req, res, next) => {
    const product_name = req.body.product_name;
    const price = req.body.price;
    const category = req.body.category;
    dbConnection.query(
        "INSERT INTO t_product SET?", {
            product_name,
            price,
            category
        },
        (err, result) => {
            if (err) throw err;
            res.redirect("/products");
            console.log("Product Added!");
        }
    );
};

exports.editProductItem = (req, res, next) => {
    const id = req.body.id;
    const product_name = req.body.product_name;
    const price = req.body.price;
    const category = req.body.category;
    const updateQuery = `UPDATE t_product SET product_name=?, price=?, category=? WHERE id=?`;
    const data = [product_name, price, category, id];
    dbConnection.query(updateQuery, data,
        (err, result) => {
            if (err) throw err;
            res.redirect("/products");
            console.log("Product is updated");
        }
    );
};

exports.deleteProductItem = (req, res, next) => {
    const id = req.body.id;
    dbConnection.query(
        "DELETE FROM t_product WHERE ?", {
            id
        },
        (err, result) => {
            if (err) throw err;
            res.redirect("/products");
            console.log("Product item is deleted!");
        }
    );
};
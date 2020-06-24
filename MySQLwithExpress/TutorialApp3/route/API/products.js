const route = require("express").Router();
const Product = require("../../db").Product;
route.get("/", function (req, res) {
  Product.findAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(function (err) {
      console.log(err);
      res
        .status(500)
        .send({ error: "Could Not fetch data from the database....." });
    });
});

route.post("/", function (req, res) {
  // Now before we create a product lets check if it is a valid number or not.
  /* if (isNaN(req.body.price)) {
    console.log('not a number');
    return res.status(403).send({ error: "Price is not a number" });
  } */

  Product.create({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    price: parseFloat(req.body.price),
  })
    .then((response) => {
      res.status(201).send(response);
    })
    .catch(function (err) {
      console.error(err);
      res
        .status(500)
        .send({ eror: "Could not add product please try again later ....." });
    });
});

exports = module.exports = { route };

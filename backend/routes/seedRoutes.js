import express from "express";
import data from "../data.js";
import Product from "../models/productModel.js";

const seedRouter = express.Router()

seedRouter.get('/', async (req, res) => {
    await Product.remove({})
    // console.log(data.products);
    const createdProducts = await Product.insertMany(data.products)
    res.send({ createdProducts })
})

export default seedRouter
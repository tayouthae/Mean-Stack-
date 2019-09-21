const express = require ("express");
const router = express.Router();
const product_controller = require("../controllers/product.controller");
module.exports = router;


router.post("/", product_controller.create);
router.get("/:id", product_controller.details);
router.get("/", product_controller.list);
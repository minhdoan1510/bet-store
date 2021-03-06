import express from "express";
import Category from "../models/categoryModel.js";
import asyncHandler from "express-async-handler";
import {
  createCategory,
  updateCategory,
} from "../controller/categoryController.js";

const router = express.Router();

// @desc Fetch all categories
// @route GET /api/categories
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const parent =
      req.query.parent === ""
        ? { parent: req.query.parent }
        : req.query.parent
        ? {
            parent: {
              $regex: req.query.parent,
              $options: "i",
            },
          }
        : {};
    const path = req.query.path ? { path: req.query.path } : {};
    const categories = await Category.find({ ...parent, ...path });
    res.status(200).json(categories);
  })
);

// @desc Fetch single category
// @route GET /api/categories/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (category) {
      res.json(category);
    } else {
      res.status(404);
      throw new Error("Category not found");
    }
  })
);

router.post("/", createCategory);
router.route("/:id").put(updateCategory);

export default router;

const { Router } = require("express");
const { check, validationResult } = require("express-validator");

const { authMiddleware } = require("../../middlewares/authMiddleware");
const Category = require("../../models/Category");
const User = require("../../models/User");
const { validateHrs } = require("./helpers");
const categoryRouter = new Router();

categoryRouter.post(
  "/",
  authMiddleware,
  [check("categoryName", "Category name is required").isString()],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errorsArr: errors.array().map(({ msg }) => msg),
        });
      }

      const {
        user: { userId },
      } = req;
      const { categoryName, urgentHrsLessThan, mediumHrsLessThan } = req.body;

      validateHrs(res, urgentHrsLessThan, mediumHrsLessThan);

      const existingCategory = await Category.findOne({
        owner: userId,
        categoryName,
      });
      if (existingCategory) {
        return res.status(400).json({
          errorsArr: [`Category '${categoryName}' is already in use`],
        });
      }

      const newCategory = new Category({
        categoryName,
        urgentHrsLessThan,
        mediumHrsLessThan,
        owner: userId,
      });

      const category = await newCategory.save();
      res.status(201).json(category);
    } catch (e) {
      res.status(500).json({ errorsArr: [`${e}...Try again`] });
    }
  }
);

categoryRouter.patch(
  "/:id",
  authMiddleware,
  [check("categoryName", "Category name is required").isString()],
  async (req, res) => {
    try {
      const {
        params: { id: _id },
        body,
      } = req;
      const updateFields = Object.keys(body);

      validateHrs(res, body.urgentHrsLessThan, body.mediumHrsLessThan);

      const category = await Category.findOne({ _id });
      if (!category)
        return res
          .status(404)
          .json({ errorsArr: "Category with this id was not found" });

      updateFields.forEach(
        (fieldName) => (category[fieldName] = body[fieldName])
      );

      await category.save();

      res.json(category);
    } catch (e) {
      res.status(500).json({ errorsArr: [`${e}...Try again`] });
    }
  }
);

categoryRouter.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const {
      params: { id: _id },
    } = req;

    const category = await Category.findOneAndDelete({ _id });
    if (!category)
      return res
        .status(404)
        .json({ errorsArr: "Category with this id was not found" });

    res.json(category);
  } catch (e) {
    res.status(500).json({ errorsArr: [`${e}...Try again`] });
  }
});

categoryRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const {
      params: { id: _id },
      user: { userId },
    } = req;

    const categories = await Category.find({ owner: userId });

    res.json(categories);
  } catch (e) {
    res.status(500).json({ errorsArr: [`${e}...Try again`] });
  }
});

module.exports = { categoryRouter };

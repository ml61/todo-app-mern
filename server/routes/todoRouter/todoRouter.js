const { Router } = require("express");
const { check, validationResult } = require("express-validator");

const { authMiddleware } = require("../../middlewares/authMiddleware");
const Todo = require("../../models/Todo");

const todoRouter = new Router();

todoRouter.post(
  "/",
  authMiddleware,
  [
    check("taskName", "Task name is required").exists(),
    check("taskDescription", "Task description is required").exists(),
    check("categoryId", "Category is required").exists(),
    check("deadline", "Deadline is required").exists(),
  ],
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
      const { taskName, taskDescription, categoryId, deadline } = req.body;

      const existingTodo = await Todo.findOne({
        owner: userId,
        taskName,
      });
      if (existingTodo) {
        return res.status(400).json({
          errorsArr: [`Task '${taskName}' is already created`],
        });
      }

      const newTodo = new Todo({
        taskName,
        taskDescription,
        categoryId,
        deadline,
        owner: userId,
      });

      const todo = await newTodo.save();
      res.status(201).json(todo);
    } catch (e) {
      res.status(500).json({ errorsArr: [`${e}...Try again`] });
    }
  }
);

todoRouter.patch(
  "/:id",
  authMiddleware,
  [
    check("taskName", "Task name is required").exists(),
    check("taskDescription", "Task description is required").exists(),
    check("categoryId", "Category is required").exists(),
    check("deadline", "Deadline is required").exists(),
    check("isCompleted", "isCompleted is required").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errorsArr: errors.array().map(({ msg }) => msg),
        });
      }

      const {
        params: { id: _id },
        body,
      } = req;
      const updateFields = Object.keys(body);

      const todo = await Todo.findOne({ _id });
      if (!todo)
        return res
          .status(404)
          .json({ errorsArr: "Todo with this id was not found" });

      updateFields.forEach((fieldName) => (todo[fieldName] = body[fieldName]));

      await todo.save();

      res.json(todo);
    } catch (e) {
      res.status(500).json({ errorsArr: [`${e}...Try again`] });
    }
  }
);

todoRouter.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const {
      params: { id: _id },
    } = req;

    const todo = await Todo.findOneAndDelete({ _id });
    if (!todo)
      return res
        .status(404)
        .json({ errorsArr: "Todo with this id was not found" });

    res.json(todo);
  } catch (e) {
    res.status(500).json({ errorsArr: [`${e}...Try again`] });
  }
});

todoRouter.get("/", authMiddleware, async (req, res) => {
  try {
    const {
      user: { userId },
    } = req;

    const todos = await Todo.find({ owner: userId });

    res.json(todos);
  } catch (e) {
    res.status(500).json({ errorsArr: [`${e}...Try again`] });
  }
});

module.exports = { todoRouter };

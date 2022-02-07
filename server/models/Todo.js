const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  category: { type: String, required: true },
  deadline: { type: Date, required: true },
  isCompleted: { type: Boolean, default: false },
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Todo", schema);

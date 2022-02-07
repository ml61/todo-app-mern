const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
  categoryName: { type: String, required: true },
  urgentHrsLessThan: { type: Number, required: true },
  mediumHrsLessThan: { type: Number, required: true },
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Category", schema);

const { Schema, Types, model } = require("mongoose");

const schema = new Schema({
  categoryName: { type: String, required: true },
  urgentHrsLessThan: { type: Number, default: 24 },
  mediumHrsLessThan: { type: Number, default: 48 },
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Category", schema);

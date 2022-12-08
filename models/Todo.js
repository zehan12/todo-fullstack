const { Schema, model } = require("mongoose");

module.exports = model("Todo", new Schema(
    { title: String },
    { isCompleted: { type: Boolean, default: false } },
    { timestamps: true }
));
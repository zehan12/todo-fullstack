const { Schema, model } = require("mongoose");

module.exports = model("Todo", new Schema(
    {
        title: String,
        description: { type: String },
        isCompleted: { type: Boolean, default: false },
        author: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
));
const { Schema, model } = require("mongoose");

module.exports = model("Todo", new Schema(
    {
        title: { type: String, minlength: 1, required: true },
        description: { type: String },
        completedAt: { type: Schema.Types.Date, default: null },
        isCompleted: { type: Boolean, default: false },
        author: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
));
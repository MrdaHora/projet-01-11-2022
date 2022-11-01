const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const TodoListSchema = new Schema({
        título: { type: String, required: true },
        descrição: { type: String, required: true }
    },
    opts
);

TodoListSchema.virtual("url").get(function () {
    return `/todo_list/${this._id}`;
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("todo_list", TodoListSchema, "todo_list");


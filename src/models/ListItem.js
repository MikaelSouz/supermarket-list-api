const mongoose = require("mongoose");

const ListItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  checked: Boolean,
});

const ListItem = mongoose.model("list-item", ListItemSchema);

module.exports = ListItem;

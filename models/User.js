const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  notes: {
    type: Array,
    default: []
  }
});

module.exports = mongoose.model("User", userSchema);

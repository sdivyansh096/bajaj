const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },

  arrayEven: {
    type: [Number],
    required: true,
  },

  arrayOdd: {
    type: [Number],
    required: true,
  },
  arrayUpperCase: {
    type: [Character]
  },
})

module.exports = mongoose.model("user", Schema);
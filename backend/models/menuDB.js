const mongoose = require('mongoose');

const menuItemsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true }
}

);

//mongodb+srv://liza:<tQj9_cc-qwC!qq8@cluster0-eb692.mongodb.net/test?retryWrites=true

module.exports = mongoose.model('MenuItem', menuItemsSchema);




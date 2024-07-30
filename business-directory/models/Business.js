const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  subcategory: String,
  tags: [String],
  logo: String,
  hoursOfOperation: String,
  address: String,
  phoneNumber: String,
  email: String,
  website: String,
  photos: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;

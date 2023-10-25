//define data type
const mongoose = require("mongoose");
//sets documentation for cars in database
let CarSchema = mongoose.Schema({
	model: {
		type: Number,
		required: true,
	},
	registration: {
		type: String,
		required: true,
	},
	owner: {
		type: String,
		required: true,
	},
	make: {
		type: String,
		required: true,
	},
});
// module.exports makes the model available outside of your module
// The first argument for mongoose.model should be the name of the
// document in your MongoDB collection (remember that spelling
// is important, this includes casing)
module.exports = mongoose.model("cars", CarSchema);

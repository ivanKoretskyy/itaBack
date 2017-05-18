let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema ({
	name: {type: String},
	role: {type: String},
  email: {type: String},
  password: {type: String},
  image: {type: String},
	status: {
		type: [{
			type: String,
			enum: ['active', 'not_active', 'blocked']
		}]
	}
});

module.exports = mongoose.model('User', UserSchema);
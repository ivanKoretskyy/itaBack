let mongoose = require('mongoose');
let User = mongoose.model('User');

exports.getAllUsers = (req, res) => {
	let query = {offset:0, limit: 100};
	if (req.query.offset) query.offset = +req.query.offset;
	if (req.query.limit) query.limit = +req.query.limit;
	
	User.find({}, null, {skip: query.offset, limit: query.limit}, (err, userList) => {
		if (err) {
			res.send(err);
		}
		else {
			User.count((e,count) => {
				res.json({data: userList,count: count})
			})
		}
	});
};

exports.createUser = (req, res) => {
	let newUser = new User(req.body);
	newUser.save((err, user) => {
		if (err) {
			res.send(err);
		}
		res.json(user);
	});
};

exports.getUser = (req, res) => {
	User.findById(req.params.userId, (err, user) => {
		if(err) {
			res.send(err); 
	  }
		res.json(user);
	});
};

exports.updateUser = (req, res) => {
	User.findOneAndUpdate(req.params.userId,req.body, {new: true}, (err, user) => {
		if (err) {
			res.send(err);
		}
		res.json(user);
	});
};

exports.removeUser = (req, res) => {
  User.remove({
    _id: req.params.userId
  }, (err, task) => {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
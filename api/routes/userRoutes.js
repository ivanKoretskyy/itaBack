module.exports = (app) => {
	let userController = require('../controllers/userController');

	app.route('/users')
		.get(userController.getAllUsers)
		.post(userController.createUser);
	app.route('/users/:userId')
		.get(userController.getUser)
		.put(userController.updateUser)
		.delete(userController.removeUser)
};
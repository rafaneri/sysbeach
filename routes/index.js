var keystone = require('keystone');
var restful = require('restful-keystone')(keystone);
var authenticate = require('./../models/oauth/authenticate');

// Setup Route Bindings
exports = module.exports = function (app) {

	require('./../models/oauth')(app);

	app.all('/api*', [keystone.middleware.api, keystone.middleware.cors]);

	app.all('/api/categories', authenticate());
	app.all('/api/products', authenticate());
	app.all('/api/orders', authenticate());
	app.all('/api/orderitens', authenticate());
	app.all('/api/tables', authenticate());

	restful.expose({
		Category: {
			methods: ["list"]
		},
		Product: {
			methods: ["list", "retrieve"]
		},
		Order: {
			methods: ["list", "retrieve", "create"]
		},
		OrderItem: {
			methods: ["list", "retrieve", "create"]
		},
		Table: {
			methods: ["list", "retrieve", "update"],
			edit: ["status"]
		}
	}).start();

};

/**
 * Created by Manjesh on 14-05-2016.
 */

var oauthServer = require('oauth2-server');
var Request = oauthServer.Request;
var Response = oauthServer.Response;
var db = require('./mongodb');

var oauth = require('./oauth')

module.exports = function (app) {
	app.all('/oauth/token', function (req, res, next) {
		if (req.is('json'))
			req.headers['content-type'] = 'application/x-www-form-urlencoded';

		var request = new Request(req);
		var response = new Response(res);

		oauth
			.token(request, response)
			.then(function (token) {
				return res.json(token)
			}).catch(function (err) {
				return res.status(500).json(err)
			})
	});
}

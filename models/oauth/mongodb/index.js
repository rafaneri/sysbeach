/**
 * Created by Manjesh on 14-05-2016.
 */

var db ={};
db.OAuthAccessToken = require('./OAuthAccessToken')
db.OAuthAuthorizationCode = require('./OAuthAuthorizationCode')
db.OAuthClient = require('./OAuthClient')
db.OAuthRefreshToken = require('./OAuthRefreshToken')
db.OAuthScope = require('./OAuthScope')
db.User = require('./../../User').model

module.exports = db;
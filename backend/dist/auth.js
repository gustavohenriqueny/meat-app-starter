"use strict";
exports.__esModule = true;
var users_1 = require("./users");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbuser = users_1.users[user.email];
        resp.json({ name: dbuser.name, email: dbuser.email });
    }
    else {
        resp.status(403).json({ message: 'Dados inválidos.' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbuser = users_1.users[user.email];
    return dbuser !== undefined && dbuser.matches(user);
}

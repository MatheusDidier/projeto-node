
var connMySql = function () {

    var mysql = require("mysql");


    var configCnx = {
        host: "localhost",
        user: "root",
        password: "1234",
        database: "portal_noticias"
    };


    return mysql.createConnection(configCnx);
}

module.exports = function () {
    return connMySql;
}
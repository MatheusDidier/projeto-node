module.exports = function (app) {

    this.getNoticias = function (cnx, callback) {

        cnx.query("select * from noticias", callback);
    }

    this.getNoticia = function (cnx, callback) {
        cnx.query("select * from noticias where id_noticia = 2", callback);
    }

    return this;
}
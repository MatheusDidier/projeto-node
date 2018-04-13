function NoticiasDAO(connection) {
    this._connection = connection;
}   


NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query("select * from noticias", callback);
}

NoticiasDAO.prototype.incluirNoticia = function (noticia, callback) {
    this._connection.query("insert into noticias set ? ", noticia, callback);
}

NoticiasDAO.prototype.getNoticia = function (id ,callback) {
    console.log("FOI ISSO  Q RETORNOU PRA MIM", id);
    this._connection.query(`select * from noticias where id_noticia = ${id}`, callback);
}

NoticiasDAO.prototype.getNoticiasByQtd = function(qtd, callback){
    this._connection.query(`select * from noticias order by data_criacao desc limit ${qtd}`, callback);
}


module.exports = function(){
    return NoticiasDAO;
}
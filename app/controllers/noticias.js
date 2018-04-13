module.exports.noticia = function (application, req, res) {
    var cnx = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(cnx);

    NoticiasDAO.getNoticia(req.query.id_noticia, (error, result) => {
        console.log(result);
        res.render("noticias/noticia", { noticia: result.shift() });
    })
}

module.exports.noticias = function (application, req, res) {
    var cnx = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(cnx);

    NoticiasDAO.getNoticias((erro, result) => {
        res.render('noticias/noticias', { noticias: result });
    })
}
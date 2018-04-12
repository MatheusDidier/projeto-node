

module.exports = function (application) {
    application.get("/noticia", (request, response) => {

        var cnx = application.config.dbConnection();
        var noticia = application.app.models.noticiasModel;
        noticia.getNoticia(cnx, (error, result) => {
            response.render("noticias/noticia", { noticia: result.shift() });
        })

    })
}
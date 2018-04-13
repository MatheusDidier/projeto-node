

module.exports = function (application) {
    application.get("/noticia", (request, response) => {

        var cnx = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(cnx);
        NoticiasDAO.getNoticia((error, result) => {
            console.log(result);
            response.render("noticias/noticia", { noticia: result.shift() });
        })

    })
}
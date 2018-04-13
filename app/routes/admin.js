module.exports = function (application) {




    application.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia');
    });

    application.post("/noticias/salvar", (req, res) => {

        var cnx = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(cnx);

        var noticia = req.body;
        NoticiasDAO.incluirNoticia(noticia, (error, result) => {
            console.log(error, result);
            res.redirect("/noticias");

        })


    })
}
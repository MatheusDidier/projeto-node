module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render('admin/form_add_noticia', { erros: false, noticia: {} });

}

module.exports.incluir_noticia = function (application, req, res) {
    var cnx = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(cnx);

    var noticia = req.body;
    req.assert("titulo", "Titulo é obrigatorio!").notEmpty();
    req.assert("resumo", "Resumo é obrigatorio!").notEmpty();
    req.assert("resumo", "Resumo deve conter entre 10 a 100  letras").len(10, 100);
    req.assert("autor", "Autor não pode ser vazio!").notEmpty();
    req.assert("data_criacao", "Data da criação é obrigatoria").notEmpty();
    req.assert("noticia", "A noticia é obrigatória!").notEmpty();

    var erros = req.validationErrors();
    console.log(erros);
    if (erros) {
        console.log("NOTICIAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", noticia);
        res.render("admin/form_add_noticia", { erros: erros, noticia: noticia });
        return;
    }

    NoticiasDAO.incluirNoticia(noticia, (error, result) => {

        console.log(error, result);
        res.redirect("/noticias");
    })
}
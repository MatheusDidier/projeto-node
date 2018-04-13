module.exports.home = function (application, req, res) {

    var cnx = application.config.dbConnection();
    var noticiasDAO = new application.app.models.NoticiasDAO(cnx);
    var quantidadeNoticiasTrazer = 5;
    var noticias;
    new Promise((resolve) => {
        noticiasDAO.getNoticiasByQtd(quantidadeNoticiasTrazer, (error, res) => {

            resolve(res);

        })
    }).then((noticias) => {
        res.render('home/index', { noticias: noticias });
    })





}

// var cnx = require("../../config/dbConnection")();

module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        var cnx = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(cnx, (erro, result) => {
            res.render('noticias/noticias', { noticias: result });
        })



    });
}

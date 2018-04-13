
// var cnx = require("../../config/dbConnection")();

module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        var cnx = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(cnx);

        NoticiasDAO.getNoticias((erro, result) => {
            res.render('noticias/noticias', { noticias: result });
        })



    });
}

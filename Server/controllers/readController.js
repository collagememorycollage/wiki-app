const {NowReading} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class ReadController {
    async create(req, res) {
        const {id_user, id_article} = req.body
        const readArticle = await NowReading.create({ id_user, id_article })
        return res.json(readArticle)
    }

//не может иметь одинаковый id пользователя и id статьи более чем один раз

    async getAll(req, res) {
        const readArticles = await NowReading.findAll();
        return res.json(readArticles);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const readArticle = await NowReading.findAll(
            {
                where: {id_article: id},
            }
        );
        return res.json(readArticle);     
    }
}

module.exports = new ReadController()
const {UserFavorite} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class FavoriteController {
    async create(req, res) {
        const {id_user, id_article} = req.body
        const article = await UserFavorite.create({ id_user, id_article })
        return res.json(article)
    }

    async getAll(req, res) {

    }
}

module.exports = new FavoriteController()

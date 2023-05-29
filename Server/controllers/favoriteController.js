const {UserFavorite} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class FavoriteController {
    async create(req, res) {
        const {id_user, id_article} = req.body
        const favoriteArticle = await UserFavorite.create({ id_user, id_article })
        return res.json(favoriteArticle)
    }

    async getAll(req, res) {
        const favorites = await UserFavorite.findAll();
        return res.json(favorites);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const favoriteArticle = await UserFavorite.findAll(
            {
                where: {id_user: id},
            }
        );
        return res.json(favoriteArticle);    
    }
}

module.exports = new FavoriteController()

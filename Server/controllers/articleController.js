const {Article} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')
const { model } = require('../db.js')

class ArticleController {
    async create(req, res) {
        const {name_article, readable_count, rating} = req.body
        const article = await Article.create({name_article, readable_count, rating})
        return res.json(article)
    }

    async getAll(req, res) {
        const articles = await Article.findAll();
        return res.json(articles);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const article = await Article.findOne(
            {
                where: {id_article: id},
            }
        );
        return res.json(article);    
    }

}

module.exports = new ArticleController()

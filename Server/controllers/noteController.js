const {Notes} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class NoteController {
    async create(req, res) {
        const {title_note, text_note, date_note, id_user} = req.body
        const favoriteArticle = await Notes.create({ title_note, text_note, date_note, id_user })
        return res.json(favoriteArticle)
    }

    async getAll(req, res) {
        const notes = await Notes.findAll();
        return res.json(notes);
    }

    async getOne(req, res) {
        const {id} = req.params;
        const noteUser = await Notes.findAll(
            {
                where: {id_user: id},
            }
        );
        return res.json(noteUser);    
    }
}

module.exports = new NoteController()

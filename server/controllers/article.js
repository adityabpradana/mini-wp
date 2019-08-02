const Article = require('../models/article')

class ArticleController {
    static create(req, res, next) {
        let { title, content, created_at } = req.body
        let image_path = req.file.gcsUrl
        let author = req.headers.username
        Article.create({ title, content, created_at, image_path, author })
        .then( data => {
            if (req.file && req.file.gcsUrl) {
                res.status(201).json(data)
            } else {
                res.status(500).send('Unable to upload')
            }
        })
        .catch( err => next(err) )
    }
    
    static findAll(req, res, next) {
        Article.find( req.query )
            .then( data => {
                res.status(200).json(data)
            })
            .catch( err => next(err) )
    }

    static findOne(req, res, next) {
        let condition = { _id: req.params.articleId }
        Article.findOne(condition)
            .then( data => {
                res.status(200).json(data)
            })
            .catch( err => next(err) )
    }

    static deleteOne(req, res, next) {
        let condition = { _id: req.params.articleId }
        Article.findOneAndDelete(condition)
            .then( data => {
                res.status(200).json(data)
            })
            .catch( err => next(err) )
    }

    static update(req, res, next) {
        let condition = req.params.articleId
        let { title, content, created_at } = req.body
        let image_path = req.file.gcsUrl || 'link'
        Article.findByIdAndUpdate(condition, { title, content, created_at, image_path, author })
            .then( data => {
                res.status(201).json(data)
            })
            .catch( err => next(err) )
    }

    static replace(req, res, next) {
        let condition = req.params.articleId
        let { title, content, created_at } = req.body
        let image_path = req.file.gcsUrl || 'link'
        Article.findOneAndReplace({_id: condition}, { title, content, created_at, image_path, author })
            .then( data => {
                res.status(201).json(data)
            })
            .catch( err => next(err) )
    }
}

module.exports = ArticleController
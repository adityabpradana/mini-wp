const articleRouter = require('express').Router(),
    articleController = require('../controllers/article'),
    multer = require('multer'),
    gcsMiddlewares = require('../middleware/google-cloud-storage'),
    authentication = require('../middleware/authentication')

let upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5*1024*1024
    }
})
articleRouter.use(authentication)
articleRouter.get('/', articleController.findAll)
articleRouter.get('/:articleId',articleController.findOne)
articleRouter.post('/', upload.single('thumbnail'), gcsMiddlewares.sendUploadToGCS, articleController.create)
articleRouter.delete('/:articleId',articleController.deleteOne)
articleRouter.put('/:articleId', upload.single('thumbnail'), gcsMiddlewares.sendUploadToGCS, articleController.replace)
articleRouter.patch('/:articleId', upload.single('thumbnail'),  gcsMiddlewares.sendUploadToGCS, articleController.update)

module.exports = articleRouter
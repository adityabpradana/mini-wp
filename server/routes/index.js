const indexRouter = require('express').Router(),
    article = require('./article'),
    users = require('./user')

indexRouter.use('/users', users)
indexRouter.use('/articles',article)

module.exports = indexRouter
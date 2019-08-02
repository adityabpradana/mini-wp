const mongoose = require('mongoose')

let articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please input title']
    },
    content: {
        type: String,
        required: [true, 'Please input content']
    },
    created_at: {
        type: Date,
    },
    image_path: {
        type: String
    },
    author: {
        type: String,
    }
})

articleSchema.pre('save', function(next){
    this.created_at = new Date()
    next()
})

module.exports = mongoose.model('Article', articleSchema)
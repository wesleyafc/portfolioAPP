const mongoose = require('mongoose')

const PortfolioSchema = new mongoose.Schema({
    projectName: {
        type: String
    },

    description: {
        type: String,
    },

    imageUrl: {
        type: String
    },

    linkGit: {
        type: String
    },

    finished: {
        type: Boolean,
        default: false
    },

    technologies: [],
    createdAt: {
        type: Date,
        default: Date.now
    }
})
/////////////////////////////////alias       varriable
module.exports = mongoose.model('Portfolio', PortfolioSchema)
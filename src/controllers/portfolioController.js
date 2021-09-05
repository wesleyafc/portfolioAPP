const portfolio = require('../model/Schema')



module.exports.index = async function (request, response) {
    return response.render('../src/views/index')
}

module.exports.renderCreatePage = async function (request, response) {
    response.render('../src/views/new-project')

}

module.exports.create = async function (request, response) {
    try {
        portfolio.create(request.body, function (error, portfolio) {
            console.log(portfolio)
            return response.status(200).json(portfolio)
        })
    } catch (error) {
        return response.status(500).json({ "error": error })
    }
}

module.exports.all = async function (request, response) {
    try {
        const allProjects = await portfolio.find()
        return response.render('../src/views/all-projects', { allProjects: allProjects })
    } catch (error) {
        return response.status(500).json({ "error": error })

    }

}

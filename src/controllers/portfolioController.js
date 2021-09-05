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

module.exports.one = async function (request, response) {
    const _id = request.params.id
    const singleProject = await portfolio.findOne({ _id })

    return response.render('../src/views/one-project', { project: singleProject })
}
//render and load form fields
module.exports.edit = async function (request, response) {

    try {
        const _id = request.params.id
        const singleProject = await portfolio.findOne({ _id })
        return response.render('../src/views/edit-project', { project: singleProject })
    } catch (error) {
        return response.status(500).json({ "error": error })

    }
}

module.exports.saveEdit = async function (request, response) {
    try {
        const _id = request.params.id
        const { projectName, description, imageUrl, linkGit, finished, technologies } = request.body

        const singleProject = await portfolio.findOne({ _id })

        singleProject.projectName = projectName
        singleProject.description = description
        singleProject.imageUrl = imageUrl
        singleProject.linkGit = linkGit
        singleProject.finished = finished
        singleProject.technologies = technologies

        await singleProject.save()
        return response.render('../src/views/one-project', { project: singleProject })


    } catch (error) {
        return response.status(500).json({ "error": error })

    }

}

/**
 *

 */
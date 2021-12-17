const Projects = require("../models/portfolio")


exports.getProjects = (req, res, next) => {
    Projects.find({}).then((projects) => {
        res.send(projects);
    });
};
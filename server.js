const express = require('express');
const app = express();
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 4000);
const path = require('path');
//const axios = require("axios");
const fs = require("fs");
// const dev = app.get('env') !== 'production';
// console.log(dev);
// if (!dev) {
app.disable('x-powered-by');

app.use(express.static(path.resolve(__dirname, 'client/build')));
console.log(PORT);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
});

app.get('/projects', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
});

app.get('/projects/:id', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
});

app.get("/api/test", (req, res) => {
    res.json({"test": "message"});
});

app.get("/api/personalProjects", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'app_db/personal_project_db.json'));
});

app.get('/proxy/projects/:project_name', (req, res) => {
    if (!req.params.project_name) {
        return res.status(400).json({"message": "project name must be set"});
    }

    fs.readFile(path.resolve(__dirname, 'app_db/personal_project_db.json'), (err, jsonString) => {
        try {
            let raw_projects = JSON.parse(jsonString);
            let project = raw_projects.data.find(proj => proj["project-name"] === req.params.project_name);
           
            if (!project) {
                res.status(400).json({"message": "unable to find requested project"})
            } else {
                res.status(200).json(project);
            }
        } catch (err) {
            res.status(400).json({"message": "error in request for project details"});
        }
    })
});

app.get("/api/img/:id", (req, res) => {
    const image_id = req.params.id;
    console.log(`img id: ${image_id}`);
    if (image_id) {
        fs.readFile(path.resolve(__dirname, "app_db/img_db.json"), (err, jsonString) => {
            try {
                const data = JSON.parse(jsonString);
                const image_file_name = data[image_id].file_name;
                console.log(image_file_name);
                res.sendFile(path.resolve(__dirname, 'img', image_id, image_file_name));
            } catch (err) {
                console.log(err);
                res.json({"message": "not image found"});
            }
        })
    } else {
        res.json({"message": "an image id must be sent to get an image"});
    }
});

app.listen(PORT, err => {
    if (err) throw err;

    console.log("Server started");
});
const app = require('express')();
const blogRoutes = require('./blog');

app.use('/blog', blogRoutes)

module.exports = app

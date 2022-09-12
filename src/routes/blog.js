const app = require('express')();
const upload = require('../utils/multer');
const {
	postBlog,
	getAllBlog,
	getOneBlog,
	updateBlog,
	deleteBlog,
} = require('../controllers/blog');
const asyncHandler = require('express-async-handler');

//Post Method
app.post('/post', upload, postBlog);

//Get all Method
app.get('/get', getAllBlog);

//Get by ID Method
app.get('/get/:id', getOneBlog);

//Update by ID Method
app.patch('/update/:id', updateBlog);

//Delete by ID Method
app.delete('/delete/:id', deleteBlog);

module.exports = app;

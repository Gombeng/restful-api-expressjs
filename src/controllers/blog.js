const asyncHandler = require('express-async-handler');
const BlogModel = require('../models/blog');

const postBlog = asyncHandler(async (req, res, next) => {
	const { title, desc } = req.body;
	const image = req.file.path;

	const data = new BlogModel({
		title,
		desc,
		image,
	});

	try {
		await data.save();
		res.status(200).json({
			data,
			message: 'Sukses menambahkan data baru',
		});
	} catch (error) {
		next(error);
	}
});

const getAllBlog = asyncHandler(async (req, res, next) => {
	try {
		const data = await BlogModel.find();
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
});

const getOneBlog = asyncHandler(async (req, res, next) => {
	try {
		const data = await BlogModel.findById(req.params.id);
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
});

const updateBlog = asyncHandler(async (req, res, next) => {
	// const image = req.file.path;
	try {
		const id = req.params.id;
		const updatedData = req.body;
		const options = { new: true };

		const result = await BlogModel.findByIdAndUpdate(id, updatedData, options);

		res.send(result);
	} catch (error) {
		next(error);
	}
});

const deleteBlog = asyncHandler(async (req, res, next) => {
	// res.send('Delete by ID API');

	try {
		const id = req.params.id;
		const data = await BlogModel.findByIdAndDelete(id);
		res.status(200).json({
			message: `Blog with title "${data.title}" has been deleted..`,
		});
	} catch (error) {
		next(error);
	}
});

module.exports = { postBlog, getAllBlog, getOneBlog, updateBlog, deleteBlog };

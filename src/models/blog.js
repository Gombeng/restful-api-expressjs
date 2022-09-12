const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema(
	{
		title: {
			required: true,
			type: String,
		},
		desc: {
			required: true,
			type: String,
		},
		image: {
			required: true,
			type: String,
		},
	},
	{
		timestamps: {
			createdAt: 'createdAt',
			updatedAt: 'updatedAt',
		},
	}
);

module.exports = mongoose.model('blog', BlogSchema);
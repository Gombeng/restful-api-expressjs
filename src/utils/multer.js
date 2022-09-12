const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads')
	},

	filename: function (req, file, cb) {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const fileFilter = (req, file, cb) => {
	const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
	if (allowedFileTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({ storage, fileFilter }).single('image');

module.exports = upload
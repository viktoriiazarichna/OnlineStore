const { filesConstants } = require('../constants');

module.exports = {
    checkFiles: (req, res, next) => {
        try {
            const files = Object.values(req.files);

            const images = [];

            for(let i = 0; i < files.length; i++) {
                const { name, size, mimetype } = files[i];
                

                if(filesConstants.IMAGE_MIMETYPES.includes(mimetype)) {
                    if(size > filesConstants.IMAGE_MAX_SIZE) {
                        throw new Error(`File ${name} is too big`);
                    }
                    images.push(files[i]);
                } else {
                    throw new Error('Wrong file format');
                }
            }

            req.images = images;
            next();
        } catch (e) {
            next(e);
        }

    }
}
const { filesConstants } = require('../constants');
const { ErrorHandler, errorMessages }  = require('../errors');

module.exports = {
    checkFiles: (req, res, next) => {
        try {

            if(req.files) {
                const files = Object.values(req.files);

                const images = [];

                for(let i = 0; i < files.length; i++) {
                    const { name, size, mimetype } = files[i];
                    

                    if(!filesConstants.IMAGE_MIMETYPES.includes(mimetype)) {
                        throw new ErrorHandler(
                            errorMessages.WRONG_FILE_FORMAT.message,
                            errorMessages.WRONG_FILE_FORMAT.code
                          );
                    } 
                    
                    if(size > filesConstants.IMAGE_MAX_SIZE) {
                        throw new ErrorHandler(
                            errorMessages.FILE_IS_TOO_LARGE.message,
                            errorMessages.FILE_IS_TOO_LARGE.code
                          );
                    }
                    images.push(files[i]);  
                }

                req.images = images;
                
            }
            next();
        } catch (e) {
            next(e);
        }

    }
}
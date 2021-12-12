module.exports = {
    checkFiles: (req, res, next) => {
        try {
            const { files } = req;



            console.log(files);
            next();
        } catch (e) {
            next(e);
        }

    }
}
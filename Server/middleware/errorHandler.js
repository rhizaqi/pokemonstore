const errorHandler = async (err, req, res, next) => {
    console.log(err,` <<< error di middlewar `, 11111);
    try {
        switch (err.name) {
            case "SequelizeValidationError":
            case "SequelizeUniqueConstraintError":
                res.status(400).json({
                    message: err.errors[0].message
                })
                break;
            case "NotFound":
                res.status(404).json({
                    message: "Data not found"
                })
                break;
            case "InvalidCredential":
                res.status(404).json({
                    message: "Invalid email/password"
                })
                break;
            case "BadRequest":
                res.status(404).json({
                    message: err.message
                })
                break;
            case "InvalidToken":
                res.status(404).json({
                    message: err.message
                })
                break;
            case "Unauthorized":
                res.status(404).json({
                    message: err.message
                })
                break;

        }
    } catch (error) {
        console.log(err, `<< error mentok??`);
    }
}

module.exports = errorHandler
const AppError = require('./error-handler');
const { StatusCodes } = require('http-status-codes');

class ValidationError extends AppError {
    constructor(error) {
        let errorName = error.name;
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        let errorExplaination= "User Entered Invalid Input Format";
        let statusCode= StatusCodes.BAD_REQUEST;


        super(
           errorName,
            errorMessages,
            errorExplaination,
            statusCode
        );
    }
}

module.exports = ValidationError;

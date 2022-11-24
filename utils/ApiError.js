class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode
        this.status = `${statusCode}`.startsWith('4') ? 'Failed':'Error'
    }
}

module.exports = ApiError;
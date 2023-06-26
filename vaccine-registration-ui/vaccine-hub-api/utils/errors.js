class ExpressError extends Error {
    constuctor(message, status) {
        super()
        this.message = message
        this.status = status
    }
}

class NotFoundError extends ExpressError {
    constructor(message = "Not Found") {
        super(message, 404)
    }
}

module.exports = {
    NotFoundError
}
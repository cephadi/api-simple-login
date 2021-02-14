const middleware = {
    async checkToken(req, res, next) {
        const headerToken = req.header('Authorization')
        if (!headerToken) {
            res.json({ status: false, message: 'Token is not provided!' })
        }
        
        if (headerToken != 'token12345') {
            res.json({ status: false, message: 'Token is not valid!' })
        }
        next()
    }
}

module.exports = middleware
module.exports = function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin' : 'http://localhost:3000',
        'Access-Control-Allow-headers' : 'content-type',
        'Access-Control-Allow-Credentials' : 'true',
    });
    next();
}
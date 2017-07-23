var mongoClient = require('mongodb').MongoClient;
var mongoId = require('mongodb').ObjectID;

var state = {
    db: null,
}

module.exports.instance = () => {
    return state.db
}

module.exports.connect = (url, done) => {
    if (state.db) return done()

    mongoClient.connect(url, function (err, db) {
        if (err) return done(err)
        state.db = db
        done()
    })
}

module.exports.getId = (id) => {
    return new mongoId(id)
}

module.exports.close = function (done) {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null
            state.mode = null
            done(err)
        })
    }
}
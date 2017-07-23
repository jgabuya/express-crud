const db = require('./db');

module.exports.getId = (id) => {
    return db.getId(id);
}

module.exports.find = (query, callback) => {
    db.instance().collection('contacts').find(query).toArray(callback)    
}

module.exports.save = (data, callback) => {
    db.instance().collection('contacts').save(data, callback)
}

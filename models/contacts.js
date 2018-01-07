const db = require('../imports/db');

module.exports.getId = (id) => {
    return db.getId(id);
}

module.exports.find = (query, callback) => {
    return db.instance().collection('contacts').find(query).toArray(callback);
}

module.exports.save = (data, callback) => {
    return db.instance().collection('contacts').save(data, callback);
}

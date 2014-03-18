exports.list = function(db, cb) {
    db.all('SELECT * FROM team', cb);
}

exports.alive = function(db, cb) {
    db.all('SELECT * FROM team WHERE cactive=1 OR mactive=1', cb);
}

exports.kills = function(db, cb) {
    db.all('SELECT * FROM kills', cb);
}

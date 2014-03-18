var api = require('./api.js');

exports.index = function(db) {
    return function(req, res){
        api.alive(db, function(err, teams) {
            api.kills(db, function(err, kills) {
                res.render('index', {teams: teams, kills: kills.splice(0, 5)});
            });
        });
    }
}

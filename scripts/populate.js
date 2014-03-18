var sqlite3 = require('sqlite3').verbose()
  , db = new sqlite3.Database('ass.db')
  , fs = require('fs');

var stmt = db.prepare("INSERT INTO team VALUES (?, ?)")
fs.readFile('teams.txt', {encoding: 'utf8'}, function(err, data) {
    if(err) throw err;
    var lines = data.split('\n');
    lines.forEach(function(line) {
        var team = line.split(/[-–]/).map(function(e) {
            return e.trim();
        });
        stmt.run(team[0], team[1]);
    });
    stmt.finalize();

});

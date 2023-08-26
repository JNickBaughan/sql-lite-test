const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }else{
    onsole.log('Connected to the chinook database.');
  }
  c
});

db.run(`CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT)`);










// class ProjectRepository {
//     constructor(dao) {
//       this.dao = dao
//     }
  
//     createTable() {
//       const sql = `
//       CREATE TABLE IF NOT EXISTS projects (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT)`
//       return this.dao.run(sql)
//     }
//   }

// db.serialize(() => {
//   db.each(`SELECT PlaylistId as id,
//                   Name as name
//            FROM playlists`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row.id + "\t" + row.name);
//   });
// });

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
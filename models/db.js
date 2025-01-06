import sqlite3 from "sqlite3";

class Database {
  constructor() {
    this.db = new sqlite3.Database("my.db", sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error("Errore di connessione al database:", err.message);
      } else {
        console.log("Connessione al database riuscita.");
      }
    });
  }

  // Chiude la connessione al database
  close() {
    this.db.close((err) => {
      if (err) {
        console.error("Errore nel chiudere la connessione:", err.message);
      } else {
        console.log("Connessione al database chiusa.");
      }
    });
  }

  // Aggiungi un nuovo utente
  addNewUser(newUser, hashedPassword) {
    const sql = `INSERT INTO users (username, password, email, role) VALUES(?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
      this.db.run(
        sql,
        [newUser.username, hashedPassword, newUser.email, newUser.role],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID });
          }
        }
      );
    });
  }

  // Aggiungi un nuovo invitato
  addNewInvitato(invitato) {
    const sql = `INSERT INTO invitati (presence, first_name, last_name, phone, family_number, intolerances, written_intolerances, needs, has_companion, companion_first_name, companion_last_name, shuttle, extra) 
                     VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;

    return new Promise((resolve, reject) => {
      this.db.run(
        sql,
        [
          invitato.presence,
          invitato.first_name,
          invitato.last_name,
          invitato.phone,
          invitato.family_number,
          invitato.intolerances,
          invitato.written_intolerances,
          invitato.needs,
          invitato.has_companion,
          invitato.companion_first_name,
          invitato.companion_last_name,
          invitato.shuttle,
          invitato.extra,
        ],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID });
          }
        }
      );
    });
  }

  // Aggiungi una canzone alla playlist
  addNewSongToPlaylist(song) {
    const sql = `INSERT INTO playlist (song_name, author, username) VALUES(?, ?, ?)`;

    return new Promise((resolve, reject) => {
      this.db.run(
        sql,
        [song.song_name, song.author, song.username],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID });
          }
        }
      );
    });
  }

  // Aggiungi un'immagine
  addNewImage(image) {
    const sql = `INSERT INTO images (file_path, category, username) VALUES(?, ?, ?)`;

    return new Promise((resolve, reject) => {
      this.db.run(
        sql,
        [image.file_path, image.category, image.username],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID });
          }
        }
      );
    });
  }

  // Ottieni gli utenti
  getUsers() {
    const sql = `SELECT * FROM users`;

    return new Promise((resolve, reject) => {
      this.db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Ottieni gli invitati
  getInvitati() {
    const sql = `SELECT * FROM guests`;

    return new Promise((resolve, reject) => {
      this.db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Ottieni la playlist
  getPlaylist() {
    const sql = `SELECT * FROM playlist`;

    return new Promise((resolve, reject) => {
      this.db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  // Elimina una canzone dalla playlist per ID
  deleteSongFromPlaylist(songId) {
    const sql = `DELETE FROM playlist WHERE id = ?`;

    return new Promise((resolve, reject) => {
      this.db.run(sql, [songId], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ deletedId: songId, changes: this.changes });
        }
      });
    });
  }

  // Ottieni le immagini
  getImages() {
    const sql = `SELECT * FROM images`;

    return new Promise((resolve, reject) => {
      this.db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

// Creo un'unica istanza del database
const dbInstance = new Database();
export default dbInstance;

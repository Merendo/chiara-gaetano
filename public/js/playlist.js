console.log("Script playlist.js caricato correttamente");

// Funzione per eliminare una canzone dal database
function deleteSong(songId) {
  fetch(`/Playlist/delete-song/${songId}`, {
    // Usa l'ID dinamico nella URL
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Canzone eliminata:", data);
      loadPlaylist(); // Ricarica la tabella dopo l'eliminazione
    })
    .catch((error) =>
      console.error("Errore nell'eliminazione della canzone:", error)
    );
}

document.addEventListener("DOMContentLoaded", function () {
  loadPlaylist(); // Carica la playlist al caricamento della pagina
});

//funzione per caricare la playlist dal database
function loadPlaylist() {
  fetch("Playlist/dati") // Chiama la route di Node.js
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("playlistTable");
      table.innerHTML = ""; // Pulisce la tabella prima di riempirla

      data.forEach((song) => {
        let row = table.insertRow();
        row.innerHTML = `
                  <td>${song.song_name}</td>
                  <td>${song.author}</td>
                  <td>${song.username}</td>
                  <td><button class='btn custom-btn btn-sm' data-id='${song.id}'>Elimina</button></td>
              `;

        // Associa l'ID della canzone al pulsante Elimina
        let deleteButton = row.querySelector(".custom-btn");
        deleteButton.addEventListener("click", function () {
          let songId = this.getAttribute("data-id"); // Recupera l'ID della canzone
          deleteSong(songId); // Chiama la funzione per eliminare la canzone
        });
      });
    })
    .catch((error) =>
      console.error("Errore nel caricamento della playlist:", error)
    );
}

// Funzione per inviare una nuova canzone al database
document
  .getElementById("playlistForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita il ricaricamento della pagina

    let songName = document.getElementById("songName").value;
    let author = document.getElementById("author").value;

    fetch("/playlist/add-song", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song_name: songName,
        author: author,
        username: "provvisorio",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        loadPlaylist(); // Ricarica la playlist dopo l'aggiunta
        document.getElementById("playlistForm").reset(); // Svuota i campi del form
      })
      .catch((error) =>
        console.error("Errore nell'aggiunta della canzone:", error)
      );
  });

var playlist = {Radiohead: "Karma Police"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

updatePlaylist(playlist, 'Slayer', 'Raining Blood');

delete playlist.artistName;
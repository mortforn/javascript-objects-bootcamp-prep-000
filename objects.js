var playlist = {Radiohead: "Karma Police"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

updatePlaylist(playlist, 'Slayer', 'Raining Blood');

function removeFromPlaylist (playlist, artistName) {
  delete playlist.Slayer;
  return playlist;
}

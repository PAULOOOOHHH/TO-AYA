document.getElementById('reveal-btn').addEventListener('click', () => {
  document.getElementById('surprise').classList.remove('hidden');
  document.getElementById('reveal-btn').disabled = true;

  const audio = new Audio('https://www.bensound.com/bensound-music/bensound-sweet.mp3');
  audio.play();
});

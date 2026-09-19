const enter = document.querySelector('#enter');
const music = document.querySelector('#music');
// Play only the audio from the supplied wedding song.
const songSource = 'assets/wedding-song.mp4';
const audio = new Audio();
audio.preload = 'auto';
if (songSource) audio.src = songSource;
function updateMusic() {
 const playing = !audio.paused;
 music.setAttribute('aria-pressed', String(playing));
 const label = playing ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى';
 music.setAttribute('aria-label', label);
 music.querySelector('span').textContent = label;
}
audio.addEventListener('play', updateMusic);
audio.addEventListener('pause', updateMusic);
audio.addEventListener('ended', updateMusic);
enter.addEventListener('click', () => {
 document.querySelector('#welcome').hidden = true;
 document.querySelector('#invitation').hidden = false;
 music.hidden = !songSource;
 window.scrollTo(0, 0);
 if (matchMedia('(max-width:600px)').matches) document.querySelector('#names').focus({preventScroll:true});
 else if (songSource) music.focus({preventScroll:true});
 if (songSource) { audio.currentTime = 0; audio.play().catch(updateMusic); }
});
music.addEventListener('click', () => {
 if (!songSource) return;
 if (audio.paused) audio.play().catch(updateMusic);
 else audio.pause();
});


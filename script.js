document.addEventListener('DOMContentLoaded', function() {
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: "#FFFFFF",
        progressColor: '#c21524',
        barWidth: 2,
        height: 100,
    });

    wavesurfer.load('podcast.mp3');

    var playPauseBtn = document.getElementById('playPauseBtn');

    wavesurfer.on('ready', function() {
        playPauseBtn.disabled = false;
    });

    playPauseBtn.addEventListener('click', function() {
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            wavesurfer.play();
            playPauseBtn.textContent = 'Pause';
        }
    });

    wavesurfer.on('play', function() {
        playPauseBtn.textContent = 'Pause';
    });

    wavesurfer.on('pause', function() {
        playPauseBtn.textContent = 'Play';
    });

    wavesurfer.on('finish', function() {
        playPauseBtn.textContent = 'Play';
    });
});
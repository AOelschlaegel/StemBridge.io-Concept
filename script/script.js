var barWidth = 6;

var wavesurferWaitforme = WaveSurfer.create({
 // Use the id or class-name of the element you created, as a selector
 container: '#waveformWaitforme',
 // The color can be either a simple CSS color or a Canvas gradient
 waveColor: 'grey',
 progressColor: 'hsla(120, 94%, 67%, 0.5)',
 cursorColor: '#fff',
 // This parameter makes the waveform look like SoundCloud's player
 barWidth: barWidth
});

var wavesurferBeat = WaveSurfer.create({
 // Use the id or class-name of the element you created, as a selector
 container: '#waveformBeat',
 // The color can be either a simple CSS color or a Canvas gradient
 waveColor: 'grey',
 progressColor: 'hsla(120, 94%, 67%, 0.5)',
 cursorColor: '#fff',
 // This parameter makes the waveform look like SoundCloud's player
 barWidth: barWidth
});

wavesurferWaitforme.load('audio/WaitForMe.mp3');
wavesurferBeat.load('audio/EgoBeat(94).mp3');

var modal = document.querySelector(".modal");
var trigger = document.querySelector("#trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

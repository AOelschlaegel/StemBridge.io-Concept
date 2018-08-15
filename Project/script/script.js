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
var trigger2 = document.querySelector("#trigger2");
var trigger3 = document.querySelector("#trigger3");
var trigger4 = document.querySelector("#trigger4");
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
trigger2.addEventListener("click", toggleModal);
trigger3.addEventListener("click", toggleModal);
trigger4.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

function newPage(num) {
var url=new Array();
url[0]="http://www.codingforums.com";
url[1]="http://www.codingforums.com.";
url[2]="http://www.w3schools.com";
url[3]="http://www.webmasterworld.com";
window.location=url[num];``
}

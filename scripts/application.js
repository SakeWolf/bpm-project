$(document).ready(function () {
  var metronome;
  var metronomeOn = false;

  var sound = document.createElement("audio");
  sound.setAttribute("src", "http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Instruments/Drums/Claves/idg_Clav-intermed-1390/idg_Clav-intermed-1390_hifi.mp3");

  $("#play").click(function () {
    var bpm = $("#bpm").val();
    if (!metronomeOn && bpm > 0) {
      var interval = 60 / bpm;
      sound.play();
      metronome = setInterval(function() {
        sound.play();
      }, Math.floor(1000 * interval));
      metronomeOn = true;
    }
  });

  $("#stop").click(function () {
    clearInterval(metronome);
    metronomeOn = false;
  });
});

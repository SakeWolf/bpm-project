$(document).ready(function () {
  var metronome;
  var metronomeOn = false;
  var currentBpm = 0;

  var sound = document.createElement("audio");
  sound.setAttribute("src", "http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Instruments/Drums/Claves/idg_Clav-intermed-1390/idg_Clav-intermed-1390_hifi.mp3");

  $("#play").click(function () {
    var bpm = $("#bpm").val();
    metronomeOn = resetIfNewBpm(bpm);
    if (!metronomeOn && bpm > 0) {
      metronome = startMetronome(bpm, sound);
      metronomeOn = true;
    }
  });

  $("#stop").click(function () {
    clearInterval(metronome);
    metronomeOn = false;
  });

  function startMetronome(bpm, sound) {
    var interval = 60 / bpm;
    sound.play();
    return setInterval(function() {
      sound.play();
    }, Math.floor(1000 * interval));
  }

  function resetIfNewBpm (newBpm) {
    if (newBpm != currentBpm) {
      clearInterval(metronome);
      return false;
    } else {
      return true;
    }
  }
});

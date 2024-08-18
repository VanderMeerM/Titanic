var dot_time = 0.050;
var dash_time = dot_time*3;
var inter_elem_time = dot_time;
var space_time = dot_time*7;

    var osc = new Tone.Oscillator({
        "frequency": 550,
        "volume" : 0
      }).toDestination();

      var addMorseText = function(morse_text) {
  document.getElementById('morse').innerHTML += morse_text;
}

      var tone_dit = function(time, char) {
  osc.start(time);
  osc.stop(time+dot_time);
 // addMorseText('• ', char);
}
var tone_dah = function(time, char) {
  osc.start(time);
  osc.stop(time+dash_time);
 // addMorseText('▬ ', char);
}

var tone_word_space = function(time) {
  addMorseText('<br />');
}

var tone_letter_space = function(time) {
  addMorseText(' ');
}

var tone_fin = function(time) {
  running = false;
  document.querySelector('#play').disabled = false;
}

var tone_addMsgText = function(time, char) {
  addMsgText(char);
}

function playCQD() {
    // C
      tone_dah(Tone.now())
      setTimeout(() => { tone_dit(Tone.now())}, 200);
      setTimeout(() => { tone_dah(Tone.now())}, 400);
      setTimeout(() => { tone_dit(Tone.now())}, 600);
      setTimeout(() => {}, 1000);
      // Q 
      setTimeout(() => { tone_dah(Tone.now())}, 1200);
      setTimeout(() => { tone_dah(Tone.now())}, 1400);
      setTimeout(() => { tone_dit(Tone.now())}, 1600);
      setTimeout(() => { tone_dah(Tone.now())}, 1800);
      setTimeout(() => {}, 2200);
      // D
      setTimeout(() => { tone_dah(Tone.now())}, 2400);
      setTimeout(() => { tone_dit(Tone.now())}, 2600);
      setTimeout(() => { tone_dit(Tone.now())}, 2800);

   /*
     let cqd = new Tone.Part(function(time, obj) {
       
       obj.func(time);
    
   

  }, 
 array).start();
 
  // Start sequence
  Tone.Transport.start();

  console.log(cqd)

  */
 }

 function playSeeYa() {

    // TOT
    tone_dah(Tone.now())
    setTimeout(() => {}, 400);
    setTimeout(() => { tone_dah(Tone.now())}, 600);
    setTimeout(() => { tone_dah(Tone.now())}, 800);
    setTimeout(() => { tone_dah(Tone.now())}, 1000);
    setTimeout(() => {}, 1400);
    setTimeout(() => { tone_dah(Tone.now())}, 1600);
    setTimeout(() => {}, 2000);

    // DAN
    setTimeout(() => { tone_dah(Tone.now())}, 2200);
    setTimeout(() => { tone_dit(Tone.now())}, 2400);
    setTimeout(() => { tone_dit(Tone.now())}, 2600);
    setTimeout(() => {}, 3000);
    setTimeout(() => { tone_dit(Tone.now())}, 3200);
    setTimeout(() => { tone_dah(Tone.now())}, 3400);
    setTimeout(() => {}, 3800);
    setTimeout(() => { tone_dah(Tone.now())}, 4000);
    setTimeout(() => { tone_dit(Tone.now())}, 4200);
 }
 
/*
    document.getElementById('btn-cqd').addEventListener('click', () => {
      playCQD();
      
    })

    document.getElementById('btn-cy').addEventListener('click', () => { 
        playSeeYa();
    })
    */


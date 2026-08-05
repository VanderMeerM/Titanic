
const time = document.getElementById('time');
const signal = document.getElementById('signal');
const vesselComplete = document.querySelector('.container_vessel');
const vesselPieces = document.querySelector('.container_vessel_pieces');
const vesselFront = document.getElementById('vessel-front');
const vesselRear = document.getElementById('vessel-rear');
const funnel1 = document.getElementById('funnel1');
const funnel2 = document.getElementById('funnel2');
const funnel3 = document.getElementById('funnel3');
const funnel4 = document.getElementById('funnel4');

const icebergWarning = document.getElementById('iceberg');
const collission = document.getElementById('collission');
const heartSong = document.getElementById('heart');

const wifi1 = document.getElementById('wifi1');
const wifi2 = document.getElementById('wifi2');
const wifi3 = document.getElementById('wifi3');

const timeStartPlayCQD = 13000;
const timeStartPlayEnd = timeStartPlayCQD + 21000;


// Geluid voor morsecode..

var dot_time = 0.050;
var dash_time = dot_time*3;
var inter_elem_time = dot_time;
var space_time = dot_time*7;

var osc = new Tone.Oscillator({
      "frequency": 550,
      "volume" : 0
}).toDestination();


// Korte toon
  var tone_dit = function(time, char) {
  osc.start(time);
  osc.stop(time+dot_time);
}

// Lange toon 
var tone_dah = function(time, char) {
  osc.start(time);
  osc.stop(time+dash_time);
}


vesselComplete.addEventListener('click', () => { moveVessel() });


function showLifeBoats(pos_left, num) {

    for (let i = 0; i < num; i++) {
        const divBoatLeft = document.createElement('div');
        const divBoatRight = document.createElement('div');
        const random = Math.random() * 400;
        divBoatLeft.setAttribute('id', 'lifeboat_left');
        divBoatRight.setAttribute('id', 'lifeboat_right');
        divBoatLeft.style.visibility = 'visible';
        divBoatRight.style.visibility = 'visible';
        divBoatLeft.style.left = `${pos_left + random}px`;
        divBoatRight.style.left = `${pos_left + random + 12}px`;
        document.querySelector('.lifeboat_container').appendChild(divBoatLeft);
        document.querySelector('.lifeboat_container').appendChild(divBoatRight);
    }
}

function showPeopleInSea(position_left, position_top, num) {

    for (let i = 0; i < num; i++) {
        const humanInSea = document.createElement('div');
        const randomLeft = Math.random() * 50;
        const randomTop = Math.random() * 30;
        humanInSea.setAttribute('id', 'people_in_sea');
        humanInSea.style.visibility = 'visible';
        humanInSea.style.left = `${position_left + randomLeft}px`;
        humanInSea.style.top = `${position_top + randomTop}px`;
        document.querySelector('.people_container').appendChild(humanInSea);
    }
}

function hideWifiSignals() {
 wifi1.style.visibility = 'hidden';
 wifi2.style.visibility = 'hidden';
 wifi3.style.visibility = 'hidden';    
}

let blinkSignal = 
setInterval(()=> { signal.style.display = 'none'; }, 1000)
setInterval(()=> { signal.style.display = 'block'; }, 2000)


function moveVessel() {

    signal.textContent = '';

    clearInterval(blinkSignal);

    vesselComplete.style.animation = `moving_vessel_complete 13s ease-out`; 

    icebergWarning.play();

    time.textContent = 'April 14, 1912 23:40';

    let duration = 200; 
    let multiplier = 1;

    setTimeout(() => {
        collission.play();
    }, 4000);


    // Toon CQD met wifi-signalen.. 

     // C 
    setTimeout(() => { 
            time.textContent = 'April 15, 1912 0:00';
            vesselComplete.style.visibility = 'hidden';
            vesselPieces.style.visibility = 'visible';
            signal.innerHTML = '<span class="signal_text">C</span>';
            document.getElementById('wifi1').style.visibility = 'visible';
            tone_dah(Tone.now()) }, timeStartPlayCQD);

    setTimeout(() => { 
        tone_dit(Tone.now());
        document.getElementById('wifi2').style.visibility = 'visible';
    }, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { 
        tone_dah(Tone.now()); 
        document.getElementById('wifi3').style.visibility = 'visible';
    }, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

      setTimeout(() => { 
       hideWifiSignals();
    }, timeStartPlayCQD + (multiplier * duration));

    multiplier++

     // Q 
     setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">Q</span>';
        document.getElementById('wifi1').style.visibility = 'visible';
        tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { 
        document.getElementById('wifi2').style.visibility = 'visible';
        tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { tone_dit(Tone.now());
    document.getElementById('wifi3').style.visibility = 'visible';
    }, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { tone_dah(Tone.now())
       hideWifiSignals(); 
    }, timeStartPlayCQD + (multiplier * duration));

    multiplier = 11;

     // D 
     setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">D</span>';
        document.getElementById('wifi1').style.visibility = 'visible';    
        vesselPieces.style.animation = "sinking_vessel_complete 7s ease-in";
        tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

      multiplier++

     setTimeout(() => { tone_dit(Tone.now());
        document.getElementById('wifi2').style.visibility = 'visible';
    }, timeStartPlayCQD + (multiplier * duration));

    multiplier++

     setTimeout(() => { tone_dit(Tone.now())
     document.getElementById('wifi3').style.visibility = 'visible';
     }, timeStartPlayCQD + (multiplier * duration));

     multiplier++

     setTimeout(() => { 
        hideWifiSignals();
    }, timeStartPlayCQD + (multiplier * duration));

   multiplier++;

    setTimeout(() => {

     while (signal.firstChild) {
     signal.removeChild(signal.firstChild);
    }
    }, timeStartPlayCQD + (multiplier * duration)); 


 setTimeout(() => {
        time.textContent = 'April 15, 1912 0:30';
        heartSong.play();
        showLifeBoats(900, 10);
    }, 16000);

     setTimeout(() => {
        showLifeBoats(900, 10);
    }, 17000);

    setTimeout(() => {
       funnel4.style.animation = "falloff_funnels_front 7s";
    }, 18000);

        setTimeout(() => {
       funnel3.style.animation = "falloff_funnels_front 7s";
    }, 18500);
 
    setTimeout(() => {
        time.textContent = 'April 15, 1912 1:30';
        showLifeBoats(900, 8);
    }, 19000);

 
    setTimeout(() => {
        funnel1.style.animation = "falloff_funnels_back 5s";
        funnel2.style.animation = "falloff_funnels_back 5s";
        vesselFront.style.visibility = 'hidden';
        vesselRear.style.animation = "moving_sinking_rear 7s";
        funnel1.style.visibility = "hidden";
        funnel2.style.visibility = "hidden";
        funnel3.style.visibility = "hidden";
        funnel4.style.visibility = "hidden";

        showLifeBoats(900, 6)

    }, 22000);

    setTimeout(() => {
        time.textContent = 'April 15, 1912 2:00';

    }, 23500);

    setTimeout(() => {
        time.textContent = 'April 15, 1912 2:20';

    }, 26500);

    setTimeout(() => {
        time.textContent =  
        `1500 passagiers vonden de dood... `;
        time.style.fontFamily = 'Arial';
        vesselRear.style.visibility = 'hidden';
        showPeopleInSea(970, -350, 100);

    }, 28500);

    setTimeout(() => {
        time.textContent = 
        `300 kwamen in het ijskoude water terecht...`;
        time.style.fontFamily = 'Arial';

    }, 30000);

    setTimeout(() => {
        time.textContent = 'In april 2024 zette MusicalMakers dit verhaal op de planken.';
        time.style.fontFamily = 'Arial';

        const newContainer = document.createElement('div');
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');

        newImg.src = './img/titanic_musical.png';
        newImg.style.height = `auto`; 
        newImg.style.width = `80%`; 


        newDiv.setAttribute('class', 'container_mm');
        newDiv.appendChild(newImg);
        document.body.appendChild(newDiv);

        const divReload = document.createElement('div');
        const imgReload = document.createElement('img');
        imgReload.src = './img/reload.png';
        divReload.setAttribute('id', 'overlay_reload');
        divReload.appendChild(imgReload);
        document.querySelector('.container_reload').appendChild(divReload);

        imgReload.addEventListener('click', () => {
            location.reload();
        })

    }, 32000);

  
    // EINDE 

    // E (.) 
    setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">E</span>';
        tone_dah(Tone.now()) }, timeStartPlayEnd);
    setTimeout(() => {}, timeStartPlayEnd + 400);

    // I (..)
    setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">I</span>';    
        tone_dah(Tone.now());}, timeStartPlayEnd + 600);
    setTimeout(() => { 
        tone_dah(Tone.now())}, timeStartPlayEnd + 800);
    setTimeout(() => {}, timeStartPlayEnd + 1200);

    // N ( -.)
    setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">N</span>';
            setTimeout(() => { 
                tone_dit(Tone.now())}, timeStartPlayEnd + 1600);
                tone_dah(Tone.now())}, timeStartPlayEnd + 2000);
            setTimeout(() => {}, timeStartPlayEnd + 2400);

    // D (-..)
    setTimeout(() => { 
      signal.innerHTML += '<span class="signal_text">D</span>';    
    setTimeout(() => { 
        tone_dit(Tone.now())}, timeStartPlayEnd + 2600);
        tone_dah(Tone.now())}, timeStartPlayEnd + 3000); 
     setTimeout(() => { 
      tone_dah(Tone.now())}, timeStartPlayEnd + 3200);     
  
    setTimeout(() => {}, timeStartPlayEnd + 3400);

    // E (.) 
    setTimeout(() => { 
       signal.innerHTML += '<span class="signal_text">E</span>';
        tone_dah(Tone.now())}, timeStartPlayEnd + 3600);

    setTimeout(() => {}, timeStartPlayEnd + 4000);  
    setTimeout(() => {
        document.getElementById('overlay_reload').style.display = 'block';
    }, timeStartPlayEnd + 4200);  
         
}
 




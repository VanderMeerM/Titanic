
const time = document.getElementById('time');
const signal = document.getElementById('signal');
const vesselComplete = document.querySelector('.container_vessel');
const vesselPieces = document.querySelector('.container_vessel_pieces');
const vesselFront = document.getElementById('vessel-front');
const vesselRear = document.getElementById('vessel-rear');
const icebergWarning = document.getElementById('iceberg');
const collission = document.getElementById('collission');
const heartSong = document.getElementById('heart');
const funnel1 = document.getElementById('funnel1');
const funnel2 = document.getElementById('funnel2');
const funnel3 = document.getElementById('funnel3');
const funnel4 = document.getElementById('funnel4');

const timeStartPlayCQD = 13000;
const timeStartPlayEnd = timeStartPlayCQD + 21000;


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


function moveVessel() {

    signal.textContent = '';

    vesselComplete.style.animation = `moving_vessel_complete 13s ease-out`; 

    icebergWarning.play();

    time.textContent = 'April 14, 1912 23:40';

    let duration = 200; 
    let multiplier = 1;

    setTimeout(() => {
        collission.play();
    }, 2500);


    // Toon CQD met wifi-signalen.. 

     // C 
    setTimeout(() => { 
            time.textContent = 'April 15, 1912 0:00';
            vesselComplete.style.visibility = 'hidden';
            vesselPieces.style.visibility = 'visible';
            signal.innerHTML = '<span class="signal_text">C</span>';
            document.getElementById('wifi1').style.visibility = 'visible';
            tone_dah(Tone.now()) }, timeStartPlayCQD);

    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { tone_dah(Tone.now()); 
        document.getElementById('wifi3').style.visibility = 'visible';
    }, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    multiplier = 6;

     // Q 
     setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">Q</span>';
        document.getElementById('wifi2').style.visibility = 'visible';
        tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    multiplier++

    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    setTimeout(() => { tone_dit(Tone.now());
        document.getElementById('wifi1').style.visibility = 'hidden';
        document.getElementById('wifi2').style.visibility = 'hidden';
        document.getElementById('wifi3').style.visibility = 'hidden';    
    }, timeStartPlayCQD + (multiplier * duration));

    multiplier = 9;

    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

    multiplier = 11;

    setTimeout(() => {
        document.getElementById('wifi1').style.visibility = 'visible';
        }, timeStartPlayCQD + (multiplier * duration));
     
        multiplier++
     // D 
     setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">D</span>';
        document.getElementById('wifi3').style.visibility = 'visible';    
        vesselPieces.style.animation = "sinking_vessel_complete 7s ease-in";
        tone_dah(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

      multiplier++

     setTimeout(() => { tone_dit(Tone.now());
        document.getElementById('wifi2').style.visibility = 'visible';
    }, timeStartPlayCQD + (multiplier * duration));

     setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayCQD + (multiplier * duration));

     multiplier++

     setTimeout(() => { 
        document.getElementById('wifi1').style.visibility = 'hidden';
        document.getElementById('wifi2').style.visibility = 'hidden';
        document.getElementById('wifi3').style.visibility = 'hidden';
    }, timeStartPlayCQD + (multiplier * duration));

   multiplier++;

    setTimeout(() => {

     while (signal.firstChild) {
     signal.removeChild(signal.firstChild);
    }
    }, timeStartPlayCQD + (multiplier * duration)); 


 setTimeout(() => {
        time.textContent = 'April 15, 1912 0:30';
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
        heartSong.play();
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
    setTimeout(() => { 
       // document.querySelector('.stars').style.zIndex = "100";
        signal.innerHTML += '<span class="signal_text">E</span>';
        tone_dah(Tone.now()) }, timeStartPlayEnd);

    setTimeout(() => {}, timeStartPlayEnd + 400);

    setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">I</span>';
    
    tone_dah(Tone.now());}, timeStartPlayEnd + 600);
    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayEnd + 800);
    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayEnd + 1000);
    setTimeout(() => {}, timeStartPlayEnd + 1400);

    setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">N</span>';
        tone_dah(Tone.now())}, timeStartPlayEnd + 1600);

    setTimeout(() => {}, timeStartPlayEnd + 2000);

    setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">D</span>';
    
    tone_dah(Tone.now())}, timeStartPlayEnd + 2200);
    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayEnd + 2400);
    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayEnd + 2600);
    setTimeout(() => {}, timeStartPlayEnd + 3000);

    setTimeout(() => { 
        signal.innerHTML += '<span class="signal_text">E</span>';

    tone_dit(Tone.now())}, timeStartPlayEnd + 3200);
    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayEnd + 3400);
    setTimeout(() => {}, timeStartPlayEnd + 3800);  
    setTimeout(() => {
        document.getElementById('overlay_reload').style.display = 'block';
    }, timeStartPlayEnd + 4000);  
         
}
 





const time = document.getElementById('time');
<<<<<<< HEAD
=======
const vesselComplete = document.querySelector('.container_vessel');
const vesselPieces = document.querySelector('.container_vessel_pieces');
>>>>>>> 5175e3f (new files)
const vesselFront = document.getElementById('vessel-front');
const vesselRear = document.getElementById('vessel-rear');
const icebergWarning = document.getElementById('iceberg');
const collission = document.getElementById('collission');
const heartSong = document.getElementById('heart');
const wreck = document.getElementById('wreck');
const funnel1 = document.getElementById('funnel1');
const funnel2 = document.getElementById('funnel2');
const funnel3 = document.getElementById('funnel3');
const funnel4 = document.getElementById('funnel4');

const premiere = new Date(2024,3,10).getTime();
const today = new Date().getTime();

let restdays; 
const timeStartPlaySeeYa = 31000;
const timeStartPlayCQD = 10000;


<<<<<<< HEAD

=======
/*
>>>>>>> 5175e3f (new files)

if (Math.ceil((premiere-today)/86400000) < 0) {
    restdays = '';
} 
else if (Math.ceil((premiere-today)/86400000) == 1) {
<<<<<<< HEAD
    restdays = 'Nog 1 dag tot de première...';
}

else {
    restdays = `Nog ${Math.ceil((premiere-today)/86400000)} dagen tot de première...`;
=======
    restdays = 'Nog 1 dag tot de premiÃ¨re...';
}

else {
    restdays = `Nog ${Math.ceil((premiere-today)/86400000)} dagen tot de premiÃ¨re...`;
>>>>>>> 5175e3f (new files)
}

checkScreenwidth();


function checkScreenwidth() {


    if (window.outerWidth <= 1350 || screen.width <= 1350) {
        document.body.style.overflow = 'hidden';
        document.body.style.filter = 'blur(2px)';
        document.body.style.maxWidth = screen.width;
        document.querySelector('.arrow').style.visibility = 'hidden';
        document.getElementById('yelarr').style.visibility = 'hidden';

        let quest = confirm(`To play this application a minimum screen width of 1351px is required. 
        Would you like to watch a demo?`);
        if(quest) {
            window.location = 'https://marcelvandermeer.nl/Portfolio/Titanic/pics/demo.mp4';
        }          
        
    }

    else {
        vesselFront
            .addEventListener('click', () => { moveVessel() });

        vesselRear
            .addEventListener('click', () => { moveVessel() });

    }

}

<<<<<<< HEAD
=======
*/

vesselComplete.addEventListener('click', () => { moveVessel() });

//vesselRear.addEventListener('click', () => { moveVessel() });

>>>>>>> 5175e3f (new files)

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
        document.getElementById('lifeboat_container').appendChild(divBoatLeft);
        document.getElementById('lifeboat_container').appendChild(divBoatRight);
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
        document.getElementById('people').appendChild(humanInSea);
    }
}


function moveVessel() {

<<<<<<< HEAD
    document.querySelector('.arrow').style.visibility = 'hidden';
    document.querySelector('#yelarr').style.visibility = 'hidden';

    vesselFront.style.animation = "moving_sinking_front 20s";

    vesselRear.style.animation = "moving_sinking_rear 20s";

    icebergWarning.play();

    time.textContent = 'April 14, 1912 23:40';

=======
   // document.querySelector('.arrow').style.visibility = 'hidden';
  //  document.querySelector('#yelarr').style.visibility = 'hidden';

    vesselComplete.style.animation = `moving_vessel_complete 9s ease-out`; 

   // vesselRear.style.animation = "moving_sinking_rear 20s";

  //  icebergWarning.play();

    time.textContent = 'April 14, 1912 23:40';

    /*
>>>>>>> 5175e3f (new files)
    setTimeout(() => {
        collission.play();
    }, 2500);


     // C 
    setTimeout(() => { 
            time.innerHTML += '<br> <span style="color:orange; font-size:35px;">C</span>';
            document.getElementById('wifi1').style.visibility = 'visible';

    tone_dah(Tone.now()) }, timeStartPlayCQD);
    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayCQD + 200);
    setTimeout(() => { tone_dah(Tone.now()); 
        document.getElementById('wifi2').style.visibility = 'visible';
    }, timeStartPlayCQD + 400);
    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayCQD + 600);
    setTimeout(() => {}, timeStartPlayCQD + 1000);

     // Q 
     setTimeout(() => { 
        time.innerHTML += '<span style="color:orange; font-size:35px;">Q</span>';
        document.getElementById('wifi3').style.visibility = 'visible';
    
    tone_dah(Tone.now())}, timeStartPlayCQD + 1200);
    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayCQD + 1400);
    setTimeout(() => { tone_dit(Tone.now());
        document.getElementById('wifi1').style.visibility = 'hidden';
        document.getElementById('wifi2').style.visibility = 'hidden';
        document.getElementById('wifi3').style.visibility = 'hidden';
    
    }, timeStartPlayCQD + 1600);
    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlayCQD + 1800);
    setTimeout(() => {
        document.getElementById('wifi1').style.visibility = 'visible';

    }, timeStartPlayCQD + 2200);
     
     // D 
     setTimeout(() => { 
        time.innerHTML += '<span style="color:orange; font-size:35px;">D</span>';
        document.getElementById('wifi2').style.visibility = 'visible';
    
     tone_dah(Tone.now())}, timeStartPlayCQD + 2400);
     setTimeout(() => { tone_dit(Tone.now());
        document.getElementById('wifi3').style.visibility = 'visible';
    }, timeStartPlayCQD + 2600);
     setTimeout(() => { tone_dit(Tone.now())}, timeStartPlayCQD + 2800);
     setTimeout(() => { 
        document.getElementById('wifi1').style.visibility = 'hidden';
        document.getElementById('wifi2').style.visibility = 'hidden';
        document.getElementById('wifi3').style.visibility = 'hidden';
    }, timeStartPlayCQD + 3000);

<<<<<<< HEAD
   
    setTimeout(() => {
        vesselFront.style.zIndex = 3;
    }, 12500);

    setTimeout(() => {
=======
   */

    setTimeout(() => {
     vesselComplete.style.visibility = 'hidden';
     vesselPieces.style.visibility = 'visible';

       // vesselFront.style.zIndex = 3;
    }, 8900); 


 setTimeout(() => {
        time.textContent = 'April 15, 1912 0:30';
        vesselPieces.style.animation = "sinking_vessel_complete 5s ease-in";
        funnel4.style.animation = "falloff_funnels_front 7s";
        showLifeBoats(900, 10);
    }, 11000);

    /*
    setTimeout(() => {
>>>>>>> 5175e3f (new files)
        time.textContent = 'April 15, 1912 0:30';
        funnel4.style.animation = "falloff_funnels_front 7s";
        showLifeBoats(900, 10);
    }, 13000);
<<<<<<< HEAD

    setTimeout(() => {
        funnel3.style.animation = "falloff_funnels_front 6s";
        showLifeBoats(900, 8);
        heartSong.play();
    }, 14000);
=======
*/
    setTimeout(() => {
        vesselFront.style.animation = "moving_sinking_front 5s";
        vesselRear.style.animation = "moving_sinking_rear 5s";
        funnel3.style.animation = "falloff_funnels_front 6s";
        showLifeBoats(900, 8);
       // heartSong.play();
    }, 16000);
>>>>>>> 5175e3f (new files)

    setTimeout(() => {
        time.textContent = 'April 15, 1912 1:30';
        funnel3.style.visibility = "hidden";
        funnel4.style.visibility = "hidden";

        funnel1.style.animation = "falloff_funnels_back 5s";
        funnel2.style.animation = "falloff_funnels_back 5s";
        showLifeBoats(900, 6)

<<<<<<< HEAD
    }, 15000);
=======
    }, 20000);
>>>>>>> 5175e3f (new files)


    setTimeout(() => {
        vesselFront.style.visibility = 'hidden';

    }, 16000);


    setTimeout(() => {
        time.textContent = 'April 15, 1912 2:00';

    }, 17000);

    setTimeout(() => {
        time.textContent = 'April 15, 1912 2:20';
        vesselRear.style.visibility = 'hidden';
        showPeopleInSea(970, 400, 100);

    }, 19500);

    setTimeout(() => {
        time.innerHTML =  //April 15, 1912 2:20 <br>
        `1500 passagiers vonden de dood... <br>`;
         time.style.fontFamily = 'Arial';

    }, 22500);

    setTimeout(() => {
        time.innerHTML = //April 15, 1912 2:20 <br>
        `300 kwamen in het ijskoude water terecht...`;
        time.style.fontFamily = 'Arial';

    }, 25000);

    setTimeout(() => {
<<<<<<< HEAD
        time.textContent = 'Benieuwd hoe het er vóór de aanvaring aan boord aan toeging?';
=======
        time.textContent = 'In april 2024 zette MusicalMakers dit verhaal op de planken.';
>>>>>>> 5175e3f (new files)
        time.style.fontFamily = 'Arial';

    }, 27500);

<<<<<<< HEAD
=======
    /*
>>>>>>> 5175e3f (new files)
    setTimeout(() => {
        time.innerHTML = 
       // Kom kijken en koop je kaartje op musicalmakers.nl ! <br>
       `${restdays}`;

        time.style.fontFamily = 'Arial';
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');
        newImg.src = './Titanic/pics/Titanic_Musical.jpg';
        const measure_heigth = 0.7 * screen.height;
        const measure_width = 1.77 * measure_heigth;

        newImg.style.height = `${measure_heigth}px`;
        newImg.style.width = `${measure_width}px`;

        newDiv.setAttribute('id', 'overlay');
        newDiv.style.display = 'block';
        newDiv.appendChild(newImg);
        document.body.appendChild(newDiv);

        const divReload = document.createElement('div');
        const imgReload = document.createElement('img');
        imgReload.src = './Titanic/pics/reload.png';
        divReload.setAttribute('id', 'overlay_reload');
        divReload.appendChild(imgReload);
        document.getElementById('overlay').appendChild(divReload);

        imgReload.addEventListener('click', () => {
            location.reload();
        })

    }, 30000);

<<<<<<< HEAD
=======
   
>>>>>>> 5175e3f (new files)
    // TOT 
    setTimeout(() => { 
        document.querySelector('.stars').style.zIndex = "100";
        time.innerHTML += '<br> <span style="color:orange; font-size:35px;">T</span>';
        tone_dah(Tone.now()) }, timeStartPlaySeeYa);

    setTimeout(() => {}, timeStartPlaySeeYa + 400);

    setTimeout(() => { 
        time.innerHTML += '<span style="color:orange; font-size:35px;">O</span>';
    
    tone_dah(Tone.now());}, timeStartPlaySeeYa + 600);
    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlaySeeYa + 800);
    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlaySeeYa + 1000);
    setTimeout(() => {}, timeStartPlaySeeYa + 1400);

    setTimeout(() => { 
        time.innerHTML += '<span style="color:orange; font-size:35px;">T</span>';
        tone_dah(Tone.now())}, timeStartPlaySeeYa + 1600);

    setTimeout(() => {}, timeStartPlaySeeYa + 2000);

    // DAN
    setTimeout(() => { 
        time.innerHTML += '<span style="color:orange; font-size:35px;"> D</span>';
    
    tone_dah(Tone.now())}, timeStartPlaySeeYa + 2200);
    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlaySeeYa + 2400);
    setTimeout(() => { tone_dit(Tone.now())}, timeStartPlaySeeYa + 2600);

    setTimeout(() => {}, timeStartPlaySeeYa + 3000);

    setTimeout(() => { 
        time.innerHTML += '<span style="color:orange; font-size:35px;">A</span>';

    tone_dit(Tone.now())}, timeStartPlaySeeYa + 3200);
    setTimeout(() => { tone_dah(Tone.now())}, timeStartPlaySeeYa + 3400);

    setTimeout(() => {}, timeStartPlaySeeYa + 3800);

    setTimeout(() => { 
        time.innerHTML += '<span style="color:orange; font-size:35px;">N !!</span>';
    tone_dah(Tone.now())}, timeStartPlaySeeYa + 4000);

    setTimeout(() => { 
        tone_dit(Tone.now())}, timeStartPlaySeeYa + 4200);
 
<<<<<<< HEAD
}


=======
         */
}
 
>>>>>>> 5175e3f (new files)




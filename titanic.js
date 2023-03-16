
const time = document.getElementById('time');
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

checkScreenwidth();


function checkScreenwidth() {

    if (window.outerWidth <= 1350 || screen.width <= 1350) {
        document.body.style.overflow = 'hidden';
        document.body.style.filter = 'blur(2px)';
        document.body.style.maxWidth = screen.width;
        document.querySelector('.arrow').style.visibility = 'hidden';
        document.getElementById('yelarr').style.visibility = 'hidden';

        alert(
            'To run this animation a minimum screen width of 1351px is required.'
        );
    }

    else {
        vesselFront
            .addEventListener('click', moveVessel);

        vesselRear
            .addEventListener('click', moveVessel);

    }

}

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

    document.querySelector('.arrow').style.visibility = 'hidden';
    document.querySelector('#yelarr').style.visibility = 'hidden';

    vesselFront.style.animation = "moving_sinking_front 20s";

    vesselRear.style.animation = "moving_sinking_rear 20s";

    icebergWarning.play();

    time.textContent = 'April 14, 1912 23:40';

    setTimeout(() => {
        collission.play();
    }, 2500);

    setTimeout(() => {
        heartSong.play();
    }, 11000);

    setTimeout(() => {
        vesselFront.style.zIndex = 3;
    }, 12500);

    setTimeout(() => {
        time.textContent = 'April 15, 1912 0:30';
        funnel4.style.animation = "falloff_funnels_front 7s";
        showLifeBoats(900, 10)
    }, 13000);

    setTimeout(() => {
        funnel3.style.animation = "falloff_funnels_front 6s";
        showLifeBoats(900, 8);
    }, 14000);

    setTimeout(() => {
        time.textContent = 'April 15, 1912 1:30';
        funnel3.style.visibility = "hidden";
        funnel4.style.visibility = "hidden";

        funnel1.style.animation = "falloff_funnels_back 5s";
        funnel2.style.animation = "falloff_funnels_back 5s";
        showLifeBoats(900, 6)

    }, 15000);


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
        time.innerHTML = `April 15, 1912 2:20 <br>
        1500 passagiers vonden de dood... <br>`;

    }, 21500);

    setTimeout(() => {
        time.innerHTML = `April 15, 1912 2:20 <br>
        300 kwamen in het ijskoude water terecht...`;

    }, 24000);

    setTimeout(() => {
        time.textContent = 'Benieuwd hoe het er vóór de aanvaring aan boord aan toeging?';
        time.style.fontFamily = 'Arial';

    }, 26500);

    setTimeout(() => {
        time.textContent = 'Kom kijken en koop je kaartje op musicalmakers.nl !';
        time.style.fontFamily = 'Arial';
        const newDiv = document.createElement('div');
        const newImg = document.createElement('img');
        newImg.src = './Titanic/pics/titanic_MM_70.png';
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

    }, 29500);


}






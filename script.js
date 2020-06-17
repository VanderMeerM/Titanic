

document.getElementById("vessel")
    .addEventListener('click', checkScreenwidth);

function checkScreenwidth() {
    if (window.outerWidth < 1350) {
        document.querySelector('.moon').style.display = "none";
        alert(
            'Unfortunately this animation is optimized for a minimum (outer) width of 1350 pixels.');
    }
    else { move() };
}

function move() {

    vessel.style.animation = "moving_sinking 20s";

    document.getElementById('iceberg').play();

    document.getElementById('time').innerHTML = 'April 14, 1912 23:40';

    setTimeout(() => {
        document.getElementById('collission').play();
    }, 2500);

    setTimeout(() => {
        document.getElementById("heart").play();
    }, 11000);

    setTimeout(() => {
        document.getElementById('time').innerHTML = 'April 15, 1912 0:30';
    }, 13000);

    setTimeout(() => {
        document.getElementById('time').innerHTML = 'April 15, 1912 1:30';
    }, 15000);

    setTimeout(() => {
        document.getElementById('time').innerHTML = 'April 15, 1912 2:00';
    }, 17000);

    setTimeout(() => {
        document.getElementById('time').innerHTML = 'April 15, 1912 2:20';
        document.getElementById('origin').style.visibility = "hidden";
        document.getElementById('wreck').style.visibility = "visible";
    }, 19000);

    setTimeout(() => {
        document.getElementById('time').innerHTML = 'Reload this page for another experience'
    }, 22000);

}







const started = new Date(2018, 9, 26, 0, 0, 0, 0);

window.onload = function () { update(); window.setInterval(update, 10); };

function update() {

    var since = new Date(Date.now() - started);

    document.getElementById('yea').innerHTML = since.getFullYear() - 1970;
    document.getElementById('mon').innerHTML = since.getMonth();
    document.getElementById('day').innerHTML = since.getDay();
    document.getElementById('hou').innerHTML = since.getHours();
    document.getElementById('min').innerHTML = since.getMinutes();
    document.getElementById('sec').innerHTML = since.getSeconds();
};
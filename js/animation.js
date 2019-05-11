let images = document.getElementById('images');

function handlerOn() {
    images.style.background = 'url("images/pug3d.jpg") no-repeat 40% 35%';
    setInterval(handlerOf, 600);
}

function handlerOf() {
    images.style.background = '';
}

setInterval(handlerOn, 8000);

first.style.height = `${document.documentElement.clientHeight}px`;
two.style.height = `${document.documentElement.clientHeight}px`;
three.style.height = `${document.documentElement.clientHeight}px`;
four.style.height = `${document.documentElement.clientHeight}px`;
document.body.style.overflow = "hidden";

function scrollDirection(direction = undefined, key = undefined) {
    if (direction === 'down' || key === 'ArrowDown') {
        window.scrollBy(0, document.documentElement.clientHeight)
    } else if (direction === 'up' || key === 'ArrowUp') {
        window.scrollBy(0, -document.documentElement.clientHeight)
    }
}

// change the screen layout when rebooting
window.scrollTo(0, 0);
// using wheel-indicator
let indicator = new WheelIndicator({
    elem: document.querySelector('.screen'),
    callback: function (e) {
        scrollDirection(e.direction);
    }
});

//The method call
indicator.getOption('preventMouse'); // true
// using key direction scroll
document.addEventListener('keydown', function (event) {
    scrollDirection(undefined, event.code)
});
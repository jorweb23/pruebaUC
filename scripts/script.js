function App() {}

window.onload = function(event) {
    var app = new App();
    window.app = app;
}

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const carruselList = event.currentTarget.parentNode;
    const track = carruselList.querySelector('.carrusel-track');
    if (!track) {
        console.error("El carrusel track no está presente en la página.");
        return;
    }
    const carruselWidth = track.querySelector('.carrusel').offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = carruselList.offsetWidth;

    let leftPosition;
    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
    btn.dataset.button == "button-prev" ? this.prevAction(leftPosition, trackWidth, listWidth, carruselWidth, track) : this.nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
}

App.prototype.prevAction = function(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
}

App.prototype.nextAction = function(leftPosition, trackWidth, listWidth, carruselWidth, track) {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carruselWidth)}px`
    }
}

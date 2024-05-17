// *Carrousel Functions
function App() {}

    window.onload = function(event) {
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const carrouselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrousel = track.querySelectorAll('.carrousel-img');

        const carrouselWidth = carrousel[0].offsetWidth;

        const trackWidth = track.offsetWidth;
        const listWidth = carrouselList.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carrouselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carrouselWidth, track);

    }

    let prevAction = (leftPosition, carrouselWidth, track) => {
        if (leftPosition > 0) {
            track.style.left = `${-1 * (leftPosition - carrouselWidth)}px`;
        }
    }

    let nextAction = (leftPosition, trackWidth, listWidth, carrouselWidth, track) => {
        if (leftPosition <  (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + carrouselWidth)}px`;
        }
}
// Modal
document.addEventListener('click', function (event) {
    if (event.target.matches('.modal-btn')
        || event.target.matches('.modal')) {
        modalToggle(event.target.target)
    } else if (event.target.matches('.zoomable')
        && event.target.matches('img')) {
        // Zoom img
        document.getElementsByTagName('body')[0].innerHTML += "<div class='modal modal-img-zoom show'><div class= 'modal-body center'><div class= 'modal-close modal-btn'>x</div><img id='img-zoom' class='full' src='" + event.target.currentSrc + "'></div></div>";
    }

    event.preventDefault();
}, false);

function modalToggle(modalId) {
    var modals = document.getElementsByClassName(modalId);
    var validId = true;

    if (modals.length === 0) {
        modals = document.getElementsByClassName('modal');
        validId = false;
    }

    for (const i of modals) {
        if (i.classList.contains('modal-img-zoom')) {
            i.remove();
            return;
        }

        if (i.classList.contains('show')) {
            // hide
            i.classList.remove('show');
        } else if (validId) {
            // show
            i.classList.add('show');
        }
    }
}
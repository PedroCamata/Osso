// Modal
document.addEventListener('click', function (event) {

    if (event.target.matches('.modal-btn')
        || event.target.matches('.modal')) {
        modalToggle(event.target.target)
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
        if (i.classList.contains('show')) {
            // hide
            i.classList.remove('show');
        } else if (validId) {
            // show
            i.classList.add('show');
        }
    }
}

// Image zoom
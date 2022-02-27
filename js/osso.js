"use strict";

let labelInputAction = false;

document.addEventListener('click', (event) => {
    if (event.target.matches('.modal-btn')
        || event.target.matches('.modal')) {

        event.preventDefault();

        var modals = document.getElementsByClassName(event.target.target);
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
                i.classList.remove('show');
            } else if (validId) {
                i.classList.add('show');
            }
        }

    } else if (event.target.matches('.zoomable')
        && event.target.matches('img')) {

        event.preventDefault();
        // Zoom img
        document.getElementsByTagName('body')[0].innerHTML += "<div class='modal modal-img-zoom show'><div class= 'modal-body center'><div class= 'modal-close modal-btn'>x</div><img id='img-zoom' class='full' src='" + event.target.currentSrc + "'></div></div>";

    } else if (event.target.matches('.tab-btn')) {

        event.preventDefault();
        var btn = event.target;
        var tabGroup = btn.closest('.tabmenu').getAttribute('tab-group');

        // Hide everything in tabGroup
        for (const g of document.getElementsByClassName(tabGroup)) {
            for (const t of g.getElementsByClassName('tab')) {
                t.classList.remove('show');
            }
        }

        // Show active tab in tabGroup
        for (const i of document.querySelectorAll('.' + tabGroup + ' .' + btn.getAttribute('tab'))) {
            if (!i.classList.contains('show')) {
                i.classList.add('show');
            }
        }

        for (const b of document.getElementsByClassName("tab-btn")) {
            b.classList.remove('primary');
            if (b.getAttribute('tab') == btn.getAttribute('tab')) {
                b.classList.add('primary');
            }
        }
    } else if (event.target.matches('.card-close')) {
        var elem = event.target;
        var card = elem.closest('.card');
        if (card == null) {
            elem.parentElement().remove();
        }
        card.remove();
    }

    // Dropdown
    if (event.target.matches(".dropdown button")) {
        let targetElem = event.target.closest(".dropdown");

        let dropDownContent = targetElem.getElementsByClassName("dropdown-content")[0];

        if (dropDownContent.style.display != "block") {
            dropDownContent.style.display = "block";
        } else {
            dropDownContent.style.display = "none";
        }
    } else {
        let allColumnOptions = document.getElementsByClassName("dropdown-content");

        for (let i = 0; i < allColumnOptions.length; i++) {
            allColumnOptions[i].style.display = "none";
        }
    }

    // Label input click
    if (event.target.matches(".labelInput .text")) {
        // Show input
        let textLabelInput = event.target;
        textLabelInput.closest(".labelInput")
            .getElementsByClassName("input")[0]
            .style
            .display = "inline-block";

        // Hide text
        textLabelInput.style.display = "none";
    } else if (!event.target.matches(".labelInput .input")) {
        let labelInputElems = document.getElementsByClassName("labelInput");
        for (let i = 0; i < labelInputElems.length; i++) {
            let inputElem = labelInputElems[i].getElementsByClassName("input")[0];
            let inputValue = inputElem.value;

            let textElem = labelInputElems[i].getElementsByClassName("text")[0];

            if (inputValue != textElem.innerHTML
                && labelInputAction) {
                // Call API
                if (labelInputAction(inputElem.name, inputValue)) {
                    textElem.innerHTML = inputValue;
                }
            }

            textElem.style.display = "inherit";
            inputElem.style.display = "";
        }
    }

}, false);
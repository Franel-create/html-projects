'use strict';


// Ibg
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();


// Datepicker
const datepicker = document.getElementById('date');
if (datepicker) {
    new AirDatepicker(datepicker);
}

// Input file
const inputFile = document.querySelector('.js-input-file');

if (inputFile) {
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginFileValidateSize,
    );

    FilePond.create(
        document.getElementById('file'),
    );

    FilePond.setOptions({
        maxFiles: 40,
        required: true,
        labelIdle: 'Перетащите файлы или загрузите их <span class="filepond--label-action"> сюда </span>'
    });
}






















































// function getAmountPaper(roomLength, roomWidth, roomHeight, paperWidth, paperLength) {
//     let perimeter = (roomLength + roomWidth) * 2;
//     let resultAmount = perimeter / paperLength / roomHeight * paperWidth;
// }


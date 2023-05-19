'use strict';

let calcResult = document.querySelector('.calc__result');
calcResult.style.display = 'none';
let calcBtn = document.getElementById('paperBtn');

calcBtn.addEventListener('click', function () {
    let roomLength = document.getElementById('roomLength').value;
    let roomWidth = document.getElementById('roomWidth').value;
    let roomHeight = document.getElementById('roomHeight').value;
    let paperWidth = document.getElementById('paperWidth').value;
    let paperLength = document.getElementById('paperLength').value;
    let calcResult = document.querySelector('.calc__result');

    let perimeter = (+roomLength + +roomWidth) * 2;
    let cloth = Math.ceil(perimeter / +paperWidth);
    let clothInPaper = Math.floor(+paperLength / +roomHeight);
    let resultAmount = Math.ceil(cloth / clothInPaper);
    let resultSquare = perimeter * +roomHeight;

    calcResult.style.display = 'block';

    let amount = `<div class="result__amount">Количество рулонов: <span>${resultAmount}</span></div>
    <div class="result__amount">Площадь стен под обои: <span>${resultSquare}</span></div>
    </div>`;
    calcResult.innerHTML = amount;
});



let resultLam = document.querySelector('.result-lam');
resultLam.style.display = 'none';
let lamBtn = document.getElementById('lamBtn');

lamBtn.addEventListener('click', function () {
    let roomLengthLam = document.getElementById('roomLengthLam').value;
    let roomWidthLam = document.getElementById('roomWidthLam').value;
    let lamWidth = document.getElementById('lamWidth').value;
    let lamLength = document.getElementById('lamLength').value;
    let lamAmount = document.getElementById('lamAmount').value;

    let square = +roomLengthLam * +roomWidthLam;
    let squareLam = (+lamLength / 1000) * (+lamWidth / 1000);
    let amountLam = Math.ceil(square / squareLam);
    let amountPackage = Math.ceil(amountLam / lamAmount);

    resultLam.style.display = 'block';

    let amount = `<div class="result__amount">Количество досок ламината: <span>${amountLam}</span></div>
    <div class="result__amount">Количество упаковок ламината: <span>${amountPackage}</span></div>`;
    resultLam.innerHTML = amount;
});




























































// function getAmountPaper(roomLength, roomWidth, roomHeight, paperWidth, paperLength) {
//     let perimeter = (roomLength + roomWidth) * 2;
//     let resultAmount = perimeter / paperLength / roomHeight * paperWidth;
// }


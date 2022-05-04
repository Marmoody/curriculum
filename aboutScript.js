const logo = document.getElementById('navLogo');
const homeMenu = document.getElementById('homeMenu');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');

const arrowOne = document.getElementById('arrowGifOne');
const arrowTwo = document.getElementById('arrowGifTwo'); 

const realMarius = document.getElementById('realMarius');

logo.onmouseover = () => {
    homeMenu.style.display = "inline";
}

logo.onmouseout = () => {
    homeMenu.style.display = "none";
}

buttonOne.onmousedown = () => {
    buttonOne.style.backgroundColor = "grey";
}

buttonOne.onmouseup = () => {
    buttonOne.style.backgroundColor = "#99A799";
}

buttonTwo.onmousedown = () => {
    buttonTwo.style.backgroundColor = "grey";
}

buttonTwo.onmouseup = () => {
    buttonTwo.style.backgroundColor = "#99A799";
}

buttonOne.onmouseover = () => {
    arrowOne.style.visibility = 'visible';
}

buttonOne.onmouseleave = () => {
    arrowOne.style.visibility = 'hidden';
}

buttonTwo.onmouseover = () => {
    arrowTwo.style.visibility = 'visible';
}

buttonTwo.onmouseleave = () => {
    arrowTwo.style.visibility = 'hidden';
}

buttonOne.onclick = () => {
    realMarius.src = "imgs/Bewerbungsfoto Marius.jpg";
}

buttonTwo.onclick = () => {
    realMarius.src = "imgs/Marius mit Hund.jpg";
}
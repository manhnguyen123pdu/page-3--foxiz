var sun = document.querySelectorAll('.sun')
var moon = document.querySelectorAll('.moon')
var background = document.querySelector('.background')
var logodark = document.querySelectorAll('.logodark')
var taga = document.getElementsByTagName('a')
var nav__overlay = document.querySelectorAll('.nav__overlay')
var nav2btn = document.querySelector('.nav2btn')
var overmenu2__contents = document.querySelector('.overmenu2__contents ')
var nav2 = document.querySelector('.nav2t ')
for (m = 0; m < moon.length; m++) {
    moon[m].onclick = function () {
        background.classList.add('background--black')
        for (n = 0; n < moon.length; n++) {
            moon[n].classList.add('color__icon')
            sun[n].classList.remove('color__icon')
        }
        for (l = 0; l < 3; l++) {
            logodark[l].classList.add('vissible')
        }
        for (i = 0; i < taga.length; i++) {
            taga[i].classList.add('taga')
        }
        for (k = 0; k < nav__overlay.length; k++) {
            nav__overlay[k].classList.add('background--black')
        }

    }
}

for (s = 0; s < sun.length; s++) {
    sun[s].onclick = function () {
        background.classList.remove('background--black')
        for (n = 0; n < moon.length; n++) {
            sun[n].classList.add('color__icon')
            moon[n].classList.remove('color__icon')
        }
        for (l = 0; l < 3; l++) {
            logodark[l].classList.remove('vissible')
        }
        for (i = 0; i < taga.length; i++) {
            taga[i].classList.remove('taga')
        }
        for (k = 0; k < nav__overlay.length; k++) {
            nav__overlay[k].classList.remove('background--black')
        }

    }
}
nav2btn.onclick = function () {

    overmenu2__contents.classList.toggle('vissible2')
    nav2.classList.toggle('fix')
}
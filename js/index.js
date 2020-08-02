const btnScrollUp = document.querySelector('.move-up span');
const burgerIcon = document.querySelector('.toggle-collapse');
const nav = document.querySelector('nav');
const checkBox = document.querySelector('.toggle');
const footer = document.querySelector('footer');
const email = document.querySelector('.btn2');
const code = document.querySelector('.btn');
const emailIcon = document.querySelector('.icon-email');
const githubIcon = document.querySelector('.icon-github');


function toggleHeight() {
    nav.classList.toggle('collapse');
    checkBox.classList.toggle('CheckBoxBlock');
}

function checked() {
    document.body.classList.toggle('dark0');
    nav.classList.toggle('dark');
    footer.classList.toggle('dark1');

}

function emailfunc() {

    location.href = "mailto:sthitpanth01@gmail.com";
    /* window.setTimeout(function () { location.href="index.html" }, 0);  */
}

function githubfunc() {
    window.setTimeout(function () { location.href = "https://github.com/BrianSteel" }, 0);
}

function githubCode() {
    window.setTimeout(function () { location.href = "https://github.com/BrianSteel" }, 0);
}

function scrollToTop(event) {
    //event.preventDefault();
    const positionOfScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (positionOfScroll) {
        window.scrollBy(0, -Math.max(1, Math.floor(positionOfScroll / 15)));
        scrollAnimation = setTimeout("scrollToTop()", 8);
    } else clearTimeout(scrollAnimation);
}
function scrollCheck() {
    const positionOfScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (positionOfScroll < 500) {
        btnScrollUp.style.display = "none";
    }
    else {
        btnScrollUp.style.display = "block";
    }
}
btnScrollUp.addEventListener('click', scrollToTop);
window.addEventListener('scroll', scrollCheck);
burgerIcon.addEventListener('click', toggleHeight);
checkBox.addEventListener('change', checked);
email.addEventListener('click', emailfunc);
code.addEventListener('click', githubCode);
emailIcon.addEventListener('click', emailfunc);
githubIcon.addEventListener('click', githubfunc);
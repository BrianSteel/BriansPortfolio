const btnScrollUp = document.querySelector('.move-up span');
const burgerIcon = document.querySelector('.toggle-collapse');
const nav = document.querySelector('nav');
const checkBox = document.querySelector('.toggle');
const footer = document.querySelector('footer');
const email = document.querySelector('.btn2');
const code = document.querySelector('.btn');
const emailIcon = document.querySelector('.icon-email');
const githubIcon = document.querySelector('.icon-github');
const submit = document.querySelector('.submit');

function toggleHeight() {
    nav.classList.toggle('collapse');
    checkBox.classList.toggle('CheckBoxBlock');
}

function checked() {
    document.body.classList.toggle('dark0');
    nav.classList.toggle('dark');
    footer.classList.toggle('dark1');
}

function logErr() {
    let name = document.querySelector('.input1').value;
    let emailMe = document.querySelector('.input2').value;
    let textarea = document.querySelector('.textarea').value;
    let errLog = document.querySelector('#log-err');

    errLog.style.color = 'maroon';
    if (name.length <= 0) {
        errLog.textContent = "Name is too short.";
        return false;
    } else if (emailMe <= 0 || emailMe.indexOf('@') == -1) {
        errLog.textContent = "Email is not correct.";
        return false;
    }
    else if (textarea.length <= 0) {
        errLog.textContent = "Send me a hello at least! :)";
        return false;
    } else {
        setTimeout(function(){
            errLog.textContent = " ";
        }, 3000)
        errLog.textContent = `Thanks for reaching out me. Good day, ${name}!`;
    }
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
submit.addEventListener('click', logErr);
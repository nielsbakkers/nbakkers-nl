//CHECK IF THE VISITOR IS USING A DESKTOP DEVICE
var redirect = function() {
    if (this.window.innerWidth >= 799) {
        document.location = "/";
    }
}
window.addEventListener('load', redirect, false);
window.addEventListener('resize', redirect, false);

//Typewriting effect
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "NBAKKERS";
    }, 0);
    setTimeout(() => {
        text.textContent = "STUDENT";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Cyber_Security";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
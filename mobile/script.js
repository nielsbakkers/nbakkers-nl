//CHECK IF THE VISITOR IS USING A DESKTOP DEVICE
if (screen.width >= 699) {
    document.location = "/";
}

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
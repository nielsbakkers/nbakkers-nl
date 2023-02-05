//CAROUSEL

const text1_options = [
    "Ik weet je wachtwoord",
    "Het is oorlog maar niemand die het ziet",
    "Wij zijn het zwakste schakel",
    "Laat je niet hack maken",
    "Have I Been Pwned",
    "TryHackMe"
];
const text2_options = [
    "https://ikweetjewachtwoord.nl/",
    "https://www.bol.com/nl/nl/p/het-is-oorlog-maar-niemand-die-het-ziet/9200000107493354/",
    "https://www.bol.com/nl/nl/p/wij-zijn-de-zwakste-schakel/9300000096966966/",
    "https://laatjeniethackmaken.nl/",
    "https://haveibeenpwned.com/",
    "https://tryhackme.com/"
];
const color_options = ["var(--accent-color-1)", "var(--main-color)", "var(--nav-active)", "var(--nav-bar)", "var(--accent-color-3)", "var(--accent-color-4)"];
const color_text = ["var(--main-color)", "var(--accent-color-1)", "var(--nav-bar)", "var(--nav-active)", "var(--accent-color-4)", "var(--accent-color-3)"];
const image_options = [
    "https://kbimages1-a.akamaihd.net/9790f882-ced2-4045-8f1e-04b86691cd7a/1200/1200/False/ik-weet-je-wachtwoord.jpg",
    "https://media.s-bol.com/ojDV5kMNLqDK/JZOKNEg/168x168.jpg",
    "https://i.mgtbk.nl/boeken/9789463562683-920x960.jpg?_=none_0",
    "https://laatjeniethackmaken.nl/fb-logo.png",
    "https://haveibeenpwned.com/Content/Images/SocialLogo.png",
    "https://tryhackme-images.s3.amazonaws.com/room-icons/c916cc3206c2199f9b5e9db43d5a15e9.png"
];
var i = 0;
const carouselHeader = document.getElementById("carousel-header");
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText1.style.color = color_text[i];
currentOptionText2.innerText = text2_options[i];
currentOptionText2.style.color = color_text[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];
carouselHeader.style.color = color_text[i];
optionPrevious.style.color = color_text[i];
optionNext.style.color = color_text[i];

optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;
    currentOptionText1.dataset.nextText = text1_options[i];

    currentOptionText2.dataset.nextText = text2_options[i];

    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
        carouselHeader.style.color = color_text[i];
        currentOptionText1.innerText = text1_options[i];
        currentOptionText1.style.color = color_text[i];
        currentOptionText2.innerText = text2_options[i];
        currentOptionText2.style.color = color_text[i];
        optionPrevious.style.color = color_text[i];
        optionNext.style.color = color_text[i];
        carousel.classList.remove("anim-next");
    }, 650);
};

optionPrevious.onclick = function () {
    if (i === 0) {
        i = text1_options.length;
    }
    i = i - 1;
    currentOptionText1.dataset.previousText = text1_options[i];

    currentOptionText2.dataset.previousText = text2_options[i];

    mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(() => {
        carouselHeader.style.color = color_text[i];
        currentOptionText1.innerText = text1_options[i];
        currentOptionText1.style.color = color_text[i];
        currentOptionText2.innerText = text2_options[i];
        currentOptionText2.style.color = color_text[i];
        optionPrevious.style.color = color_text[i];
        optionNext.style.color = color_text[i];
        carousel.classList.remove("anim-previous");
    }, 650);
};

//CHANGE COLOR PALLETE
var cssVars = ["--accent-color-2", "--accent-color-1", "--main-color", "--nav-active", "--nav-bar", "--accent-color-3", "--accent-color-4"];
var palettes = {
    default: ["#ccdad1ff", "#4281a4ff", "#14213dff", "#fca311ff", "#f46036ff", "#537a5aff", "#143109ff"],
    custom1: ["#233D4D", "#003049ff", "#d62828ff", "#f77f00ff", "#fcbf49ff", "#eae2b7ff", "#F8F4DE"],
    custom3: ["#ccdad1ff", "#196674", "#0A3A4A", "#D0E64B", "#2e7d32", "#33A6B2", "#e9f7f9"],
    custom4: ["#181818", "#8c8c8c", "#404040", "#ececec", "#282828", "#B3B3B3", "#121212"],
}
var cssColors = document.querySelector(':root');

var paletteDIV = document.getElementById('palette');

for (const [key, value] of Object.entries(palettes)) {
    var colorDIV = document.createElement('div');
    for (i in value) {
        var span = document.createElement('span');
        span.classList.add('dot');
        span.style.backgroundColor = value[i];
        span.id = key;
        colorDIV.appendChild(span);
    }
    colorDIV.id = key;
    colorDIV.classList.add('palette-item');
    paletteDIV.appendChild(colorDIV);
}

document.querySelectorAll('.palette-item').forEach(item => {
    item.addEventListener('click', event => {
        console.log(event.target.id);
        changePalette(event.target.id);
    })
})

function changePalette(id) {
    for (cssVar in cssVars) {
        cssColors.style.setProperty(cssVars[cssVar], palettes[id][cssVar]);
    }
    var date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = `color=${id};expires=${date};SamSite="None";Secure`;
}

//SCROLLING BANNE
const root = document.documentElement;
const bannerElementsDisplayed = getComputedStyle(root).getPropertyValue("--scbanner-elements-displayed");
const bannerContent = document.querySelector("ul.banner-content");

root.style.setProperty("--scbanner-elements", bannerContent.children.length);

for (let i = 0; i < bannerElementsDisplayed; i++) {
    bannerContent.appendChild(bannerContent.children[i].cloneNode(true));
}
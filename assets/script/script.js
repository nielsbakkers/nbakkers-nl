//Function to load script of the sections
function loadScript(src) {
    const script = document.createElement('script');
    script.src = "assets/script/" + src;
    document.head.prepend(script);
}

//Load the section scripts
loadScript('section1.js');
loadScript('section2.js');
loadScript('section3.js');
loadScript('section4.js');
loadScript('section5.js');

//CHECK IF THE VISITOR IS USING A MOBILE DEVICE
var redirect = function () {
    if (this.window.innerWidth <= 850) {
        document.location = "/mobile";
    }

    //CHECK THE COLOR PALETTE PREFERENCE
    if (!document.cookie.indexOf('color=')) {
        let name = 'color' + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                changePalette(c.substring(name.length, c.length));
            }
        }
    }
}
window.addEventListener('load', redirect, false);
window.addEventListener('resize', redirect, false);

//PAGE SCROLL EFFECT
$(document).ready(function () {
    var delay = false;
    var currentPage = 1;
    var pageCount = $(".section").length;
    var swipe = document.getElementsByTagName('.section');

    $(document).on('mousewheel DOMMouseScroll', function (event) {
        //event.preventDefault();
        if (delay) return;
        delay = true;
        setTimeout(function () { delay = false }, 100)

        var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

        if (wd < 0) {
            if (currentPage < pageCount) {
                currentPage++;
            }
        } else {
            if (1 < currentPage) {
                currentPage--;
            }
        }

        $('html,body').animate({
            scrollTop: $('#sec' + currentPage).offset().top
        }, 700);

        $('#tag' + currentPage).addClass('active');
        for (var i = 1; i <= pageCount; i++) {
            if (i != currentPage) {
                $('#tag' + i).removeClass('active');
            }
        }
    });
});

console.log(`
_   _ _____ _     _     ___  _ 
| | | | ____| |   | |   / _ \| |
| |_| |  _| | |   | |  | | | | |
|  _  | |___| |___| |__| |_| |_|
|_| |_|_____|_____|_____\___/(_)
                                
Good you are looking here, you never know what information is hidden in the console.
`);


//CHECK IF THE VISITOR IS USING A MOBILE DEVICE
var redirect = function() {
    if (this.window.innerWidth <= 799) {
        document.location = "/mobile";
    }
}
window.addEventListener('load', redirect, false);
window.addEventListener('resize', redirect, false);

//PAGE SCROLL EFFECT
$(document).ready(function() {
  var delay = false;
  var currentPage = 1;
  var pageCount = $(".section").length;
  var swipe = document.getElementsByTagName('.section');

  $(document).on('mousewheel DOMMouseScroll', function(event) {
        event.preventDefault();
        if (delay) return;
        delay = true;
        setTimeout(function() { delay = false }, 100)

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

//SECTION 1 - SHAPE ANIMATIONS
const wrapper = document.getElementById("wrapper");
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
    return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;
setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
 
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);


//SECTION TWO - word animation
const letters = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
document.querySelector("h1").onmouseover = event => {
    let interations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index < interations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(interations >= event.target.dataset.value.length) clearInterval(interval);

        interations += 1 / 3;
    }, 30);
}

//PASSWORD GENERATOR
const characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','T','U','V','W','X','Y','Z',
'0','1','2','3','4','5','6','7','8','9',
'!','@','#','$'];
active = true;

function getChars() {
    chars = []
    for (let i = 0; i < 12; i++) {
        chars.push(Math.floor(Math.random() * characters.length));
    }
    return chars;
};
function charInterval() {
    passwordGen = setInterval(() => {
            var charArray = getChars();
            document.getElementById('char1').innerHTML = characters[charArray[0]];
            document.getElementById('char2').innerHTML = characters[charArray[1]];
            document.getElementById('char3').innerHTML = characters[charArray[2]];
            document.getElementById('char4').innerHTML = characters[charArray[3]];
            document.getElementById('char5').innerHTML = characters[charArray[4]];
            document.getElementById('char6').innerHTML = characters[charArray[5]];
            document.getElementById('char7').innerHTML = characters[charArray[6]];
            document.getElementById('char8').innerHTML = characters[charArray[7]];
            document.getElementById('char9').innerHTML = characters[charArray[8]];
            document.getElementById('char10').innerHTML = characters[charArray[9]];
            document.getElementById('char11').innerHTML = characters[charArray[10]];
            document.getElementById('char12').innerHTML = characters[charArray[11]];
        }, 100);
}
charInterval();

document.getElementById('sec3').addEventListener('click', () => {
    if (active) {
        clearInterval(passwordGen);
        active = false;
    } else {
        charInterval();
        active = true;
    }
})

document.getElementById('grid-container').addEventListener('click', () => {
    var gridItems = document.getElementById('grid-container').getElementsByTagName('div');
    password = [];
    for (i=0; i<gridItems.length; i++) {
        password.push(gridItems[i].textContent);
    }
    navigator.clipboard.writeText(password.join(''));
})

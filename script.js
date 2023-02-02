//CHECK IF THE VISITOR IS USING A MOBILE DEVICE
if (screen.width <= 699) {
    document.location = "mobile.html";
}

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
        console.log(wd);

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
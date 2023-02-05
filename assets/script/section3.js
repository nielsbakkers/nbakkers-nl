//PASSWORD GENERATOR
const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$'];
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

document.getElementById('grid-container').addEventListener('click', () => {
    if (active) {
        clearInterval(passwordGen);
        active = false;
    } else {
        charInterval();
        active = true;
    }

    var gridItems = document.getElementById('grid-container').getElementsByTagName('div');
    password = [];
    for (i = 0; i < gridItems.length; i++) {
        password.push(gridItems[i].textContent);
    }
    navigator.clipboard.writeText(password.join(''));
})

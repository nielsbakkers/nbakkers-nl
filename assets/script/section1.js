//Word animation
const letters = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
document.querySelector("h1").onmouseover = event => {
    let interations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < interations) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (interations >= event.target.dataset.value.length) clearInterval(interval);

        interations += 1 / 3;
    }, 30);
}

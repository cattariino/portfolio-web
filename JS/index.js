let counter = 1;

setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter < 4) {
        counter = 1;
    }
}, 7000)

const swith = document.querySelector('.switch');
swith.addEventListener("click", function () {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
})

const flagsElement = document.querySelector(".flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`../languages/${language}.json`)
    const texts = await requestJson.json()
    console.log({ texts });

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        const textSection = texts[section];
        const doesSectionExist = Boolean(textSection);
        if (doesSectionExist) {
            textToChange.innerHTML = textSection[value];
        }
    }
}

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

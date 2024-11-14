const spanishLanguage = {
    menu: {
        seccion: 'Sobre mi',
        "seccion-1": "Skills",
        "seccion-2": "Formación",
        "seccion-3": "Proyectos",
        "boton": "Contacto"
    },

    "sobre-mi": {
        "saludo": "hola soy gabriela",
        "rol": "desarrolladora web Frontend",
        "descripcion": "Ing. en biotecnología y estudiante autodidacta de Desarrollo Web enfocado en programación Frontend. Aspiro conseguir empleo en el mundo del Desarrollo Web, adquirir experiencia, nuevos conocimientos y fortalecer mi vida profesional. Soy una persona empática, con competencias enfocadas en el trabajo en equipo, comunicación asertiva, resolución de problemas, responsable y proactiva, me gusta aprender de los demás y superarme continuamente.",
        "boton": "Descargar CV"
    },
    "contacto": {
        "diseno": "diseñado por @cattariino"
    }
}

const englishLanguage = {
    "menu": {
        "seccion": "About me",
        "seccion-1": "Skills",
        "seccion-2": "Training",
        "seccion-3": "Projects",
        "boton": "Contact"
    },

    "sobre-mi": {
        "saludo": "hello, I'm Gabriela",
        "rol": "Frontend web developer",
        "descripcion": "Ing. in biotechnology and self-taught student of Web Development focused on Frontend programming. I aspire to get a job in the world of Web Development, acquire experience, new knowledge and strengthen my professional life. I am an empathetic person, with skills focused on teamwork, assertive communication, problem solving, responsible and proactive, I like to learn from others and continually improve myself.",
        "boton": "Download CV"
    },
    "contacto": {
        "diseno": "designed by @cattariino"
    }
}

const languages = {
    es: spanishLanguage,
    en: englishLanguage,
}

let counter = 1;

setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter < 4) {
        counter = 1;
    }
}, 7000)

const interruptor = document.querySelector('.switch');

interruptor.addEventListener('click', function () {
    interruptor.classList.toggle('active');
    document.body.classList.toggle('active');
    const modoOscuroActual = document.body.classList.contains('active') ? 'activado' : 'desactivado';
    localStorage.setItem('modoOscuro', modoOscuroActual);
});

function activarModoOscuro() {
    interruptor.classList.add('active');
    document.body.classList.add('active');
}

function desactivarModoOscuro() {
    interruptor.classList.remove('active');
    document.body.classList.remove('active');
}

const modoOscuroGuardado = localStorage.getItem('modoOscuro');
if (modoOscuroGuardado === 'activado') {
    activarModoOscuro();
}

const flagsElement = document.querySelector(".flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = language => {

    const texts = languages[language];

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

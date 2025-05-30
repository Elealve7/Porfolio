const en = document.getElementById("en");
const es = document.getElementById("es");

const traducir = document.getElementById("traducir");

let idioma= "es";

traducir.addEventListener('click', () => {
    if(idioma === "es") {
        es.style.display = "none";
        en.style.display = "block";
        idioma = "en";
        traducir.textContent = "Traducir";
    } else {
        en.style.display = "none";
        es.style.display = "block";
        idioma = "es";
        traducir.textContent = "Translate";

    }
  });
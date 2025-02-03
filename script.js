let arrayConPreguntas = [
  "Aun sin estar bien, tengo la razón dos veces al dia", //1
  "La gente se pega cuando ve este color en las calles", //2
  "Soy la estación favorita de uno al que han escrito", //3
  "Si me mojas te secas", //4
  "Aunque mientas te protejo", //5
  "Cuando tenemos frío, tenemos un color calido, pero cuando la cosa se calienta nos ponemos palidas y sentimos que vamos a explotar", //6
  "Si preguntas por mi, desaparezco", //7
  "Cuando no hay nadie más, te empiezo a acompañar", //8
];

let arrayConRespuestas = [
  "reloj",
  "amarillo",
  "primavera",
  "toalla",
  "abogado",
  "palomitas",
  "silencio",
  "soledad",
];
let indiceDePreguntas = 0;
let preguntaMostrada;
let respuesta;
let vidas = 3;
let aciertos = 0;
let victoria = false;
let derrota = false;

function hasPerdido() {
  if (vidas === 0) {
    alert(
      "Has perdido :( .... PEEERO puedes pulsar ACEPTAR para volver a jugar c:"
    );
    derrota = true;
    window.location.href = "index.html";
    quitarVida();
  }
}

function hasGanado() {
  if (indiceDePreguntas === 8 && vidas != 0) {
    alert("Vaya vaya... GANASTE!!! :))) pulsa aceptar para volver a jugar c:");
    victoria = true;
    window.location.href = "index.html";
  }
}

function quitarVida() {
  let corazones = document.getElementById("corazones");
  corazones.removeChild(corazones.children[0]);
  vidas--;
}

function seleccionarPregunta() {
  preguntaMostrada = arrayConPreguntas[indiceDePreguntas];
  return preguntaMostrada;
}

function mostrarPreguntaDevolverRespuesta() {
  respuesta = prompt(seleccionarPregunta()).toLowerCase();
  return respuesta;
}

function hasAcertado() {
  if (respuesta === arrayConRespuestas[indiceDePreguntas] || respuesta === arrayConRespuestas[indiceDePreguntas] + " ") {
    let corazones = document.getElementById("corazones");
    let nuevoCorazon = document.createElement("img");
    nuevoCorazon.src = "heart.png";
    corazones.appendChild(nuevoCorazon);
    alert("Has acertado, pulsa aceptar para continuar =)");
    aciertos++;
  } else {
    alert("Pierdes una vida >:)");
    quitarVida();
  }
  indiceDePreguntas++;
}

function jugar() {
  if (victoria === false && derrota === false) {
    mostrarPreguntaDevolverRespuesta();
    hasAcertado();
  }
  hasPerdido();
  hasGanado();
}

let botonDeJugar = document.getElementById("botonEmpezar");
botonDeJugar.addEventListener("click", jugar);

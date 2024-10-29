let puntuacion = 0;
let intervaloJuego;

const cuadroPuntuacion = document.getElementById('puntuacion');
const botonEmpezar = document.getElementById('empezarJuego');


function casillaRandom() {
    return Math.floor(Math.random() * 9) + 1;
}

// Función para determinar si el objetivo es un ladrón.
function objetivoMalvado() {
    let numero = Math.random() * 100;
    return numero <= 70; // 70% ladrón, 30% anciana
}

// Función para mostrar un enemigo en una casilla
function mostrarObjetivo() {
    let num = casillaRandom();
    let casilla = document.getElementById(`c${num}`);
    let esLadron = objetivoMalvado();
    let enemigoRandom = Math.random() * 10;

    if (esLadron) {
        if (enemigoRandom < 7) {
            casilla.innerHTML = "<img src='ladron.jpg' alt='Ladron' class='imagen' name='ladron'>";
        } else {
            casilla.innerHTML = "<img src='ancianaHacker.jpg' alt='ancianaLadron' class='imagen' name='ladron'>";
        }

    } else {
        if (enemigoRandom < 7) {
            casilla.innerHTML = "<img src='anciana.jpg' alt='Anciana' class='imagen' name='anciana'>";
        } else {
            casilla.innerHTML = "<img src='niñoLadron.jpg' alt='niñoLadron' class='imagen' name='anciana'>";
        }


    }
    if (puntuacion > 30) {
        setTimeout(() => {
            casilla.innerHTML = '';
        }, 300);
    }else if (puntuacion > 20) {
        setTimeout(() => {
            casilla.innerHTML = '';
        }, 500);
    } else if (puntuacion > 10) {
        setTimeout(() => {
            casilla.innerHTML = '';
        }, 750);
    } else {
        setTimeout(() => {
            casilla.innerHTML = '';
        }, 1000);
    }



}

// Manejo de clics en las casillas, se añade o se quita puntuación dependiendo de la imagen
for (let i = 1; i <= 9; i++) {
    let casilla = document.getElementById(`c${i}`);
    let enemigoRandom = Math.random() * 10;
    casilla.addEventListener('click', function () {
        let enemigo = casilla.querySelector('img');

        if (enemigo.alt === 'Ladron') {
            puntuacion++;
        } else if (enemigo.alt === 'ancianaLadron') {
            puntuacion += 3;
            if(enemigoRandom < 2){
                alert("Te ha hackeado la abuelita :O");
                location.reload();
            }
        } else if (enemigo.alt === 'Anciana') {
            puntuacion--;
        } else if (enemigo.alt === 'niñoLadron') {
            puntuacion -= 3;
        }

        cuadroPuntuacion.textContent = puntuacion;
        casilla.innerHTML = '';

    });
}



function iniciarJuego() {
    puntuacion = 0;
    cuadroPuntuacion.textContent = puntuacion;
    intervaloJuego = setInterval(mostrarObjetivo, 1000);
    botonEmpezar.disabled = true;
}


// Evento para iniciar el juego
botonEmpezar.addEventListener('click', iniciarJuego);

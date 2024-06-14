let deck;
let PuntosJugador = 0;
let PuntosComputadora = 0;


const btnPedir = document.querySelector('#btnPedir');
const puntosHtml = document.querySelectorAll('small');
const divCartaJugador = document.querySelector('#jugador-carta');

const  crearBaraja =() => {
    let baraja = [];
    for (let tipo of ['C', 'D', 'H', 'S']) {
        for (let numero of ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']) {
            baraja.push( numero + tipo );
        }
    }
    // return baraja;
    deck = _.shuffle(baraja);
    
    return _.shuffle(baraja);
}

crearBaraja();

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();

    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
}

const valor = valorCarta( pedirCarta() );
const sacarCarta = () => {
    const carta = pedirCarta();
    console.log(carta);
}

//Eventos

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    PuntosJugador = PuntosJugador + valorCarta(carta);
    puntosHtml[0].innerText = PuntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartaJugador.append(imgCarta);

    if (PuntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
    } else if(PuntosJugador === 21) {
        console.warn('Ganaste!!');
        btnPedir.disabled = true;
    }
});

// turno de la computadora  

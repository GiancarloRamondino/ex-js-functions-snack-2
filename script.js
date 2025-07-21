// snack 1
function somma1(a, b) {
    return a + b;
}
console.log(somma1(1, 0));

const somma2 = function (a, b) {
    return a + b;
}
console.log(somma2(1, 1));

const somma3 = (a, b) => a + b;
console.log(somma3(1, 2));

// snack 2

const quadrato = (a) => a * a;
console.log(quadrato(5));

// snack 3
const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, callback) => callback(a, b);

console.log(eseguiOperazione(2, 3, somma));
console.log(eseguiOperazione(2, 3, moltiplica));

// snack 4

function creaTimer(tempo) {
    console.log("timer creato")
    return () => {
        setTimeout(() => {
            console.log("tempo scaduto");
        }, tempo);
    }
}
const timer = creaTimer(2000);
timer();

// snack 5
function stampaOgniSecondo(interval) {
    return () => {
        const intervalId = setInterval(() => {
            console.log("è passato un secondo");
        }, interval);
        setTimeout(() => {
            clearInterval(intervalId);
            console.log("intervallo fermato");
        }, 3000);
    }
}

const stampa = stampaOgniSecondo(1000);
stampa();

// snack 6

function creaContatoreAutomatico() {
    let count = 0;
    const interval2 = setInterval(() => {
        count++;
        console.log("Conteggio:", count);
        if (count >= 10) {
            setTimeout(() => {
                clearInterval(interval2);
                console.log("Contatore fermato");
            });
        }
    }, 1000);
}
creaContatoreAutomatico();



// snack 7

function eseguiEferma(messaggio, tempo) {
    return () => {
        const intervalId = setInterval(() => {
            console.log(messaggio);
        }, tempo / 3);
        setTimeout(() => {
            clearInterval(intervalId);
            console.log("timer fermato");
        }, tempo);
    }
}
const esegui = eseguiEferma("ciao", 10000);
esegui();

// snack 8

function contoAllaRovescia(n) {
    return () => {
        let count = n * 1000;
        console.log("Inizio conto alla rovescia da:", n, "secondi");
        const conto = setInterval(() => {
            if (count === 0) {
                clearInterval(conto);
                console.log("Tempo Scaduto!");
            } else {
                console.log("Tempo rimanente:", count / 1000, "secondi");
                count -= 1000;
            }
        }, 1000);

    }
}
const conto = contoAllaRovescia(20);
conto();

// snack 9
sequenzaOperazioni([
        () => console.log("Operazione 1"),
        () => console.log("Operazione 2"),
        () => console.log("Operazione 3")
    ],2000);

function sequenzaOperazioni(operazioni, tempo) {
  operazioni.forEach((operazione, index) => {
    setTimeout(operazione, tempo + index * 1000);
  });
}




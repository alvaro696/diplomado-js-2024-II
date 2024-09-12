/* 
 X = 1
 O = 0
*/

let JUGADOR = 'X';
let gameOver = false;
const TABLERO = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

window.addEventListener('load', () => {
  const estaCompleto = () => TABLERO.flat(1).every(casilla => casilla !== null);

  const quienGano = () => {
    for (let i = 0; i < 3; i++) {
      if (TABLERO[i][0] !== null && TABLERO[i][0] === TABLERO[i][1] && TABLERO[i][1] === TABLERO[i][2]) {
        return TABLERO[i][0] === 1 ? 'X' : 'O';
      }
    }
    for (let i = 0; i < 3; i++) {
      if (TABLERO[0][i] !== null && TABLERO[0][i] === TABLERO[1][i] && TABLERO[1][i] === TABLERO[2][i]) {
        return TABLERO[0][i] === 1 ? 'X' : 'O';
      }
    }
    if (TABLERO[0][0] !== null && TABLERO[0][0] === TABLERO[1][1] && TABLERO[1][1] === TABLERO[2][2]) {
      return TABLERO[0][0] === 1 ? 'X' : 'O';
    }
    if (TABLERO[0][2] !== null && TABLERO[0][2] === TABLERO[1][1] && TABLERO[1][1] === TABLERO[2][0]) {
      return TABLERO[0][2] === 1 ? 'X' : 'O';
    }
    return null;
  };

  const cajitas = document.getElementsByClassName('box');
  [...cajitas].forEach(cajita => {
    cajita.addEventListener('click', () => {
      if (gameOver) return;

      JUGADOR = JUGADOR === 'X' ? 'O' : 'X';
      cajita.innerHTML = JUGADOR;

      const fila = cajita.getAttribute('data-fila');
      const columna = cajita.getAttribute('data-columna');
      TABLERO[fila][columna] = JUGADOR === 'X' ? 1 : 0;

      const ganador = quienGano();
      if (ganador) {
        alert(`¡${ganador} ha ganado!`);
        gameOver = true;
      } else if (estaCompleto()) {
        alert('¡Empate!');
        gameOver = true;
      }
    });
  });

});

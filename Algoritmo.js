let A = prompt(alert("Escribe un número"););
let B = prompt(alert("Escribe otro número"););
let C = prompt(alert("Escribe un último número"););

// Convertir las entradas a números
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

let Mayor, Medio, Menor;

if (A >= B && A >= C) {
  Mayor = A;
  if (B >= C) {
    Medio = B;
    Menor = C;
  } else {
    Medio = C;
    Menor = B;
  }
} else if (B >= A && B >= C) {
  Mayor = B;
  if (A >= C) {
    Medio = A;
    Menor = C;
  } else {
    Medio = C;
    Menor = A;
  }
} else {
  Mayor = C;
  if (A >= B) {
    Medio = A;
    Menor = B;
  } else {
    Medio = B;
    Menor = A;
  }
}

console.log(`Los números ordenados de mayor a menor son: ${Mayor}, ${Medio}, ${Menor}`);

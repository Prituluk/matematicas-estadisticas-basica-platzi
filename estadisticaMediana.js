const listaM = document.querySelector('.entradaM');
const btnAddM = document.querySelector('.agregarM');
const btnDeleteM = document.querySelector('.deleteM');
const btnClearM = document.querySelector('.clearM');
const btnCalcM = document.querySelector('#calcMediana');

var listaDesordenada = [];
var listaOrdenada = [];

function esPar(listaOrdenada) {
 return !(listaOrdenada.length % 2);
}
function esInPar(listaOrdenada) {
 return listaOrdenada.length % 2;
} 
function promedioM(L) {
 const sumarL = L.reduce((a,b) => a + b);
 const prom = +sumarL / +L.length;
 return prom;
}

function calcMediana() {
 const listPar = esPar(listaOrdenada);
 if (listPar) { 
  const indexMitadPar1 = listaOrdenada[(listaOrdenada.length / 2) - 1 ];
  const indexMitadPar2 = listaOrdenada[listaOrdenada.length / 2];
  const listaM = [indexMitadPar1, indexMitadPar2];
  const promedio = promedioM(listaM);
  console.log('par');
  document.getElementById('resultM').textContent = promedio;
 } else {
  const indexMitadImpar = Math.floor(listaOrdenada.length / 2 );
  const medianaImpar = listaOrdenada[indexMitadImpar];
  console.log('impar');
  document.getElementById('resultM').textContent = medianaImpar;
 }

}
btnCalcM.addEventListener('click', calcMediana);

btnAddM.addEventListener('click', () => { 
 let valor = +listaM.value;
 if (!isNaN(valor) && listaM.value.trim() !== "" && listaM.value !== "-" && listaM.value !== ".") {
  listaDesordenada.push(valor);
  listaOrdenada.push(valor);
  listaOrdenada.sort((a,b)=>a-b);
  document.getElementById('listaM').textContent = listaOrdenada;
 }else {
  alert('Ingrese un dato valido');
 }
 console.log(listaDesordenada);
 console.log(listaOrdenada);
 listaM.value = null;
});

btnDeleteM.addEventListener('click', () => {
 listaDesordenada.pop();
 listaOrdenada = listaDesordenada.slice().sort((a, b) => a - b);
 document.getElementById('listaM').textContent = listaOrdenada;
 
});

btnClearM.addEventListener('click', () => {
 listaOrdenada = [];
 listaDesordenada = [];
 document.getElementById('listaM').innerHTML = "";
});
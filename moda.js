const listaModa = document.querySelector('.entradaModa');
const btnAddModa = document.querySelector('.agregarModa');
const btnDeleteModa = document.querySelector('.deleteModa');
const btnClearModa = document.querySelector('.clearModa');
const btnCalcModa = document.querySelector('#calcModa');

const listaCount = {};
let listaCount1= [];

btnAddModa.addEventListener('click', () => {
 let valorModa = listaModa.value;
 listaCount1.push(valorModa);
 listaModa.value = "";
 document.getElementById('listaModa').textContent = listaCount1;
} );

btnDeleteModa.addEventListener('click', () => {
listaCount1.pop();
document.getElementById('listaModa').textContent = listaCount1;
});

btnClearModa.addEventListener('click', () => {
 listaCount1= [];
 document.getElementById('listaModa').textContent = "";
 document.getElementById('resultModa').innerHTML = "";
})

btnCalcModa.addEventListener('click', () => {
 document.getElementById('resultModa').innerHTML = "";
 calcModa(listaCount1);
})
function calcModa(lista) {
 

 for (let i = 0; i < lista.length; i++) {
  const element = lista[i];
  if (listaCount[element]) {
   listaCount[element] += 1;
  } else {
   listaCount[element] = 1;
  }
 }
 const listaArray = Object.entries(listaCount);
 const listaOrdenada = ordenarListaBidimensional(listaArray, 1)
 const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
 const moda = listaMaxNumber[0];
 document.getElementById('resultModa').innerHTML = moda;
}




function ordenarListaBidimensional(listaDesordenada, i) {
 function ordenarListaSort(valorAcumulado, nuevoValor) {
   return valorAcumulado[i] - nuevoValor[i];
 }
 
 const lista = listaDesordenada.sort(ordenarListaSort);
 return lista;
}
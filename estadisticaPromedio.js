const input = document.querySelector('.entradaP');
const btnI = document.querySelector('.agregarP');
const clean1 = document.querySelector('.deleteP');
const clean = document.querySelector('.cleanP')
const calcPromedio = document.querySelector('#calcPromedio');
const resultText = document.querySelector('#resultP');
// const listText = document.querySelector('#lista');

let lista = [];

btnI.addEventListener('click', () => {
 let value = +input.value;
 if (!isNaN(value) && input.value.trim() !== "" && input.value !== "-" && input.value !== ".") {
  lista.push(value);
  document.getElementById('listaP').textContent = lista;


 } else {
  alert('Ingrese un dato valido');
 }
 input.value = null;
 

})

calcPromedio.addEventListener('click', () => {

 if (lista.length === 0 ) {
  document.getElementById('resultP').textContent = "";
 } else {
    const sumarArrI = lista.reduce((a,b) => a + b);
    const promedio = +sumarArrI / +lista.length;
    document.getElementById('resultP').textContent = promedio;
 }
  
});

clean1.addEventListener('click', () => {
 lista.pop();
 document.getElementById('listaP').textContent = lista;
})
clean.addEventListener('click', () => {
 lista = [];
 document.getElementById('listaP').textContent = lista;
 document.getElementById('resultP').textContent = "";
})


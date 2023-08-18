const input = document.querySelector('.entrada');
const btnI = document.querySelector('.agregar');
const clean1 = document.querySelector('.clean-1');
const clean = document.querySelector('.clean')
const calcPromedio = document.querySelector('#calcPromedio');
const resultText = document.querySelector('#resultP');
// const listText = document.querySelector('#lista');

let lista = [];

btnI.addEventListener('click', () => {
 let value = +input.value;
 if (!isNaN(value) && input.value.trim() !== "" && input.value !== "-" && input.value !== ".") {
  lista.push(value);
  document.getElementById('lista').textContent = lista;


 } else {
  alert('Ingrese un dato valido');
 }
 input.value = null;
 

})

calcPromedio.addEventListener('click', () => {

 let sumarArrI = 0;
 if (lista.length === 0 ) {
  document.getElementById('resultP').textContent = "";
 } else {
   for (let i = 0; i < +lista.length; i++) {
      sumarArrI = +sumarArrI + +lista[i];
    }
    const promedio = +sumarArrI / +lista.length;
    document.getElementById('resultP').textContent = promedio;
 }
  
});

clean1.addEventListener('click', () => {
 lista.pop();
 document.getElementById('lista').textContent = lista;
})
clean.addEventListener('click', () => {
 lista = [];
 document.getElementById('lista').textContent = lista;
 document.getElementById('resultP').textContent = "";
})
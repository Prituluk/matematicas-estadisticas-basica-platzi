const input = document.querySelector('.entrada');
const btnI = document.querySelector('.imprimir');
const resultText = document.querySelector('#resultP');
btnI.addEventListener('click', () => {
 let arrayInput = input.value.split('-');
 let sumarArrI = 0;
  for (let i = 0; i < +arrayInput.length; i++) {
   sumarArrI = +sumarArrI + +arrayInput[i];
 }
 const promedio = sumarArrI / arrayInput.length;
 console.log(arrayInput, typeof(arrayInput), sumarArrI, typeof(sumarArrI));
 document.getElementById('resultP').textContent = promedio;
})


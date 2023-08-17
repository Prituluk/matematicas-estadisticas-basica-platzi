const ladoA = document.querySelector('.lado');
const btnCalc = document.querySelector('.calc');

function calcPerimetroCuadrado() {
 const cA = ladoA.value;
 if (cA) {
  let resultado = +cA * 4;
 document.getElementById('resP').textContent = `Perimetro del cuadrado  = ${resultado}`;
 } else {
  document.getElementById('resP').textContent = `Para calcular el perimetro del CUADRADO necesitamos que nos proporciones el valor de uno de sus lados`;
 }
 
}
function calcAreaCuadrado() {
 const cA = ladoA.value;
 
 let resultado = +cA * +cA;
 document.getElementById('resA').textContent = `Area del cuadrado equilatero = ${resultado}`;
}
btnCalc.addEventListener('click', () => {
 calcPerimetroCuadrado();
 calcAreaCuadrado();
 preimTriang();
 areaTriang();
 circunferencia() ;
});


const ladoAT = document.querySelector('.ladoA');
const ladoBT = document.querySelector('.ladoB');
const baseT = document.querySelector('.base');

function preimTriang() {
 const val1 = ladoAT.value;
 const val2 = ladoBT.value;
 const base = baseT.value;

 let result = +val1 + +val2 + +base;
 if (val1 !== val2 ) {
  document.getElementById('resP').textContent = `Error, para calcular el perimetro de un triangulo equilatero los valores de cada lado deben ser iguales`;
 }else if (val2 !== base){
  document.getElementById('resP').textContent = `Error, para calcular el perimetro de un triangulo equilatero los valores de cada lado deben ser iguales`;
 }
 else if (val1 === val2 && val2 === base) {
  document.getElementById('resP').textContent = `Perimetro del triangulo equilatero = ${result}`;
  }
}
function areaTriang() {
 const val1 = ladoAT.value;
 const val2 = ladoBT.value;
 const base = baseT.value; 

 const altura = (val1 * Math.sqrt(3)) / 2;
 const area = (base * altura) / 2;
 
 if (val1 !== val2 ) {
  document.getElementById('resA').textContent = `Error, para calcular el area de un triangulo equilatero los valores de cada lado deben ser iguales`;
  
 }else if (val2 !== base){
  document.getElementById('resA').textContent = `Error, para calcular el area de un triangulo equilatero los valores de cada lado deben ser iguales`;
 }
 else if (val1 === val2 && val2 === base) {
  document.getElementById('resA').textContent = `Area del triangulo equilatero = ${area}`;
  }
}


const radio = document.querySelector('.radio') ;

function circunferencia() {
 const diametro =  (radio.value) * 2;
 const PI = Math.PI;
 const circunferencia = (diametro) * PI;
 const areaCirculo = Math.pow(radio.value, 2) * PI;
 if (!radio) {
  document.getElementById('resA').textContent = `Error, necesitamos que ingreses el valor del radio`;
 } else {
  document.getElementById('resC').textContent = `Circunferencia: ${circunferencia.toFixed(0)}`;
  document.getElementById('resP').textContent = `Diametro: ${diametro.toFixed(1)}`;
  document.getElementById('resA').textContent = `Area: ${areaCirculo.toFixed(1)}`;
 }


}


// Porcentajes


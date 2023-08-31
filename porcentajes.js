const precio = document.querySelector('.precio');
const descuento = document.querySelector('.descuento');
const btnDescuento = document.querySelector('.calcular');


const descuentos = [];

descuentos.push({
 name: 'd10',
 descuento: 10,
});

function calcD() {
 
 const p = precio.value;
 const d = descuento.value;
 const descuentoNeto = ((d / 100) * p);
 const resultado = p - descuentoNeto;
 if (!p && !d) {
  return;
 } else if (d > 90) {
  document.querySelector('.total').innerHTML = `descuento no admitido, por favor ingresa un monto valido `;
 } else {
  document.querySelector('.total').innerHTML = `$ ${resultado}`;
 }
 
}

btnDescuento.addEventListener('click', calcD);

function filtroProf(profesiones) {
 return salarios.find(profesion => profesion.name == profesiones);
}

function medianaPorProfesion(nombreProfesion) {
 const trabajos = filtroProf(nombreProfesion).trabajos;

 const salarios  = trabajos.map(function (elemento) {
  return elemento.salario;
 });
 const medianaSalarios = calcMediana(salarios);
 console.log(medianaSalarios);
 console.log(salarios);
}
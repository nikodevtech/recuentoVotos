/**
 *Este script es el encargado de almacenar los votos para las Elecciones Generales en el almacenamiento local
 *del navegador del usuario. Cuando se envía el formulario de votación, se comprueba si el DNI introducido ya ha votado
 *antes en estas elecciones. Si no ha votado, se registra el voto en el almacenamiento local del navegador para mantener
 *un registro de los votos de las Elecciones Generales.
 * @returns
 */
function guardarVotoGen() {
  let dni = document.getElementById("dni").value;
  let partido = document.querySelector('input[name="partido"]:checked');
  let votosGen = JSON.parse(localStorage.getItem("votosGen")) || {};

  if (dni in votosGen) {
    alert("Ya has votado con este DNI");
    return false; // Evita que se envíe el formulario
  }

  if (!partido) {
    alert("Debes seleccionar al menos un partido político.");
    return false; // Evita que se envíe el formulario
  }

  votosGen[dni] = partido.value;
  localStorage.setItem("votosGen", JSON.stringify(votosGen));
  alert("Tu voto ha sido registrado");

  return true; // Permite el envío del formulario cuanto todo está validado
}

/**
 *Este script es responsable de almacenar los votos para las Elecciones municipales en el almacenamiento local
 *del navegador del usuario. Cuando se envía el formulario de votación, se comprueba si el DNI introducido ya ha votado
 *antes en estas elecciones. Si no ha votado, se registra el voto en el almacenamiento local del navegador para mantener
 *un registro de los votos de las Elecciones municipales.
 */
function guardarVotoMun() {
  let dni = document.getElementById("dni").value;
  let partido = document.querySelector('input[name="partido"]:checked');
  let votosMun = JSON.parse(localStorage.getItem("votosMun")) || {};

  if (dni in votosMun) {
    alert("Ya has votado con este DNI");
    return false; // Evita que se envíe el formulario
  }
  if (!partido) {
    alert("Debes seleccionar al menos un partido político.");
    return false; // Evita que se envíe el formulario
  }
  votosMun[dni] = partido.value;
  localStorage.setItem("votosMun", JSON.stringify(votosMun));
  alert("Tu voto ha sido registrado");

  return true; // Permite el envío del formulario cuanto todo está validado
}

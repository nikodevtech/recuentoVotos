/*
Este script utiliza la biblioteca de JavaScript Chart.js para crear gráficos de votos para elecciones generales y municipales. 
La función `limpiarCanvas()` se encarga de obtener el canvas por su id y destruir la instancia de la gráfica si existe. 
La función `mostrarGraficoGeneral()` obtiene los votos del almacenamiento local, calcula la cantidad de votos para cada partido político 
y crea un gráfico de dona para los resultados de las elecciones generales. 
La función `mostrarGraficoMunicipal()` hace lo mismo pero para las elecciones municipales. Ambas funciones crean un objeto Chart 
con las opciones y los datos necesarios para mostrar la gráfica.
*/
function limpiarCanvas() {
  // Obtener el canvas por su id
  var canvas = document.getElementById("canvasVotos");

  // Obtener la instancia de la gráfica
  var chartInstance = Chart.getChart(canvas);

  // Si la instancia existe, destruirla
  if (chartInstance) {
    chartInstance.destroy();
  }
}

function mostrarGraficoGeneral() {
  // Obtener los votos del almacenamiento local
  var votosGen = JSON.parse(localStorage.getItem("votosGen")) || {};

  // Calcular la cantidad de votos para cada partido político
  var psoe = 0,
    pp = 0,
    podemos = 0,
    vox = 0,
    otro = 0;
  for (var dni in votosGen) {
    switch (votosGen[dni]) {
      case "psoe":
        psoe++;
        break;
      case "pp":
        pp++;
        break;
      case "podemos":
        podemos++;
        break;
      case "vox":
        vox++;
        break;
      case "otro":
        otro++;
        break;
    }
  }

  // Crear el objeto Chart
  var ctx = document.getElementById("canvasVotos").getContext("2d");
  var chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["PSOE", "PP", "Podemos", "Vox", "Otro"],
      datasets: [
        {
          backgroundColor: [
            "#f44336",
            "#2196f3",
            "#550069",
            "#4caf50",
            "#607d8b",
          ],
          data: [psoe, pp, podemos, vox, otro],
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Resultados votaciones generales",
      },
      plugins: {
        legend: {
          labels: {
            color: "#FFFFFF", // Cambia el color del texto de la leyenda
          },
        },
      },
    },
  });
}

function mostrarGraficoMunicipal() {
  // Obtener los votos del almacenamiento local
  var votosMun = JSON.parse(localStorage.getItem("votosMun")) || {};

  // Calcular la cantidad de votos para cada partido político
  var psoe = 0,
    pp = 0,
    podemos = 0,
    vox = 0,
    pacma = 0,
    ciudadanos = 0,
    otro = 0;
  for (var dni in votosMun) {
    switch (votosMun[dni]) {
      case "psoe":
        psoe++;
        break;
      case "pp":
        pp++;
        break;
      case "podemos":
        podemos++;
        break;
      case "vox":
        vox++;
        break;
      case "pacma":
        pacma++;
        break;
      case "ciudadanos":
        ciudadanos++;
        break;
      case "otro":
        otro++;
        break;
    }
  }

  // Crear el objeto Chart
  var ctx = document.getElementById("canvasVotos").getContext("2d");
  var chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["PSOE", "PP", "Podemos", "Vox", "PACMA", "Ciudadanos", "Otro"],
      datasets: [
        {
          backgroundColor: [
            "#f44336",
            "#2196f3",
            "#550069",
            "#4caf50",
            "#91f299",
            "#e35502",
            "#607d8b",
          ],
          data: [psoe, pp, podemos, vox, pacma, ciudadanos, otro],
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Resultados votaciones municipales",
      },
      plugins: {
        legend: {
          labels: {
            color: "#FFFFFF", // Cambia el color del texto de la leyenda
          },
        },
      },
    },
  });
}

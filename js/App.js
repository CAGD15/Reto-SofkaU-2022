function questions(answer = 0) {
  if (answer) {
    for (var i = 0; i < checkQuestions.length; i++) {
      if (checkQuestions[i].checked) {
        checkQuestions[i].checked = false;
        TrackPosition = i;
        break;
      }
    }

    // Si no seleccionas una respuesta

    if (TrackPosition === undefined) {
      swal("Porfavor, Selecciona una  respuesta para continuar.");
      return;
    } else {
      //Cuando Si, seleccionas la respuesta correcta
      selected = checkQuestions[i].id.substr(-1);
      if (selected == correctAnsIndex) {
        points += LevelPoints[round];
        round++;
      } else {
        swal({
          title: "Game Over!",
          text: "Juega de nuevo para mejorar la puntuacion",
          icon: "warning",
          button: "Salir!",
          dangerMode: true,
        }).then(function () {
          window.location = "../index.html";
        });
      }
    }

    // cuando completas todas las preguntas o rondas
    if (round == 5) {
      document.getElementById("points").innerHTML = points + " points";
      nick = prompt(
        "Game Completed! Puntaje Obtenido " +
          points +
          " Puntos. \n Registra tu Nick."
      );
      writeDB(nick, points);
    }
  }

  // Aplicando Math para seleccionar 5 preguntas aleatoriamnete, segun la dificultad.
  question = Math.floor(Math.random() * 4);
  correctAnswer = LevelDataQuiz[round][question][1];
  allAnswers = [
    LevelDataQuiz[round][question][1],
    LevelDataQuiz[round][question][2],
    LevelDataQuiz[round][question][3],
    LevelDataQuiz[round][question][4],
  ];
  // Para Sortear las respuestas aleatoriamente tambien.
  allAnswers.sort(function () {
    return Math.random() - 0.5;
  });
  correctAnsIndex = allAnswers.indexOf(correctAnswer);
  DrawQuestionGame();
}

//A continuacion una funcion cuando no contestas ninguna pregunta,
// si obtienes cero no entras a la tabla de puntuaciones

function retreat() {
  if (points == 0) {
    swal("Tienes Cero Punto, No entras A la tabla de puntiacion, Adios.").then(
      function () {
        window.location = "../index.html";
      }
    );
    return;
  }
  nick = prompt(
    " Saliste Del Juego, Obtuviste " +
      points +
      " Puntos!\n Escribe Aqui Tu nick"
  );

  writeDB(nick, points);
}

// Funcion que te redirige a la tabla de puntuaciones
function ScoresPointsTable() {
  ok = confirm(+nick + "Ver tabla de puntuacion");

  if (ok == true) {
    window.location.href = "../templates/highScores.html";
  } else {
    window.location.href = "../index.html";
  }
}

// Funcion para dibujar las preguntas en el template game 
function DrawQuestionGame() {
  //Points
  document.getElementById("points").innerHTML = points + " <br> Puntos";
  //question
  document.getElementById("question").innerHTML =
    LevelDataQuiz[round][question][0];
  

    // Para dibujar las rondas y los puntos obtenidos a medida que avanza a cada nivel
  switch (round) {
    case 0:
      level = "Very Easy";
      break;
    case 1:
      level = "Ease";
      break;
    case 2:
      level = "medium";
      break;
    case 3:
      level = "Hard";
      break;
    case 4:
      level = "Supreme";
      break;
  }
  document.getElementById("round").innerHTML =
    " Level: <b>" +
    level +
    "</b>.  <br>   Puntos a obtener: <b>" +
    LevelPoints[round] +
    " pts</b>.";
  //Para comprobar si seleccionamos la respuesta correcta
  var radioAnswers = document.querySelectorAll(".form-check-label");
  for (var i = 0; i < radioAnswers.length; i++) {
    radioAnswers[i].innerHTML = allAnswers[i];
  }
}



// Funcion para añadir los datos a la Base de datos


function writeDB(nick, points) {
  db.open();
  db.highScores.add({ nick: nick, points: points });
  sleep(1000).then(() => {
    ScoresPointsTable();
  });
}



//Dibujando la tabla de puntuaciones

function showHighScores() {
  db.open();
  db.highScores
    .where("points")
    .above(0)
    .reverse()
    .toArray(function (temps) {
      for (var i = 0; i < temps.length; i++) {
        //escribiendo fila a fila la tabla
        document.getElementById("contentScores").innerHTML += `
		<tr ${
      temps[i].id == temps.length
        ? 'style="background-color: #7777ef;"'
        : 'style="background-color: white;"'
    }>
		      <th scope="row">${i < 3 ? i + 1 + " 🌟" : i + 1}</th>
		      <td>${temps[i].nick}</td>
		      <td>${temps[i].points}</td>
		</tr>`;
      }
    });
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

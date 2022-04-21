const level1 = [
              [
                "¿Quien es el papa de bart en los Simpson?",
                "Homero",
                "Flander",
                "Mouse",
                "Carl"
              ],
              [
                "¿Donde vivia Dumbo?",
                "En un Circo",
                "En un Barco",
                "En la Selva",
                "En un Lago"
              ],
              [
                "¿Quien Es el creador del chavo del ocho?",
                "Chespirito",
                "Bob Patiño",
                "La chilindrina",
                "Doña Clotirdes",
              ],
              [
                "¿Cuel es la Frase de Bob Bunny?",
                "¿Que hay de nuevo viejo?",
                "Oh no Mataron kenny",
                "Yabba-Dabba-Doo",
                "Para proteger al mundo de la devastación..."
              ],
              [
                "¿Como se llama la pelicula inspirada en Colombia?",
                "Encanto",
                "Coco",
                "Red",
                "Zootopia"
              ]
             ];

const level2 = [
              [
               "¿Cuándo acabó la II Guerra Mundial?",
                "1945",
                "1980",
                "1810",
                "1925"
              ],
              [
                "¿En qué año fue el descubrimiento de América?",
                "1492",
                "1310",
                "1500",
                "1480"
              ],
              [
                "¿Que significado tiene LOVE en español?",
                "Amor",
                "Odio",
                "Lindo",
                "Volar"
              ],
              [
                "¿Cuál es el idioma más popular del mundo?",
                "Ingles",
                "Español",
                "Chino(mandarin)",
                "Ruso"
              ],
              [
                "¿Cuál es la capital de Filipinas?",
                "Manila",
                "Quito",
                "Tokyo",
                "Helsinki"
              ]
             ]

const level3 = [
              [
                "¿Cómo murió Vincent Van Gogh?",
                "Suicidio",
                "Sobredosis",
                "Disparo en la Cabeza",
                "Ataque al corazon"
              ],
              [
                "¿Quién es el autor de la celebrada historieta Mafalda?",
                "Quino",
                "Stan lee",
                "Neil Gaiman",
                "Jim Davis"
              ],
              [
                "¿En qué año nació Harry Potter?",
                "1980",
                "2000",
                "1920",
                "1985"
              ],
              [
                "¿Cuál fue la primera película en ganar el Óscar?",
                "Alas",
                "Avenger",
                "Clip",
                "El efecto mariposa"
              ],
              [
                "¿En qué año se estrenó el episodio final de la serie The Office?",
                "2013",
                "2010",
                "2015",
                "2011"
              ]
             ]

const level4 = [
              [
                "¿Qué deporte practica Gemma Mengual?",
                "Natación sincronizada",
                "Futbol",
                "Tennis",
                "Golf"
              ],
              [
                "¿Cuáles equipos de fútbol protagonizaron el partido apodado Maracanazo?",
                "Uruguay y Brasil",
                "Brasil y Argentina",
                "Uruguay y Paraguay",
                "Colombia y Venezuela"
              ],
              [
                "¿Quién aterrizó el primer 900 de la historia del skateboarding? ",
                "Tony Hawk",
                "Jay Adams",
                "Steve Caballero",
                "Danny Way"
              ],
              [
                "¿Qué animal fue la mascota del Giro de Italia?",
                "Un lobo",
                "Un leon",
                "Un perro",
                "Un gato"
              ],
              [
                "¿Qué significan las siglas ATP?",
                "Asociación de Tenistas Profesionales",
                "Asociación de Terraplanistas Profesionales",
                "Asociación de Taller Profesional",
                "Asociación de Tenistas Plobrematicos"
              ]
             ]


const level5 = [
              [
                "Para una clase que tenga métodos get y set pero con atributos privados, ¿qué pilar de la programación se está aplicando?",
                "Encapsulamiento",
                "Evitar efectos secundarios",
                "Abstracciones por métodos",
                "Programación funcional"
              ],
              [
                "var plan = customer == null ? plan.basico():customer.plan(); ¿Qué pasaría si el customer no existe?",
                "El plan es el básico",
                "El plan es según el consumidor",
                "Saca un error en el código",
                "El plan no se puede definir"
              ],
              [
                "Dentro de las bases de la programación tenemos los siguientes paradigmas:",
                "Programación funcional",
                "Programación orientada a atributos",
                "Programación orientada a clases",
                "Programación orientada a objetos"
              ],
              [
                "Los sistemas operativos que son libres y que están basados en Unix son:",
                "Debian",
                "Ubuntu",
                "Windows",
                "Mac"
              ],
              [
                "Una consulta para ejecutar todos los datos de una tabla llamada PERSONA, tiene la siguiente estructura:",
                "SELECT * FROM PERSONA",
                "SELECT FROM PERSONA",
                "SELECT ALL FROM PERSONA",
                "SELECT PERSONAS"
              ]
             ]

const LevelDataQuiz = [level1, level2, level3, level4, level5]
const LevelPoints = [100,400,600,700,1200]
const checkQuestions = document.getElementsByClassName("form-check-input")

var round = 0; level = "";
    TrackPosition = undefined; 
    points = 0; nick = ""; 
    readScores = []; 
    paperHighScores = "";

// Declaramos la  base de datos de Dexie
var db = new Dexie("ScoreTable");
db.version(1).stores({ highScores: "++id,nick,points" });


var hypnoticBall, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  //ref() é usado para se referir à localização do valor do banco de dados com o qual nos preocupamos.
  var hypnoticBallPosition;

  //.on() cria um ouvinte, que continua acompanhando as mudanças no banco de dados.
  
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      
    }
    else if(keyDown(RIGHT_ARROW)){
      
    }
    else if(keyDown(UP_ARROW)){
      
    }
    else if(keyDown(DOWN_ARROW)){
      
    }
    drawSprites();
  
}

function writePosition(x,y){
  //.set() é usado para definir o valor no banco de dados.
  
}

//Na função readPosition(), podemos ler a posição do valor no banco de dados.
function readPosition(data){

  //Vamos ler os dados da posição e atribuir os valores x e y da posição da bola para o seu sprite no banco de dados.
 
}

//Se houver um erro na leitura dos valores no banco de dados, a função showError() é chamada.
function showError(){
  
}

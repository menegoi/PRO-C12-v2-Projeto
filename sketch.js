var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("images/garden.png");
  rabbitImg = loadImage("images/rabbit.png");
  appleImg = loadImage("images/apple.png");
  orangeImg = loadImage("images/orangeLeaf.png");
  redImg = loadImage("images/redLeaf.png");
}


function setup(){
  
  createCanvas(400,400);

  // Sprite do jardim de fundo
  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  //Sprite do Coelho
  rabbit = createSprite(160,340,20,20);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // Fazer o coelho se mover na horizontal com o mouse
  
  
  //Criar bordas do jogo
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  // Gerar de forma aleatória maças e folhas


  // Desenhar sprites do jogo
  drawSprites();

}

function createApples() {

  
}

function createOrange() {

}

function createRed() {

}

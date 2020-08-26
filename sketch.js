const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(770,450,80,80);
    box2 = new Box(1000,450,80,80);
    box3= new Box(770,330,80,80);
    box4 = new Box(1000,330,80,80);
    box5= new Box(885,210,80,80);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(885,450);
    log1 = new Log(885,400,350,PI/2);
    pig2 = new Pig(885,330);
    log2=new Log(885,250,350,PI/2);
    log3= new Log(820,200,155,PI/7);
    log4 = new Log(950,200,155,-PI/7);
    bird1= new Bird(450,450);

   

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}
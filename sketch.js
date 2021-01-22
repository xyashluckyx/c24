const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,log1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(800,320)
    log1=new Log(800,280,300,PI/2);
    box3 = new Box(700,260,70,70);
    box4 = new Box(900,260,70,70);
    pig2=new Pig(800,270)
    log2=new Log(800,230,300,PI/2);
    box5 = new Box(800,200,70,70);
    log3=new Log(760,160,150,PI/7);
    log4=new Log(860,160,150,-PI/8);
    bird=new Bird(200,200);

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
    bird.display();
}
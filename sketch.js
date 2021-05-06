const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var hammer,rubber;
var iron,stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1600,
          height: 700,
          wireframes: false
        }
      });
    Render.run(render);

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber =  new Rubber(400, 60, 90, 38);
    iron = new Iron(800, 200, 30, 70);
    stone =  new Stone(600, 60, 80, 90);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    stone.display();
    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
 
}
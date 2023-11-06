
let systems = [];
let gravity;
let x = 0;

function setup() {
  createCanvas(720, 400);
  gravity = createVector(0, 0.05);
  
}
function draw() {
  let wind = createVector(0, -0.01);
  x += 0.07;
  let turbulence = createVector(-cos(x),- tan(x));
  
  background(0);
  for (let s of systems) {
    s.addParticle();
    s.run();
     //s.add(wind);
      s.add(turbulence);
  }
}
function mouseClicked() {
  let mpos = createVector(mouseX, mouseY);
  let s = new ParticleSystem(mpos);
  systems.push(s);
}

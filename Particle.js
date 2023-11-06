
// A simple Particle class

class Particle {
    constructor(position) {
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.position = position.copy();
        this.lifespan = 255;
        this.colorspan = 150;
        this.size = 12;
        this.col = 0;
    }
    run() {
        this.update();
        this.display();
    }
    applyForce(aForce){
        this.acceleration.add(aForce);
    }

    // Method to update position
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 4  ; // 알파값 줄어짐
        this.colorspan += this.velocity.x;
        this.size += 2;
        this.col  = 300*noise( this.size );
        print( this.col );
        this.acceleration = createVector(0, 0); //가속도 초기화
    }

    // Method to display
    display() {
        noStroke();
        
        fill(this.colorspan * 1.5,  this.colorspan , this.col , this.colorspan);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }

    // Is the particle still useful?
    isDead() {
        return this.lifespan < 0;
    }
}
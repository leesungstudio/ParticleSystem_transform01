class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }
    addParticle() {
        if (frameCount % 3  == 0){ // 프레임 나누어서 
        this.particles.push(new Particle(this.origin));
        }
    }
    add(aForce){
        for (let p of this.particles){
            p.applyForce(aForce)
        }
    }
    run() {
        for (let i = this.particles.length - 1; i >= 0; i--) {

            let p = this.particles[i];
            p.run();

            if (p.isDead()) {
                this.particles.splice(i, 1);  //어레이 엘리먼트 죽임
            }
        }
    }
}
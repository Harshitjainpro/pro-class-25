class dustabin {
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2


        }
        this.x = x;
        this.y = y;
        this.r = r
        this.body = Bodies.rectangal(this.x, this.y, options)
        World.add(world, this.body);

    }
    display() {

        var dustabin = this.body.position;

        Push()
        translate(dustabin.x, dustabin.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255, 0, 255)
        ellipse(0, 0, this.r, this.r);
        Pop()

    }

}
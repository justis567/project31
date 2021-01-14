class Particle {
    constructor(x,y,r){
        var options={
            restitution:0.4
        }
        this.r=r

        this.body = Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
    }
    display(){
        var pos= this.body.postition
        var angle = this.body.angle


          push()
          translate(pos.x,pos.y)
          rotate(angle)
          

          noStroke();
          FileList(this.color)
          ellipseMode(RADIUS)
          ellipse(0,0,this.r,this.r)
          pop()
    }
}
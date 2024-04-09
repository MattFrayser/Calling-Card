

class Panel1 extends Panel {

constructor(){
  super();
    
  this.frontCard = loadImage('assets/card.png');
  this.sunBall = loadImage('assets/sun.png');
  this.moon = loadImage('assets/darkCircle.png');
  this.rays = loadImage('assets/beams.png');
  this.xSpeed = 0.1;
  this.x = 0;
  this.z = 0;
  this.zSpeed = 0.07;
}
  
render() {
  background(58,54,54);
  
  this.z = this.z + this.zSpeed;
  this.x = this.x + this.xSpeed;
  
  if (this.z > 4 || this.z < -4){
    this.zSpeed *= -1;
  }
  
  if(this.x > 75 || this.x < 0){
    this.xSpeed *= -1;
  }
  
  // Load card
 image(this.frontCard, 0, 0, width, height, 0, 0,this.frontCard.width, this.frontCard.height);
  
  
  
  // Moon
  image(this.sunBall, 90, 60, 35, 35);
  
  image(this.moon, 55 + this.x, 60, 35, 35);
  
  // Sun
  image(this.sunBall, width - 90, 60, 35 + this.z, 35 + this.z );
  
  // Rays
  image(this.rays, width - 113, 38, 80 + this.z, 80 + this.z);

  
  }


}

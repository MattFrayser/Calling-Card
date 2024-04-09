
class Panel4 extends Panel {
  constructor(){
  super();
  this.x = 0;
  this.y = 0;
  this.speed = 0.8;
  this.ySpeed = 0.3;
  this.direction = 1;


  this.plants = loadImage('assets/plants.png');
  this.bug = loadImage('assets/vector.png');
  
}

render() {
  
  // Update X and Y
  this.x = this.x + this.speed;
  this.y = this.y + this.ySpeed;
  
  //Check for random bounce
  if(random(1, 400) < 10){
  
  this.ySpeed *= -1;
    
  }
  
  // Check if image should be flipped 
  if (this.direction == -1){
      push();
      scale(-1, 1);
      image(this.bug, -this.x - this.bug.width, 50 + this.y);
      pop();
    } 
  
   // Background
   image(this.plants, 0, 0, width, height, 0, 0, this.plants.width, this.plants.height, COVER);
  
  // Check boundries and set what direction bug should face
  if(this.x > 300 || this.x < 0){
    this.speed *= -1;
    this.direction *= -1;
    this.ySpeed *= -1;
  } 
  
  if (this.y > 400 || this.y < 0){
    this.ySpeed *= -1;
  }
  
  noStroke();
  
  // Draw bug: direction chooses which way bug should face
    if (this.direction == -1){
      push();
      scale(-1, 1);
     image(this.bug, -this.x + 70 - this.bug.width, 100 + this.y, this.bug.width / 3, this.bug.height / 3);
      pop();
    } 
  else {
    image(this.bug, 70 + this.x, 100 + this.y, this.bug.width / 3, this.bug.height / 3);
  }
  
  
}
}
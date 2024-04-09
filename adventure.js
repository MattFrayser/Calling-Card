class Panel3 extends Panel {
  
  constructor() {
    super() ; 
  
    this.darkBlue = color(0, 0, 50); // Dark blue
    this.lightBlue = color(173, 216, 230); // Light blue
    this.currentColor = this.darkBlue;
    this.cloudsX = 0;
  
    // Load background
    this.mountains = loadImage('assets/background.png');
    this.clouds = loadImage('assets/clouds.png');
  
}

render() {
  
  // Chaning Background color
  let x = sin(frameCount * 0.006); 
  x = x + 1;

  let lerpedColor = lerpColor(this.darkBlue, this.lightBlue, x / 2);

  background(lerpedColor);
  
  if (this.cloudsX > 1000){
    this.cloudsX = 0;
  }

  this.cloudsX = this.cloudsX + 1;
  
  image(this.mountains, 0, 0, width, height + 20, 0, 0, this.mountains.width, this.mountains.height, COVER);
  
  image(this.clouds, -500 + this.cloudsX, 0, width, height + 50, 0, 0, this.clouds.width, this.clouds.height, COVER);

  
  
}
}
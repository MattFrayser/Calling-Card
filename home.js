
class Panel6 extends Panel{
  constructor(){
    super();
    this.homepage = loadImage('assets/home_page.png');
      this.p0 = false;
      this.p1 = false;
      this.p2 = false;
      this.p3 = false;
      this.p3 = false;
      this.col1X = 0;
      this.row1Y = 0;
      this.col2X = 165;
      this.row2Y = 140;
      this.col3X = 325;  
      this.pH = 135;
      this.pW = 150;
  }
render(){
  background(0);
  
  push()
  fill(255, 255, 255, 170);
  if(this.p0){ rect(this.col1X, this.row1Y, this.pW + 20, this.pH + 10); }
  if(this.p1){ rect(this.col2X, this.row1Y, this.pW + 20, this.pH + 10); }
  if(this.p2){ rect(this.col3X + 10, this.row1Y, this.pW + 20, this.pH + 10); }
  if(this.p3){ rect(this.col1X, this.row2Y + 5, this.pW + 15, this.pH + 20); }
  if(this.p4){ rect(this.col2X, this.row2Y + 5, this.pW + 20, this.pH + 20); }
  pop();
  
  image(this.homepage, 0, 0, width, height);
  
  push()
  rect(350, 180, 20, 20);
  rect(350, 220, 20, 20);
  rect(350, 260, 20, 20);
  pop();
  
  textSize(18);
  fill('white');
  stroke(1);
  strokeWeight(1.7);
  text("Puzzle Nav", 375, 195);
  text("Toggle Arrows", 375, 235);
  text("Toggle Q mark", 375, 275);
    
  
  
}
      
}

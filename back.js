
class Panel5 extends Panel{
  constructor(){
    super();
    this.card = loadImage('assets/backcard.png');
    this.bulb = loadImage('assets/lightbulb.png');
    
  }
 
render(){
  background(58,54,54);
  
    //  card
   image(this.card, 0, 0, width, height, 0, 0, this.card.width, this.card.height);
  
  // Use sin function to create a pulsating effect
  let strobe = 150 * sin(frameCount * 0.02);
  
  noStroke();

  // fill orb yellow and strobe
  fill(241, 239, 180, strobe);

  
  
  // bulb
  image(this.bulb, 225, 25, this.bulb.width / 3, this.bulb.height / 3)
  
  // Draw the orb
  ellipse(255, 57, 60, 60);
  }
}
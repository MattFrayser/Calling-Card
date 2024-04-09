class Panel2 extends Panel {
  constructor() {
    super();

    // Load images
    this.astro1 = loadImage('assets/man1.png');
    this.astro2 = loadImage('assets/man2.png');
    this.question = loadImage('assets/questionmark.png');
    this.astro1X = 50;
    this.astro1Y = 150;
    this.astro2X = 350;
    this.astro2Y = 50;
    this.dragegingA1 = false;
    this.draggingA2 = false;
    this.offsetX1 = 0;
    this.offsetY1 = 0;
    this.offsetX2 = 0;
    this.offsetY2 = 0;
    this.collision = false;
    
    // Array to store stars
    this.stars = [];

    // Make 100 stars
    for (let i = 0; i < 100; i++) {
      this.stars.push(new Star());
    }
    
  }

  update() {
    // Update stars
    for (let star of this.stars) {
      star.update();
    }
  }

  render() {
    // Black background
    background(0);

    // Draw stars
    for (let star of this.stars) {
      star.show();
    }

    if (this.draggingA1) {
    this.astro1X = mouseX + this.offsetX1;
    this.astro1Y = mouseY + this.offsetY1;
  }
    if (this.draggingA2) {
    this.astro2X = mouseX + this.offsetX2;
    this.astro2Y = mouseY + this.offsetY2;
  }
    
    let distance = dist(this.astro1X, this.astro1Y, this.astro2X, this.astro2Y);
    
    if (distance < 50){
      pm.nextPanel();
      this.astro1X = 50;
      this.astro1Y = 150;
      this.astro2X = 350;
      this.astro2Y = 50;
      this.offsetX1 = 0;
      this.offsetY1 = 0;
      this.offsetX2 = 0;
      this.offsetY2 = 0;
    }
    
    // Set spacemen
    image(this.astro1, this.astro1X, this.astro1Y, 120, 100);
    image(this.astro2, this.astro2X, this.astro2Y, 120, 100);
  }
}


// Star class
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 5);
    this.alpha = random(100, 300); // Transparency
    this.twinkle = random(0.01, 0.1);
  }

  update() {
    if (random() < this.twinkle) {
      this.alpha = random(100, 255);
    }
  }

  show() {
    fill(255, 255, 255, this.alpha);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}


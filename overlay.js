function isHovering(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

class Widget {
  constructor(){
    return this;
  }
  click(){
    return false;
  }
  update(){
    
  }
  render(){
    
  }
}

class Questionmark extends Widget {
  constructor(img, x, y, w, h){
    super();
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.visable = false;
    this.removeInstruct = false;
    /* Image imports */
    this.pop1 = loadImage("assets/popup1.png");
    this.pop2 = loadImage("assets/popup2.png");
    this.pop3 = loadImage("assets/popup3.png");
    this.pop4 = loadImage("assets/popup4.png");
    this.pop5 = loadImage("assets/popup5.png");
    this.instruct = loadImage("assets/instructions.png");
    
    return this;
  }
    update() {
      
      /* Check mouse position for hover functionality */
      if(mouseX > 400 && mouseX < 450 && mouseY > 210 && mouseY < 250){
        this.visable = true;
      }
      else {
        this.visable = false;
      }
    
    }
    render() {
      
    if(toggleQMark || !puzzleSolved){
      /* Panel 0 requires an extra pop-up */
      if(pm.getPanelId() === 0 && !this.removeInstruct){
        image(this.instruct, 110, 200, 300, 75);
      }
      /* Panel 2 requires a black background to to see ? */
      else if(pm.getPanelId() === 2){
        fill(0);
        ellipse(this.x + 17, this.y + 21, this.w + 10, this.h);
      }
      
      //Question mark image
      image(this.img, this.x, this.y, this.w, this.h);
      
      /* Check for hover over ? and display message for that panel */
      if (pm.getPanelId() === 0 && this.visable){
        this.removeInstruct = true;
        image(this.pop1, 110, 200, 300, 75);
        
      }
      else if (pm.getPanelId() === 1 && this.visable){
        image(this.pop2, 110, 200, 300, 75);
      }
      else if (pm.getPanelId() === 2 && this.visable){
        image(this.pop3, 110, 200, 300, 75);
      
      }
      else if (pm.getPanelId() === 3 && this.visable){
        image(this.pop4, 110, 200, 300, 75);
      }
      else if (pm.getPanelId() === 4 && this.visable){
        image(this.pop5, 110, 200, 300, 75);
      }
    }
  }
}

class ArrowRight extends Widget {
  
  constructor(img, x, y, w, h, hoverImg){
    super();
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.hoverImg = hoverImg;
    this.hovering = false;
    
  
    return this;
  }
  
    update() {
       this.hovering = isHovering(this.x, this.y, this.w, this.h);
    }
  
    click(){
      
          /* Front */
      if(pm.getPanelId() === 0 && this.hovering) {
  
          pm.gotoPanel(1);
        
      }
      
      /* Space */
      else if(pm.getPanelId() === 1 && this.hovering ) {
        
          pm.gotoPanel(2);
        
      }
      
      /* Adventure */
      else if(pm.getPanelId() === 2 && this.hovering) {
      
          pm.gotoPanel(3);
    
      }
      
      /* Bug */
      else if(pm.getPanelId() === 3 && this.hovering) {
    
          pm.gotoPanel(4);
        
      }
      
      /* Back*/
      else if(pm.getPanelId() === 4 && this.hovering) {

          pm.gotoPanel(0);
        
      }
    }  
  
    render() {
      
      if (puzzleSolved && pm.getPanelId() != 5 && toggleArrows){
        
        if (this.hovering){
          image(this.hoverImg, this.x, this.y, this.w, this.h);
        }
        else {
          image(this.img, this.x, this.y, this.w, this.h);
        }
      }
    }  
}

class ArrowLeft extends Widget {
  constructor(img, x, y, w, h, hoverImg, clickImg){
    super();
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.hoverImg = hoverImg;
    this.hovering = false;
    this.clicked = false;
  
    return this;
  }
  
    update() {
    
      this.hovering = isHovering(this.x, this.y, this.w, this.h);
  
    }
  
    click(){
      
      /* Front */
      if(pm.getPanelId() === 0 && this.hovering) {
  
          pm.gotoPanel(4);
        
      }
      
      /* Space */
      else if(pm.getPanelId() === 1 && this.hovering ) {
        
          pm.gotoPanel(0);
        
      }
      
      /* Adventure */
      else if(pm.getPanelId() === 2 && this.hovering) {
      
          pm.gotoPanel(1);
    
      }
      
      /* Bug */
       else if(pm.getPanelId() === 3 && this.hovering) {
    
          pm.gotoPanel(2);
        
      }
      
      /* Back*/
      else if(pm.getPanelId() === 4 && this.hovering) {

          pm.gotoPanel(3);
        
      }
    } 
  
    render() {
      
      if (puzzleSolved && pm.getPanelId() != 5 && toggleArrows){
        
        if (this.hovering){
          image(this.hoverImg, this.x, this.y, this.w, this.h);
        }
        else {
          image(this.img, this.x, this.y, this.w, this.h);
        }
      }
    }  
}

class HomeButton extends Widget {
  constructor(img, x, y, w, h, hoverImg){
    super();
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.hoverImg = hoverImg;
    this.hovering = false;
    
    return this;
  }
  
    update() {
      
        this.hovering = isHovering(this.x, this.y, this.w, this.h);

    }
  
    click(){
      
      if(this.hovering && pm.getPanelId() != 5){
        pm.gotoPanel(5);
      }
      
    }
      
    render() {
      
      if (puzzleSolved && pm.getPanelId() != 5) {
        
      if (this.hovering){
          image(this.hoverImg, this.x, this.y, this.w, this.h);
        }
      else {
          image(this.img, this.x, this.y, this.w, this.h);
      }
    } 
      
}
}

class HomeNav extends Widget{
  constructor(){
    
    super();
    this.col1X = 0;
    this.row1Y = 0;
    this.col2X = 165;
    this.row2Y = 140;
    this.col3X = 325;  
    this.pH = 135;
    this.pW = 150;
    this.hoveringP0 = false;
    this.hoveringP1 = false;
    this.hoveringP2 = false;
    this.hoveringP3 = false;
    this.hoveringP4 = false;
    this.hoveringB1 = false;
    this.hoveringB2 = false;
    this.hoveringB3 = false;
    this.checkB1 = false;
    this.checkB2 = true;
    this.checkB3 = false;
    return this;
    
  }
  update(){ 
    
    
    if (pm.getPanelId() === 5) {
      
      this.hoveringP0 = isHovering(this.col1X, this.row1Y, this.pW, this.pH);
      this.hoveringP1 =  isHovering(this.col2X, this.row1Y, this.pW, this.pH);
      this.hoveringP2 = isHovering(this.col3X, this.row1Y, this.pW, this.pH);
      this.hoveringP3 =  isHovering(this.col1X, this.row2Y, this.pW, this.pH);
      this.hoveringP4 =  isHovering(this.col2X, this.row2Y, this.pW, this.pH);
      
        
      /* Button Hovering */
      this.hoveringB1 = isHovering(350, 180, 20, 20);
      this.hoveringB2 = isHovering(350, 220, 20, 20);
      this.hoveringB3 = isHovering(350, 260, 20, 20);

    }
    else{
      
    /* We are not hovering anymore */
    this.hoveringP0 = false;
    this.hoveringP1 = false;
    this.hoveringP2 = false;
    this.hoveringP3 = false;
    this.hoveringP4 = false;
    this.hoveringB1 = false;
    this.hoveringB2 = false;
    this.hoveringB3 = false;
    
    }
    

    
  }
  click(){
    
    if(pm.getPanelId() === 5) {
      
      /* Panel swap based off hover */
      if(this.hoveringP0){ pm.gotoPanel(0); }
      else if(this.hoveringP1){ pm.gotoPanel(1); }
      else if(this.hoveringP2){ pm.gotoPanel(2); }
      else if(this.hoveringP3){ pm.gotoPanel(3); }
      else if(this.hoveringP4){ pm.gotoPanel(4); }
      
      /* Puzzle Nav setting */
      else if(this.hoveringB1 && !this.checkB1){ this.checkB1 = true; puzzleNav = true; }
      else if(this.hoveringB1 && this.checkB1){ this.checkB1 = false; puzzleNav = false; }
      
      /* toggle Arrows setting */
      else if(this.hoveringB2 && !this.checkB2){ this.checkB2 = true; toggleArrows = true; }
      else if(this.hoveringB2 && this.checkB2){ this.checkB2 = false; toggleArrows = false; }
     
      /* toggle Q mark */
      else if(this.hoveringB3 && !this.checkB3){ this.checkB3 = true; toggleQMark = true;}
      else if(this.hoveringB3 && this.checkB3){ this.checkB3 = false; toggleQMark = false; }
      
      
        
    }
    
  }
  
  render(){
    
    if(pm.getPanelId() === 5){
      
      /* checks for boxes */
      if(this.checkB1){ 
          push();
          fill('red');
          noStroke();
          rect(353, 183, 14, 14); 
          pop();  
      }
      if(this.checkB2){ 
        push();
        fill('red');
        noStroke();
        rect(353, 223, 14, 14); 
        pop();

      }
      if(this.checkB3){ 
        push();
        fill('red');
        noStroke();
        rect(353, 263, 14, 14); 
        pop();
      }
      
      /* background changing */
     
      if(this.hoveringP0){ pm.panels[5].p0 = true; }
      else{ pm.panels[5].p0 = false; }
      
      if(this.hoveringP1){ pm.panels[5].p1 = true; }
      else{ pm.panels[5].p1 = false; }
      
      if(this.hoveringP2){ pm.panels[5].p2 = true; }
      else{ pm.panels[5].p2 = false; }
      
      if(this.hoveringP3){ pm.panels[5].p3 = true; }
      else{ pm.panels[5].p3 = false; }
      
      if(this.hoveringP4){ pm.panels[5].p4 = true; }
      else{ pm.panels[5].p4 = false; }
         
    }
}  
}

class Puzzle extends Widget {
  
  constructor(){
    super();
    this.hoveringP0 = false;
    this.hoveringP1 = false;
    this.hoveringP2 = false;
    this.hoveringP3 = false;
    this.hoveringP4 = false;
    
    
    return this;
  }
  update(){
    
    /* Panel 1 */
    if (pm.getPanelId() === 0) {
      
      // Handle mouse clicks specific to Panel1
        this.hoveringP0 = isHovering(90, 60, 35, 35);
      
    } 
    
    /* Panel 2 is handled in sketch.js */
    
    /* Panel 3 */
    else if(pm.getPanelId() === 2){
          
        this.hoveringP2 = isHovering(143, 205, 70, 70);
      
    }
    
    /* Panel 4 */
    else if(pm.getPanelId() === 3){
      
        this.hoveringP3 = isHovering (pm.panels[3].x + 70, pm.panels[3].y + 100, 60, 60);
      
    }
    
    /* Panel 5 */
    else if(pm.getPanelId() === 4){
       
        this.hoveringP4 = isHovering(225, 45, 120, 120);
      
        }
  }

  click(){
   
    if(!puzzleSolved || puzzleNav){
      
      /* Panel 1 */
      if(this.hoveringP0 && pm.getPanelId() === 0){
        pm.gotoPanel(1);
      }

      // Panel 2 has no click

      /* Panel 3 */
      else if(this.hoveringP2 && pm.getPanelId() === 2){
        pm.gotoPanel(3);
      }

      /* Panel 4 */
      else if(this.hoveringP3 && pm.getPanelId() === 3){
        pm.gotoPanel(4);
      }

      /* Panel 5 */
      else if(this.hoveringP4 && pm.getPanelId() === 4){
        pm.gotoPanel(0);
        puzzleSolved = true;
      }
    }
  }
}
  
class Overlay{
  constructor(pm, puzzleSolved){
    this.name = "OverlayManager";
    this.widgets = []
    this.pm = pm;
    this.puzzleSolved = puzzleSolved;
    return this;
  }
  
  addWidget( widget ){
    this.widgets.push( widget );
    return widget;
  }
  
  removeLastWidget(){
    this.widgets.pop();
  }
  
  click(){
  let used = false;
    if (this.widgets.length>0){
      for (var i=0;i<this.widgets.length;i++){
        used = this.widgets[i].click();
        if (used){
          break;
        }
      }
    }
    return used;
  }
  
 update(){
    if (this.widgets.length>0){
      for (var i=0;i<this.widgets.length;i++){
        this.widgets[i].update();
      }
    }
  }
  
  render(){
    if (this.widgets.length>0){
      for (var i=0;i<this.widgets.length;i++){
        this.widgets[i].render();
      }
    }
  }
}

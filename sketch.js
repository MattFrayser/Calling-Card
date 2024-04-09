let puzzleSolved = false; 
let puzzleNav = false;
let toggleArrows = true;
let toggleQMark = false;

let question;
let rightArrow, rightArrowHover;
let leftArrow, leftArrowHover;
let home, homeHover;


function preload() {
  //question Mark
  question = loadImage('assets/questionmark.png');
  
  //right arrows
  rightArrow = loadImage('assets/right_arrow.png');
  rightArrowHover = loadImage('assets/right_arrow_hover.png');

  // Left arrows
  leftArrow = loadImage('assets/left_arrow.png');
  leftArrowHover = loadImage('assets/left_arrow_hover.png');


  // Home Button
  home = loadImage('assets/home.png');
  homeHover = loadImage('assets/homeHover.png');
  
}

function setup() {
  //Display manager
  dm = new DisplayManager(500,300);
   
  //panel manager
  pm = new PanelManager();
  
  //Add panels
  pm.addPanel(new Panel1() );
  pm.addPanel(new Panel2() );
  pm.addPanel(new Panel3() );
  pm.addPanel(new Panel4() );
  pm.addPanel(new Panel5() );
  pm.addPanel(new Panel6() );
  
  // Reset to begining
  pm.reset();
  
  // Overlay
  overlay = new Overlay(pm, puzzleSolved);
  
  /* creation of widgets for overlay */
  questionmark_bottomleft = new Questionmark(question, 400, 210, 35, 40);
  
  right_arrow = new ArrowRight(rightArrow, 460, 175, 20, 70, rightArrowHover);
  
  left_arrow = new ArrowLeft(leftArrow, 20, 175, 20, 70, leftArrowHover);
  
  puzzle = new Puzzle();
  
  home_button = new HomeButton(home, width / 2, 250, 25, 25, homeHover);
  
  homeNav = new HomeNav();
  
  // Push widgets: ? must be last push for pop later.
  
  overlay.addWidget(puzzle);
  overlay.addWidget(left_arrow);
  overlay.addWidget(right_arrow);
  overlay.addWidget(home_button);
  overlay.addWidget(homeNav);
  overlay.addWidget(questionmark_bottomleft);
  
}

function draw() {
  //Update
  dm.update();
  pm.update();
  overlay.update();
  
  // Render
  pm.render();
  overlay.render();
    
}
function mousePressed() {
  
  /* Handle Clicks for puzzle */
  
  if(!puzzleSolved || puzzleNav){
     
    if (puzzle.hoveringP0){
      puzzle.click();
    }
    else if(puzzle.hoveringP2){
      puzzle.click();
    }
    else if(puzzle.hoveringP3){
      puzzle.click();
    }
    else if(puzzle.hoveringP4){
      puzzle.click(); 
    }
    
  }
  
  /* Handle panel 2 dynamic movement */
  
    if (pm.getPanelId() === 1) {
      
       if (isHovering(pm.panels[1].astro1X, pm.panels[1].astro1Y, 80, 80)) {
          pm.panels[1].draggingA1 = true;
          pm.panels[1].offsetX1 = pm.panels[1].astro1X - mouseX;
          pm.panels[1].offsetY1 = pm.panels[1].astro1Y - mouseY;
         
        }
        if (isHovering(pm.panels[1].astro2X, pm.panels[1].astro2Y, 80, 80)) {
          pm.panels[1].draggingA2 = true;
          pm.panels[1].offsetX2 = pm.panels[1].astro2X - mouseX;
          pm.panels[1].offsetY2 = pm.panels[1].astro2Y - mouseY;
         
        }
      
        if(pm.panels[1].collision === true){
          pm.gotoPanel(2);
          pm.panels[1].collision = false;
        }
      
    }
  
  /* Handle Arrows */
  if(puzzleSolved && toggleArrows){
    
    if(right_arrow.hovering){
      right_arrow.click();
    }
    
    if(left_arrow.hovering){
      left_arrow.click();
    }    
  } 
  
  /* Handle home button */
  if(puzzleSolved){
    if(home_button.hovering){
      home_button.click();
    }
  }
  
  
  /* Handle Nav Page */ 
  if (pm.getPanelId() === 5) {
    
    /* Select panel to go to */
    if (homeNav.hoveringP0 || homeNav.hoveringP1 || homeNav.hoveringP2 || homeNav.hoveringP3 || homeNav.hoveringP4) {
      
      homeNav.click(); 
      
    }
    
    if(homeNav.hoveringB1 || homeNav.hoveringB2 || homeNav.hoveringB3){
      homeNav.click();
    }
  }
}

function mouseReleased() {
  
   pm.panels[1].draggingA1 = false;
   pm.panels[1].draggingA2 = false;

}

function getMouseLocation() {
    return createVector(mouseX, mouseY);
}

function mouseClicked() {
    const mousePos = getMouseLocation();
    console.log("Mouse position:", mousePos);
}

  





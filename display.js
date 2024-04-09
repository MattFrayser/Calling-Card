let dm;
class DisplayManager{
  constructor( w,h ){
    this.isFull = false;
    this.desiredWidth = w
    this.desiredHeight = h
    this.ratio = w / h
    this.adjustCanvasSize();
  }
  adjustCanvasSize(){
    let w, h;
    w = this.desiredWidth;
    h = this.desiredHeight;
    if (this.isFull){
      w = displayWidth - 27;
      h = displayHeight;
//      if (deviceOrientation === "PORTRAIT"){
//        h = this.desiredWidth;
//        w = this.desiredHeight;
//      }
      
      this.ratio = w / h;
    } else {
      this.ratio = w / h;
      if (windowWidth < this.desiredWidth){
        w = windowWidth;
        h = w / this.ratio;
        if (h>windowHeight){
          h = windowHeight;
          w = h * this.ratio;
        }
      }
      if (windowHeight< this.desiredHeight){
        h = windowHeight;
        w = h * this.ratio;
        if (w > windowWidth){
          w = windowWidth;
          h = w / this.ratio;
        }
      }
    }
    resizeCanvas( w, h , true );
  }
    
  toggleFullScreen(){
    this.isFull = ! fullscreen();
    fullscreen( this.isFull );
    this.adjustCanvasSize();
    console.log("toggle fullscreen")
  }
  onWindowResized(){
    this.adjustCanvasSize();
  }
  update(){
     if (this.isFull != fullscreen()){
       this.isFull = fullscreen();
       this.adjustCanvasSize();
     }
  }
  render(){
    
  }
}

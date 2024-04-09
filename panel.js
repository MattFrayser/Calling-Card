let pm;

class Panel{
  constructor(){
    
  }
  update(){

  }
  render(){
  
  }
}

class PanelManager{
  constructor(){
    this.panels = [];
    this.panel_id = -1;
  }
  hasPanels(){
    return (this.panel_id > -1);
  }
  addPanel( panel ){
    this.panels.push( panel );
    this.panel_id = this.panels.length - 1;
  }
  update(){
    if (this.hasPanels()){
      this.panels[this.panel_id].update();
    }
  }
  render(){ 
    if (this.hasPanels()){
      this.panels[this.panel_id].render();
    }
  }
  reset(){
    if (this.hasPanels()){
      this.panel_id = 0;
    }
  }
  nextPanel(){
    if (this.hasPanels()){
      this.panel_id ++;
      if (this.panel_id > this.panels.length - 1){
        this.panel_id = 0;
      }
    }
  }
  prevPanel(){
    if (this.hasPanels()){
      this.panel_id --;
      if (this.panel_id < 0){
        this.panel_id = this.panels.length - 1;
      }
    }
  }
  gotoPanel(panel_id){
    if(this.hasPanels()){
      if (panel_id>=0 && panel_id< this.panels.length){ 
        this.panel_id = panel_id;
      }
    }
  }
  getPanelName(){
    let name = "(none)"
    if (this.hasPanels()){
      name =  this.panels[this.panel_id].panel_name
    }
    return name;
  }

  getPanelId(){
    return this.panel_id;
  }



}


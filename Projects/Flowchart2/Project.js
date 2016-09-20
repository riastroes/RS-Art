/**
 * Created by Ria Stroes on 18-9-2016.
 */
 "use strict";
function Project(){
  this.text = "Flowchart";
  this.flowchart = new Flowchart()

};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,50);
}


Project.prototype.draw = function(nr){
  var x = width/2;
  var y = 0;
  switch(nr){

    case 0:{
      //red triangles
      background(255);
      this.text = "Flowchart " + nr;
      this.showText();


      image(this.pg, 0,0);
      break;
    }

  }
}

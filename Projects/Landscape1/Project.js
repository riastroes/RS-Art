/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Landscape1";
  this.init();
};

Project.prototype.style = function(nr,a){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;

    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = lerpColor(app.pal.colors[8],app.pal.colors[7], a);
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.tint(app.pal.colors[2],20);
    this.fillcolor = false;
    this.thickness = 2;
    break;
    case 4:
    this.strokecolor = false;
    this.fillcolor = app.pal.tint(app.pal.colors[4],3);
    this.thickness = 10;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(mase, a){ //mase = vertical space, a = angle difference
  this.curtain = [];
  this.mase = mase;
  this.a = a;
  this.knots = ceil(width /this.mase);
  for( var y = 20; y < height-200; y += 2){
    //function Chain(start,distance, length,  min , max, margin){
    append(this.curtain, new Chain(createVector(random(50,150),y), this.mase, this.knots, -(this.a/2), (this.a/2), 20, 0));
  }
}
Project.prototype.draw = function(nr){

  switch(nr){
    case 0:{
      this.style(4);
      this.center = createVector(width-500, 180);
      ellipse(this.center.x, this.center.y,200,200)
      var max = this.curtain.length;
      for(var i = 0; i< max;i++){
         this.style(2,map(i,0,this.curtain.length,0,1));
         if(i > (max/2)  && i < (max/2)+10 ){
           this.style(2,1);
         }
         if(i==floor(max/2)-20 ){
           this.style(3);
         }
          this.curtain[i].addForce();
          this.curtain[i].svg();
      }

      break;
    }
  }


}

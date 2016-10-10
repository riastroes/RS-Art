/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Curtains with holes";

};

Project.prototype.style = function(nr, y){

  switch(nr){
    case 0:
      fill(0);
      stroke(app.pal.tint(app.pal.imgcolors[0],30));
      strokeWeight(1);
    break;
    case 1:
      fill(0);
      stroke(app.pal.tint(app.pal.imgcolors[1],map(y,0,height,0,255)));
      strokeWeight(2);
    break;


  }


};


Project.prototype.init = function(mase, a){ //mase = vertical space, a = angle difference
  this.curtain = [];
  this.mase = mase;
  this.a = a;
  this.knots = ceil(height /this.mase);
  for( var x = 10; x < width;x += 10){
    //function Chain(start,distance, length,  min , max, margin){
    append(this.curtain, new Chain(createVector(x,0), this.mase, this.knots, PI/this.a*((this.a/2)-1), PI/this.a*((this.a/2)+1), 0, 0));
  }
}
Project.prototype.init2 = function(mase, a){ //mase = vertical space, a = angle difference
  this.curtain = [];
  this.mase = mase;
  this.a = a;
  this.knots = ceil(height /this.mase);
  for( var x = 10; x < width;x += 10){
    //function Chain(start,distance, length,  min , max, margin){
    append(this.curtain, new Chain(createVector(x,random(50,100)), this.mase, this.knots,1.3, 1.8, 50, 0));
  }
}
Project.prototype.draw = function(nr){
  var p1, p2;
  switch(nr){
    case 0:{
      background(255);
      this.style(0, this.mase);
      for(var g = 0; g < this.curtain.length; g++){

        this.curtain[g].show();

      }
      for(var i = 0; i< this.knots; i++){
        this.style(1,i);
        for(var g = 0; g < this.curtain.length-1; g++){
          p1 = this.curtain[g].pos[i];
          p2 = this.curtain[g+1].pos[i];

          if(app.is(p1) && app.is(p2)){
              if(this.curtain[g].checkMargin(p1,0)){
              line(p1.x, p1.y, p2.x, p2.y );
            }

          }
        }
      }
      break;
    }
  }


}
//&& this.checkCondition(0, newpos)

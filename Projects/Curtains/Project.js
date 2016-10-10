/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Curtains";

};

Project.prototype.style = function(nr, thickness){

  switch(nr){
    case 0:
      fill(0);
      stroke(app.pal.tint(app.pal.imgcolors[0],30));
      strokeWeight(1);
    break;
    case 1:
      fill(0);
      stroke(app.pal.tint(app.pal.imgcolors[1],30));
      strokeWeight(1);
    break;


  }


};


Project.prototype.init = function(mase, a){
  this.curtain = [];
  this.mase = mase;
  this.a = a;
  this.knots = floor(height /this.mase);
  for( var x = 10; x < width;x += 10){
    //function Chain(start,distance, length,  min , max, margin){
    append(this.curtain, new Chain(createVector(x,0), this.mase, this.knots, PI/this.a*((this.a/2)-1), PI/this.a*((this.a/2)+1), 0));
  }
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      background(255);
      this.style(0, this.mase);
      for(var g = 0; g < this.curtain.length; g++){
        this.curtain[g].show();
      }
      for(var i = 0; i< this.knots; i++){
        this.style(1,this.mase);
        for(var g = 0; g < this.curtain.length-1; g++){
          line(this.curtain[g].pos[i].x, this.curtain[g].pos[i].y,
            this.curtain[g+1].pos[i].x, this.curtain[g+1].pos[i].y )
        }
      }
      break;
    }
  }


}

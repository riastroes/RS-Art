/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Diamonds 2";
  this.init();

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


Project.prototype.init = function(){
  background(255);
  this.chain = [];
  this.chain = new Chain(createVector(width/2, 50),70,14, PI/4,PI/4*3,50 );
  this.diamonds = [];
  for(var i = 0; i < this.chain.pos.length; i++){
    append(this.diamonds, new Diamonds(this.chain.pos[i],50,9));
  }

}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{


      for(var i = 0; i < this.chain.pos.length; i++){
        if(this.diamonds[i].p.length>2){
          this.diamonds[i].minus();
        }
        this.diamonds[i].draw();
      }
      break;
    }
  }


}

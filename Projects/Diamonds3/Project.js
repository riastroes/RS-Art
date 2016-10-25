/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Diamonds 3";
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
  this.chain1 = [];
  this.chain1 = new Chain(createVector(width/2, 150),20,14, PI/4,PI/4*3,50 );
  this.diamonds1 = [];
  for(var i = 0; i < this.chain1.pos.length; i++){
    if(i === 0){
      append(this.diamonds1, new Diamonds(this.chain1.pos[i],200,9));
    }
    else{
      append(this.diamonds1, new Diamonds(this.chain1.pos[i],100,5));
    }
  }
  this.chain2 = [];
  this.chain2 = new Chain(createVector(width/2, 250),30,14, PI/4,PI/4*3,50 );
  this.diamonds2 = [];
  for(var i = 0; i < this.chain2.pos.length; i++){
    if(i === 0){
      append(this.diamonds2, new Diamonds(this.chain2.pos[i],200,9));
    }
    else{
      append(this.diamonds2, new Diamonds(this.chain2.pos[i],50,5));
    }
  }

}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{


      for(var i = 0; i < this.chain1.pos.length; i++){
        if(this.diamonds1[i].p.length>2){
          this.diamonds1[i].minus();
        }
        this.diamonds1[i].draw();
      }

      for(var i = 0; i < this.chain2.pos.length; i++){
        if(this.diamonds2[i].p.length>2){
          this.diamonds2[i].minus();
        }
        this.diamonds2[i].draw();
      }
      break;
    }
  }


}

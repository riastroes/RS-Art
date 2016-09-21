/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
 function Project(){
   this.text = "Towers";
   this.init()

 };
Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,50);
}

Project.prototype.init = function(){
  this.pos = createVector(0,0);
  this.towers =[];
  append(this.towers, new Tower(this.pos, 200));
  this.tops = [];

}
Project.prototype.draw = function(nr){
  this.showText();
  switch(nr){
    case 0:{
      this.towers[0].create(app.randomInt(5,10));
      this.towers[0].draw();
      this.pos.x += this.towers[0].towermaxr;
      append(this.tops, this.towers[0].top);
      append(this.tops, this.towers[0].topwidth);
      while(this.pos.x < (width)){
        var atower = new Tower(this.pos, 200);
        append(this.towers, atower );

        atower.create(app.randomInt(5,10));
        atower.draw();
        this.pos.x += atower.towermaxr;
        atower.top.x += this.pos.x - atower.towermaxr;

        append(this.tops, atower.top);
        append(this.tops, atower.topwidth);
      }
      this.birds = new Birds(this.tops);
      this.birds.draw();
      break;
    }
  }
}

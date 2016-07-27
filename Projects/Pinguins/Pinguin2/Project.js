/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Pinguins";
  this.init();
};

Project.prototype.style = function(nr){

    if(nr == 1){
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[1];
      this.thickness = 1;
    }
    if(nr == 2){
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.colors[0];
      this.thickness = 1;
    }
    if(nr == 3){
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.randomImgColor;
      this.thickness = 1;
    }
};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,40,50);
}

Project.prototype.init = function(){
  this.pinguins=[];

}
Project.prototype.update = function(count){
  var p;
  this.pinguins=[];
  for(var i = 0; i < count; i++){
    append(this.pinguins,new Pinguin());

  }
 var w = width/(this.pinguins.length)
  for(var i = 0; i < this.pinguins.length; i++){
    p = createVector(-(w/2)+(w* (i+1)),height/2);
    this.pinguins[i].update(p);
  }


}
Project.prototype.draw = function(nr){
  this.showText();
  var w = width/(this.pinguins.length);
  if(frameCount % 50 ==2){
    var i = app.randomInt(3);
    var p = createVector(-(w/2)+(w* (i+1)),height/2);
    this.pinguins[i].update(p);
    //this.pinguins[i].head.rot += 1;
  }
  switch(nr){
    case 0:{

      for(var i = 0; i < this.pinguins.length; i++){
        this.pinguins[i].draw();
      }

      break;
    }
  }
}

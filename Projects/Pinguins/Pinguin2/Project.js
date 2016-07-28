/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Pinguins by Ria Stroes";
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
  text(this.text,width-150,height-10);
}

Project.prototype.init = function(){
  this.pinguins=[];

}
Project.prototype.update = function(nr, count){
  var p;
  switch(nr){
    case 0:{
      this.pinguins=[];
      for(var i = 0; i < count; i++){
        append(this.pinguins,new Pinguin());
      }
      var w =  (width-200)/(this.pinguins.length)
      for(var i = 0; i < this.pinguins.length; i++){
        p = createVector(100+(w/2)+(w*i),height/2);
        this.pinguins[i].update(nr, p);
      }
      break;
    }
    case 1:{
      this.pinguins=[];
      for(var i = 0; i < count; i++){
        append(this.pinguins,new Pinguin());
      }
      var w =  (width-200)/(this.pinguins.length)
      for(var i = 0; i < this.pinguins.length; i++){
        p = createVector(100+(w/2)+(w*i),height/2);
        this.pinguins[i].update(nr, p);
      }

      break;
    }

}

}
Project.prototype.draw = function(nr){
  this.showText();
  var w = (width-200)/(this.pinguins.length);
  var r = map(noise(frameCount/100),0,1,-1,3);
  if(frameCount % 50 ==2){
    var i = app.randomInt(this.pinguins.length-1);
    var p = createVector(100 +(w/2) +(w* i),height/2);
    this.pinguins[i].update(0, p);
    this.pinguins[i].head.rot += r;
  }

    for(var i = 0; i < this.pinguins.length; i++){
      this.pinguins[i].draw();
    }

}

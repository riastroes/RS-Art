/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Penguins by Ria Stroes";
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
      this.fillcolor = app.pal.randomImgColor();
      this.thickness = 1;
    }
};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,width-150,height-10);
}

Project.prototype.init = function(){
  var scale = 10;
  var max = 18;
  this.pinguins=[];
  for(var i = 0; i < max; i++){
    append(this.pinguins, new Pinguin(i, scale));
  }


  for(var i = 0; i < max; i++){
    scale = random(4,8);
    append(this.pinguins, new Pinguin(i, scale));
  }



}
Project.prototype.update = function(){
  var pos;
  var max = 18;
  for(var i = 0; i < max; i++){
    pos = createVector(160+((200*i)), height-120 + random(0,50));
    this.pinguins[i].update(pos);
  }
  max = 18;
  for(var i = 18; i < ((max)*2); i++){
    pos = createVector(200+(300*(i-18)), height-80 + random(0,50));
    this.pinguins[i].update(pos);
  }
}
Project.prototype.draw = function(nr){
  //this.style(0);
  //this.showText();

  for(var i = 0; i < this.pinguins.length-6; i++){
    if(nr == 0){
      this.pinguins[i].draw(0);
    }
    else{
      this.pinguins[i].draw(1);
    }
  }

}

/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  var i,c;
  this.text ="circles";

  
  this.grid = new Grid(7,7,50,50,50,50);
  this.center = createVector(width/2, height/2);


};
Project.prototype.init = function(){
  this.circles = [];
  for(i = 0; i < this.grid.maxi; i++){
     c = new Circle(this.grid.get(i), 10);
     append(this.circles, c);
  }
}
Project.prototype.showText = function(){
  textSize(14);
  textFont("Arial");
  text(this.text, 50,50);
}
Project.prototype.move = function(){
  var i, hasmoved;
  var noc = [];
  for(i =0; i < this.circles.length; i++){
    hasmoved = this.circles[i].move(i,this.circles,0.03);
    if(hasmoved){
      this.circles[i].scale(0.1, 10, 50);
    }
    else{
      this.circles[i].scale(-0.1, 10, 50);
    }
  }

};
Project.prototype.style = function(){
  var i;
  for(i =0; i < this.circles.length; i++){
    this.circle.style(false,app.pal.colors[5],1);
  }
};
Project.prototype.scale = function(){
  var i;
  for(i =0; i < this.circles.length; i++){
    this.circle.scale(0.1);
  }
};
Project.prototype.implotionCenter = function(){
  this.text = "Implotion in Center";
  var i;
  for(i =0; i < this.circles.length; i++){
    hasmoved = this.circles[i].moveTo(i,this.circles,1, this.center);
    if(hasmoved){
      this.circles[i].scale(0.1, 10, 100);
    }
    else{
      this.circles[i].scale(-0.1, 10, 100);
    }
  }
};
Project.prototype.attackBiggest = function(){
  this.text = "Attack Biggest";
  var i, biggest, bigi;
  biggest = 0;
  for(i =0; i < this.circles.length; i++){
    this.circles[i].style(false,app.pal.colors[1],1);
    if( this.circles[i].radius > biggest){
      biggest = this.circles[i].radius;
      bigi = i;
    }
  }

  this.circles[bigi].style(false,app.pal.colors[11],1);
  for(i =0; i < this.circles.length; i++){
    hasmoved = this.circles[i].moveTo(i,this.circles,1, this.circles[bigi].center);
    if(hasmoved){
      this.circles[i].scale(0.1, 10, 50);
    }
    else{
      this.circles[i].scale(-0.1, 10, 50);
    }
  }
};
Project.prototype.draw = function(){
  this.showText();
  var i;
  for(i =0; i < this.circles.length; i++){
    this.circles[i].draw();
  }
}

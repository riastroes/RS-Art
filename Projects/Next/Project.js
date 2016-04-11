/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  var i,c;

  this.circles = [];
  this.grid = new Grid(9,9,50,50,50,50);

  for(i = 0; i < this.grid.maxi; i++){
     c = new Circle(this.grid.get(i), 30);
     append(this.circles, c);
  }
};
Project.prototype.move = function(){
  var i, hasmoved;
  var noc = [];
  for(i =0; i < this.circles.length; i++){
    hasmoved = this.circles[i].move(i,this.circles,0.03);
  }

};
Project.prototype.style = function(){
  var i;
  for(i =0; i < this.circles.length; i++){
    this.circle.style(app.pal.colors[0],app.pal.colors[5],1);
  }
};
Project.prototype.scale = function(){
  var i;
  for(i =0; i < this.circles.length; i++){
    this.circle.scale(0.1);
  }
};
Project.prototype.draw = function(){
  var i;
  for(i =0; i < this.circles.length; i++){
    this.circles[i].draw();
  }
}

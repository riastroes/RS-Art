/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  this.control1;
  this.control2;
  this.begin;
  this.end;

  this.beziers = [];
  this.grid = new Grid(7,7,10,10,10,10);
  this.center = createVector(width/2, height/2);

  this.a=0;
  this.b=0;

};

Project.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],false,0.05);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[11],false,0.05);
  }

};

Project.prototype.construct = function(){
  this.begin = app.project.grid.pos[3][0];
  this.end = app.project.grid.pos[3][6];
  this.control1 = this.begin.copy();
  this.control2 = this.end.copy();
}
Project.prototype.change = function(nr){

  switch(nr){
    case 1:{
      this.style(1);
      this.control1.x = map(sin(this.a),-1,1, width/2, width);
      this.a += 0.1
      //this.control1.add(4,0);
      //this.control1.x  = (width/2)+ (this.control1.x % (width));
      break;
    }
    case 2:{
      this.style(1);
      this.control1.x = map(sin(this.a),-1,1, width/2, 0);
      this.a += 0.1

      //this.control1.add(-4,0);
      //this.control1.x  =(this.control1.x % (width/2));
      break;
    }
    case 3:{
      this.style(1);

      //this.begin.y =(this.begin.y +1) % (height-(this.grid.tmarge + this.grid.bmarge + this.grid.cellheight));
      this.control1.add(0,2);
      this.control1.y  = (height/2)+ (this.control1.y % (height));
      break;
    }
    case 4:{
      this.style(1);

      this.control2.add(-4,0);
      this.control2.x  = (width/2)+ (this.control2.x % (width/2));
      break;
    }
  }


}
Project.prototype.showControls = function(){
  this.style(2);
  ellipse(this.control1.x, this.control1.y,10,10);
  ellipse(this.control2.x, this.control2.y,10,10);
  line(this.control1.x,this.control1.y, this.begin.x, this.begin.y);
  line(this.control2.x,this.control2.y, this.end.x, this.end.y);

}
Project.prototype.draw = function(c1,c2){

  beginShape();

    vertex(this.begin.x, this.begin.y);
    bezierVertex(this.control1.x, this.control1.y, this.control2.x, this.control2.y, this.end.x, this.end.y);
    vertex(this.begin.x, this.begin.y);
    bezierVertex(this.control1.x, this.control1.y, this.control2.x, this.control2.y, this.end.x, this.end.y);

  endShape();


}

Project.prototype.draw2 = function(v1,v2){
  this.style(1);
  var a =this.grid.pos[1][3].copy();
  var b =this.grid.pos[1][1].copy();
  var c =this.grid.pos[5][5].copy();
  var d =this.grid.pos[5][3].copy();

  b.add(v1);
  c.add(v2);
  beginShape();

    vertex(a.x, a.y);
    bezierVertex(b.x, b.y, c.x, c.y, d.x, d.y);

  endShape();

}

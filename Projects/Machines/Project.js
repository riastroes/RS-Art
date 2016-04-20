/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){

  this.gears = [];
  this.grid = new Grid(5,5,20,20,20,20);
  this.center = createVector(width/2, height/2);
  this.pal = new Palette(1);
  this.pal.fromImage(app.images[0], 8, "metal");

  this.a=0;
  this.b=0;
  this.begin = createVector(350,450);
  this.end = createVector(350,450);
  this.colors= []
  for(i = 0; i < 5; i++){
    this.colors[i] = this.pal.tint(this.pal.colors[1],20 * (i+1));
  }
};


Project.prototype.construct = function(){

  this.gears[0] = new Gear(this.grid.cellwidth,16,12,0,this.colors[4]);
  this.gears[0].pos = createVector(200,200);
  this.gears[1] = new Gear(this.grid.cellwidth,16,12,1,this.colors[4]);
  this.gears[2] = new Gear(this.grid.cellwidth,16,12,1,this.colors[1]);
  this.gears[3] = new Gear(this.grid.cellwidth/2,8,12,2,this.colors[2]);
  this.gears[4] = new Gear(this.grid.cellwidth/4,4,12,3,this.colors[2]);

 this.end.x += (this.grid.cellwidth/2) * TWO_PI;
 this.aline = new Assemblyline(this.begin, this.end, 16, 12,this.colors[4]);
 this.gears[5] = new Gear(this.grid.cellwidth,16,12,1,this.colors[0]);
 this.gears[5].pos = this.aline.connect[2];
//
 this.gears[5].pos.y += this.gears[5].size/2  ;


}
Project.prototype.change = function(nr){

  this.gears[0].rotate(0.05);
  this.gears[1].connectTo(this.gears[0],2);
  this.gears[2].connectTo(this.gears[0],6);
  this.gears[3].connectTo(this.gears[0],11);
  this.gears[4].connectTo(this.gears[0],14);
  

  //this.gears[3].connectTo(this.gears[2],0);
  //this.gears[4].connectTo(this.gears[3],0);
  this.gears[5].rotate((TWO_PI/1000) *2);
   if(this.gears[5].rot > 0){
    this.aline.pos.x += ( (1.01787602)/2)*2;
  }
}

Project.prototype.draw = function(){
  var i=0;
//  for(i=0;i<this.gears.length;i++){
for(i=0;i<6;i++){
    this.gears[i].draw();
  }
  this.aline.draw();

  line(this.gears[4].pos.x, this.gears[4].pos.y, this.gears[0].pos.x, this.gears[0].pos.y);
}

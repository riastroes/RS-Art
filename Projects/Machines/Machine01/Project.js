/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){

  this.rods =[];
  this.connectors =[];
  this.gears = [];
  this.center = createVector(width/2, height/2);
  this.pal = new Palette(1);
  this.pal.fromImage(app.images[0], 8, "metal");

  this.a=0;
  this.b=0;
  this.begin = createVector(350,450);
  this.end = createVector(350,450);

};
Project.prototype.style = function(pal, nr){
  switch(nr){
    case 0:{
      this.strokecolor = pal.colors[0];
      this.fillcolor = pal.colors[1];
      this.thickness = 1;
      break;
    }
    case 1:{
      this.strokecolor = pal.colors[1];
      this.fillcolor = pal.colors[0];
      this.thickness = 1;
      break;
    }
    case 2:{
      this.strokecolor = pal.colors[0];
      this.fillcolor = pal.imgcolors[0];
      this.thickness = 1;
      break;
    }
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}


Project.prototype.construct = function(){

  // this.rods[0] = new Rod(height-100,15,this.pal.imgcolors[1], this.pal.imgcolors[3], PI/2);
  // this.rods[0].connectTo(createVector(50,100),1,false,1,25,0);
  // this.rods[1] = new Rod(200,15, 0);
  // this.rods[1].connectTo(createVector(50,100),1,false,1,50,0);

 //Gear(size, points, pointsize, connection)
  this.gears[0] = new Gear(50,8,12,0);
  this.gears[1] = new Gear(100,16,12,0);
  this.gears[2] = new Gear(100,16,12,1);


 this.gears[3] = new Gear(100,16,12,1);


 var alinesize = TWO_PI * this.gears[3].radius;
 this.aline = new Assemblyline(alinesize, 16, 12);
 this.aline.pos = createVector(400,400);
 this.gears[3].connectToAssemblyline(this.aline,0);
  

}
Project.prototype.update = function(nr){
  switch(nr){
    case 0:{
      this.gears[0].pos = createVector(200,100);
      this.gears[1].connectTo(this.gears[0],2);
      this.gears[2].connectTo(this.gears[1],6);

      this.gears[0].rotate(0.05);
      this.gears[3].rot += (TWO_PI/this.gears[3].points)/100;

      //this.aline.connectTo(this.gears[3],6);
      //this.aline.pos.x  +=  (TWO_PI/this.gears[3].points)/100;

      // if(this.gears[3].rot > PI){
      //   this.gears[3].dir = -this.gears[3].dir;
      //   //this.aline.pos.x += TWO_PI/(this.gears[3].points);
      //
      //   //this.aline.pos.x += ( (1.01787602)/2)*2;
      //   //this.gears[3].rotate((TWO_PI/1000) *2);
      // }
      // else if(this.gears[3] < 0){
      //   this.gears[3].dir = -this.gears[3].dir;
      //   //this.aline.pos.x -= (TWO_PI)/this.gears[3].points;
      //   //this.aline.pos.x -= TWO_PI/(this.gears[3].points*100);
      //   this.gears[3].rot += TWO_PI/(this.gears[3].points*100);
      //
      // }
      break;
    }
    case 1:{
      break;
    }
  }
}

Project.prototype.draw = function(){
  // this.style(this.pal, 2);
  //
  // for(var i=0; i < this.rods.length; i++){
  //   this.rods[i].draw();
  // }
  this.style(this.pal, 2);
  for(var i=0;i<4;i++){
    this.gears[i].draw();
  }
  this.style(this.pal, 2);
  this.aline.draw();

  var con = this.aline.getConnection(0);
  ellipse(con.x, con.y, 10,10);
  // for(var i=0; i < this.connectors.length; i++){
  //   this.connectors[i].draw();
  // }

//  line(this.gears[4].pos.x, this.gears[4].pos.y, this.gears[0].pos.x, this.gears[0].pos.y);
  //fill(255);


}

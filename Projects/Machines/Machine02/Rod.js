function Rod(connect, size, lmass, rmass){
  this.size = size;
  this.connect =connect.copy();
  this.left = createVector(-this.size/2, 0);
  this.right= createVector(this.size/2, 0);
  this.lcontrol = this.left.copy();
  this.rcontrol = this.right.copy();
  this.lmass = lmass;
  this.rmass = rmass;
  this.rot = 0;
  this.mass = this.lmass + this.rmass;
  this.gravity = createVector(0,1);
  this.force = createVector(0,0);
  this.diff;
  this.children =[];
}
Rod.prototype.construct = function(){
  this.force = this.gravity.copy();
  this.force.mult(this.lmass);
  this.lcontrol.add(this.force);
  this.force = this.gravity.copy();
  this.force.mult(this.rmass);
  this.rcontrol.add(this.force);
  //
  var x = curvePoint(this.lcontrol.x, this.left.x, this.right.x, this.rcontrol.x, 0.5);
  var y = curvePoint(this.lcontrol.y, this.left.y, this.right.y, this.rcontrol.y, 0.5);

  this.diff = createVector(x,y);
  this.connect.sub(this.diff);

  for(var c =0; c< this.children.length; c++){
    this.children[c].construct();
  }


}
Rod.prototype.draw = function(){
  //this.rot += 0.01;
  push();
  translate(this.connect.x, this.connect.y);
  //rotate(this.rot);
  curve(this.lcontrol.x, this.lcontrol.y, this.left.x, this.left.y, this.right.x, this.right.y,  this.rcontrol.x, this.rcontrol.y);
  ellipse(this.lcontrol.x, this.lcontrol.y, 3,3);
  ellipse(this.rcontrol.x, this.rcontrol.y, 3,3);


  line(this.left.x, this.left.y,this.left.x, this.left.y+50);
  line(this.right.x, this.left.y,this.right.x, this.right.y+50);
  app.project.style(app.pal, 3);
  ellipse(this.left.x, this.left.y+50,50,50);
  ellipse(this.right.x, this.right.y+50,50,50);
  app.project.style(app.pal,2);
  //ellipse(this.left.x, this.left.y, 3,3);
  //ellipse(this.right.x, this.right.y, 3,3);
  for(var c =0; c< this.children.length; c++){
    this.children[c].draw()
  }
  pop();

}

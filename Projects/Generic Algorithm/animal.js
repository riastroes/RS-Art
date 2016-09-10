//Phenotype = Expression
function Animal(){
  this.dna= new DNA();
  this.fitness = 0;
  this.center = createVector(width/2, height/2);
  this.pos = app.posOnCircle(this.center, random(50,250), 360, app.randomInt(360));
  this.style(1);
}
Animal.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
   }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Animal.prototype.create = function(){

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

  this.pos1 = app.posOnCircle(this.pos, 50, 8, this.dna.d);
  this.pos2 = app.posOnCircle(this.pos, 50, 8,6);// this.dna.n);
  this.pos3 = app.posOnCircle(this.pos, 50, 8,7);// this.dna.a);
  this.pos4 = app.posOnCircle(this.pos, 50, 8,0);// this.dna.b);
  this.pos5 = app.posOnCircle(this.pos, 50, 8,6);// this.dna.c);
  push();
  translate(this.pos1.x, this.pos1.y);
  rotate(this.dna.d * (TWO_PI/8)); //this.dna.d
  ellipse(-20,0,100,75); //belly
  pop();
  push();
  translate(this.pos2.x, this.pos2.y);
  rotate(this.dna.n * (TWO_PI/8));//this.dna.n
  ellipse(-20,0, 50,50); //head
  pop();
  push();
  translate(this.pos3.x-30, this.pos3.y);
  rotate(this.dna.a * (TWO_PI/8));//this.dna.a
  triangle(0,-20, 0,20, 40,0); //snavel
  pop();
  push();
  translate(this.pos4.x, this.pos4.y);
  rotate(this.dna.b * (TWO_PI/8));//this.dna.b
  rect(-70,70,50,10); //feet
  pop();
  push();
  translate(this.pos5.x, this.pos5.y);
  rotate(this.dna.c * (TWO_PI/8));//this.dna.c
  fill(0);
  ellipse(-20,0, 20,20); //eye
  fill(255);
  pop();




}
Animal.prototype.isFit = function(){
  var ok = false;

  this.fitness =0;//26706
   if(this.dna.d == 2){this.fitness+=1}
   if(this.dna.n == 6){this.fitness+=1}
   if(this.dna.a == 7){this.fitness+=1}
   if(this.dna.b == 0){this.fitness+=1}
   if(this.dna.c == 6){this.fitness+=1}

  if(this.fitness == 5){
    ok = true;
  }
  return ok;
}

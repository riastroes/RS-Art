function Landscape(){
  this.a = 0;
  this.style(4);
  rect(0,(height/2)+10, width, height/2);
}
Landscape.prototype.style = function(nr, y){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    var perc = map(y, height/2, height, 0,1)
    this.strokecolor = lerpColor(app.pal.colors[3], app.pal.colors[4], perc) ;
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 3:
    var perc = map(y, height/2, height, 0,1)
    this.strokecolor = lerpColor(app.pal.colors[5], app.pal.colors[6], perc) ;
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 4:
    var perc = map(y, height/2, height, 0,1)
    this.strokecolor = false;
    this.fillcolor = app.palblue.colors[5];
    this.thickness = 1;
    break;

  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}

Landscape.prototype.draw2 = function(){
 var diff= noise(this.a)*10;

  var y = random(height/2,height);

  var disa = map(y, height/2,height,1,15);
  var disb = map(y, height/2,height,1,30);
  this.style(3,y);
  for(var x = -100; x < width; x+=10){
    triangle(x,y, x+2,y, x+1,(y)-disa);
  }
  this.style(2,y);
  for(var x = -100; x < width; x+=5+diff){

    triangle(x,y, x+4,y, x+3,(y)-disb);
  }
this.a += 0.1;

}
Landscape.prototype.draw1 = function(){
 var diff;

  var y = random(height/2,height) +5;

  var disa = map(y, height/2,height,1,15);
  var disb = map(y, height/2,height,1,30);
  this.style(3,y);
  for(var x = -100; x < width; x+=diff/5){
    diff = noise(this.a)*10;
    this.a += 0.1;

    triangle(x,y, x+2,y+diff, x+1,(y+diff)-disa);
  }
  diff = noise(this.a)*3;
  this.style(2,y);
  for(var x = -100; x < width; x+=diff){
    diff = noise(this.a)*10;
    this.a += 0.1;
    triangle(x,y+diff, x+4,y+diff, x+3,(y+diff)-disb);
  }
this.a += 0.1;

}

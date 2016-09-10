/**
 * Created by Ria Stroes on 1-9-2016.
 * If you think of a penguin, it will become a penguin
 */
 "use strict";
function Project(){
  this.text = "If it looks like a penguin, it will become a penguin";
  this.center = createVector(width/2, height/2);
  this.started = false;
};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
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
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,50);
}

Project.prototype.init = function(){

  this.population = new Population(10);
  this.countgeneration = 1;
  this.countfit = 0;
  this.started = true;
}
Project.prototype.run = function(nr){
  this.showText();
  switch(nr){
    case 0:{
      //start by click on the screen in the center
      background(app.pal.imgcolors[0]);
      textSize(16);
      textAlign(LEFT);
      fill(app.pal.colors[1]);
      text("If you see a penguin, it will be a penguin",20,20);

      this.fr = 1;
      fill(app.pal.imgcolors[0]);
      ellipse(this.center.x, this.center.y, 100,100);
      this.init();

      for(var i = 0; i < this.population.animals.length; i++){
        this.population.animals[i].create();
        this.population.animals[i].isFit();
      }

      this.population.evalFitness();
      this.population.nextGeneration();
      break;
    }
    case 1:{

      if(this.fr <60){this.fr += 0.1}
      frameRate(this.fr);
      var countfit =0;
      background(app.pal.imgcolors[0]);
      this.population.evalFitness();
      this.population.nextGeneration();
      textSize(16);
      textAlign(LEFT);
      fill(app.pal.colors[1]);
      text("If you see a penguin, it will be a penguin",20,20);

      text("generations: " + this.population.generation,20,40);
      text("mutations: " + this.population.mutations,20,60);

      //ellipse(this.center.x, this.center.y, 300,300);

      var ok = false;
      for(var i = 0; i < this.population.animals.length; i++){
        this.population.animals[i].create();
        ok = this.population.animals[i].isFit();
        if(ok){countfit++;}
      }
      text("fitness: " + countfit,20,80);
      if(this.population.animals.length == countfit){
        app.nextscene();
      }
      if(mouseIsPressed){
        if(abs(this.center.x - mouseX) <50 && abs(this.center.y < mouseY) < 50){
           frameRate(1);
        }
        else{
          frameRate(60);
        }
      }
      break;
    }
    case 2:{
      //Reproduction
      // - crossover
      // - mutation

    }
    case 4:{
      //test
      background(0);
      this.animals = [];
      for(var i = 0; i < 8; i++){

        append(this.animals, new Animal(this.center))
        this.animals[i].dna.d = 0;
        this.animals[i].dna.n = 0;
        this.animals[i].dna.a = i;
        this.animals[i].create();
        this.animals[i].isFit();

      }
    }
  }
}

function Population(max){
  this.animals =[];
  this.nextgeneration =[];
  this.pool =[];
  this.max = max;
  this.generation = 0;
  this.mutations = 0;

  this.create();
}
Population.prototype.create = function(){
  for(var i = 0; i < this.max; i++){
    append(this.animals, new Animal());
  }
}
Population.prototype.evalFitness = function(){
  this.pool = [];
  for(var i = 0; i < this.max; i++){
    for(var f = 0; f <=  this.animals[i].fitness; f++){
      append(this.pool, this.animals[i]);
    }
  }
}
Population.prototype.nextGeneration = function(){
  var parent1, parent2;

  this.animals  = [];
  this.nextgeneration = [];
  this.generation++;
  this.poolmax = this.pool.length - 1;

  if(this.poolmax > 0){

    for(var i = 0; i < this.max; i++){
      //crossover
      var animal = new Animal();
      parent1 = this.pool[app.randomInt(this.poolmax)];
      parent2 = this.pool[app.randomInt(this.poolmax)]
      if(random(1) > 0.05){
        animal.dna.d = parent1.dna.d;
        animal.dna.n = parent1.dna.n;
        animal.dna.a = parent1.dna.a;
        animal.dna.b = parent2.dna.b;
        animal.dna.c = parent2.dna.c;

      }
      else{
        this.mutations++;
      }
      append(this.nextgeneration, animal);
    }
  arrayCopy(this.nextgeneration,this.animals);
  console.log(this.animals.length);
  }
}

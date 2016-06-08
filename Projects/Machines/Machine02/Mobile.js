/* Experiment mobiles
*  Ria Stroes
*  June 2016
*/

function Mobile(){
  this.rods =[];
}
Mobile.prototype.create = function(pos, angle){
  this.rods[0] = new Rod(pos, 100, 500, 200);
  append(this.rods[0].children, new Rod(this.rods[0].left, 100, 100, 300));
  append(this.rods[0].children, new Rod(this.rods[0].right, 100, 500, 300));
  this.rods[0].construct();



}
Mobile.prototype.update = function(){

}
Mobile.prototype.draw = function(){
  line(width/2, 0, width/2, 100);
  ellipse(width/2, 100, 10,10)
  for(var i = 0; i< this.rods.length; i++){
    this.rods[i].draw()
  }

}

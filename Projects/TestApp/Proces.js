function Proces(ascene, lastscene){
    this.scenes =[];
    this.scene = ascene;
    this.lastscene = lastscene;
    this.isrunning = false;

}
Proces.prototype.init = function(){
    //initialize the work proces
    for(var s = this.scene; s <= this.lastscene; s++){
        this.scenes[s] = new Scene(s);
    }
};
Proces.prototype.run = function(){
    //run this proces
    this.isrunning = true;
    for(var index in this.scenes){
        this.scenes[index].run();
    }
};
Proces.prototype.stop = function(){
    //stop this proces
    this.isrunning = false;
};
Proces.prototype.nextScene = function(bgcolor){
    if (this.scene < this.lastscene) {
        this.scene = (this.scene + 1) % (this.lastscene + 1);
    }
    if(app.is(bgcolor)) {
        background(bgcolor);
    }
};
Proces.prototype.previousScene = function(bgcolor){
    if (this.scene > 0) {
        this.scene = (this.scene - 1) % (this.lastscene + 1);
    }
    if(app.is(bgcolor)) {
        background(bgcolor);
    }
};

/*

 */
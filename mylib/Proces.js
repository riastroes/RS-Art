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

/*

 */
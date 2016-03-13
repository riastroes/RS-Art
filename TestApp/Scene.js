function Scene(nr, duration, strimages, strsounds, path){
    this.nr = nr;
    this.isrunning = false;
    this.duration = duration; // in frameCounts
    //resources
    this.strimages = strimages;
    this.strsounds = strsounds;
    if(typeof(path) !== "undefined") {
        this.resourcepath = path;
    }
    else{
        this.resourcepath = "resources";   //default resource map
    }
    this.images = [];
    this.sounds = [];
    this.maximages = 0;
    this.maxsounds = 0;
    this.loaded = 0;
    this.isloaded = false;

}
Scene.prototype.loadResources = function(strimages, strsounds, path){
    // the images and sound should be stored in the map path

    this.isloaded = false;
    this.loaded = 0;
    var imagenames = [];
    var soundnames = [];
    if(typeof(strimages) === "string"){
        imagenames = strimages.split(",");
        this.maximages = imagenames.length;
    }
    else if(typeof(strimages) !== "undefined"){
        // array
        this.maximages = strimages.length;
        for(var i = 0; i < this.maximages; i++){
            imagenames[i] = strimages[i];
        }
    }
    else{
        // undefined
        this.maximages = 0;
    }
    if(typeof(strsounds) === "string"){
        soundnames = strimages.split(",");
        this.maxsounds = soundnames.length;
    }
    else if(typeof(strsounds) !== "undefined"){
        // array
        this.maxsounds = strsounds.length;
        for(var s = 0; s < this.maxsounds; s++){
            soundnames[s] = strsounds[s];
        }
    }
    else{
        // undefined
        this.maxsounds = 0;
    }

    if(typeof(path) !== "undefined"){
        this.resourcepath = path;
    }
    for(var i = 0; i < this.maximages; i++){
        this.images[i] = loadImage(this.resourcepath + "/" + imagenames[i], this.callbackLoadResources());
    }

    for(var s = 0; s < this.maxsounds; s++){
        this.sounds[s] = loadSound(this.resourcepath + "/" + soundnames[s], this.callbackLoadResources());
    }
    if( (this.maximages + this.maxsounds) ==  0){
        this.isloaded = true;
    }
};
Scene.prototype.callbackLoadResources = function(){
    this.loaded++;
    if(this.loaded == (this.maximages + this.maxsounds)){
        // after all the resources are loaded you can use them.
        this.isloaded = true;
    }

};

Scene.prototype.run = function(){
    //run this scene
    if(!this.isloaded){
        this.loadResources(this.strimages, this.strsounds, this.resourcepath);
    }
    else {
        this.isrunning = true;
    }
};
Scene.prototype.stop = function(){
    //stop this scene
    this.isrunning = false;
};
/**
 * Created by riastroes on 08-03-16.
 * App is the main object to store the global variables
 * en general settings for the project(s)
 */
function App(ascene, lastscene){

    //TODO DEFINE ENUMS
    /// LIGHT, DARK

    pixelDensity(1);
    createCanvas(windowWidth, windowHeight);

    //resources
    this.resourcepath = "resources"; //default resource map
    this.images = [];
    this.sounds = [];
    this.maximages = 0;
    this.maxsounds = 0;
    this.loaded = 0;
    this.isloaded = false;

    //styles and colors
    this.pal = new Palette();
    this.namedpalettes = [];
    this.namedpalettes[0]= new NamedPalette("standard");
    this.currentpalettename = "standard";

    arrayCopy(this.namedpalettes[0].pal.colors, this.pal.colors);
    this.style = new Style();

    //workflow
    this.menu = new Menu();
    this.proces = new Proces(ascene, lastscene);
    this.test = new Test();
    this.info = new Info();

    //statistics
    this.totframerate = 0;
    this.gemframerate = 0;
}
App.prototype.imgPalette = function(img, count, name, more){
    //extract a color collection from an image
    var i;
    var haspalette = false;
    for(var index in this.namedpalettes){
        if (this.namedpalettes.hasOwnProperty(index)) {
            if (this.namedpalettes[index].name == name) {
                if (!more) {
                    this.currentpalettename = name;
                    this.pal.imgcolors = [];
                }
                else {
                    this.currentpalettename += "," + name;
                }
                for (i = 0; i < this.namedpalettes[index].pal.imgcolors.length; i++) {
                    append(this.pal.imgcolors, this.namedpalettes[index].pal.imgcolors[i]);
                }
                haspalette = true;
            }
        }
    }
    if(!haspalette){
        append(this.namedpalettes, new NamedPalette(name));
        if(!more) {
            this.pal.imgcolors = [];
        }
        var last =  this.namedpalettes.length -1;
        this.namedpalettes[last].pal.fromImage(img, count);
        for(i = 0 ; i <this.namedpalettes[index].pal.imgcolors.length; i++ ){
            append(this.pal.imgcolors, this.namedpalettes[index].pal.imgcolors[i]);
        }
    }

};
App.prototype.loadResources = function(strimages, strsounds, path){
    // the images and sound should be stored in the map path
    var i,s;
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
        for(i = 0; i < this.maximages; i++){
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
    for(i = 0; i < this.maximages; i++){
        this.images[i] =loadImage(this.resourcepath + "/" + imagenames[i], this.callbackResources);
    }

    for(s = 0; s < this.maxsounds; s++){
        this.sounds[s] = loadSound(this.resourcepath + "/" + soundnames[s], this.callbackResources);
    }
};
App.prototype.callbackResources = function(){
    //you cann't use this in a callback function
    app.loaded++;
    if(app.loaded == (app.maximages + app.maxsounds)){
        // after all the resources are loaded you can use them.
        app.isloaded = true;
    }

};
//SMART FUNCTIONS
App.prototype.is = function(param){
    var ok = false;
    if(typeof(param) !== "undefined"){
        if(param !== null){
            ok = true;
        }
    }
    return ok;
};
App.prototype.randomInt = function(min, max){
    if(app.is(max)){
        return int(random(min,max));
    }
    else{
        return int(random(min));
    }
};


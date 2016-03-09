/**
 * Created by Ria Stroes on 9-3-2016.
 */
function Test(){
    this.name = "";

}
Test.prototype.palette = function(testnr){
    //testing palette functions
    this.name = "palette test " + testnr;

    switch (testnr) {
        case 3:
        {
            if(app.imgcolors.length != 10) {
                //mix to palettes from two images
                app.imgPalette(app.images[0], 5, "water");
                app.imgPalette(app.images[1], 5, "sand", true);
            }
            // use colors from this.imgpalette
            var x, y;
            for(var index in app.imgcolors) {
                app.style.set(app.colors[0], app.imgcolors[index], 1);
                x = int(index) * 100;
                y = 100;
                rect(x + 300, y + 500, 100, 100);
            }
            //testresult
            if(app.imgcolors.length == 10 && equals(app.imgcolors[0],app.imgcolors[6])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }
        case 2:
        {
            if(app.currentpalettename != "water") {
                //load a palette from an image
                app.imgPalette(app.images[1], 5, "water");
            }
            // use colors from the image
            var x, y;
            for(var index in app.imgcolors) {
                app.style.set(app.colors[0], app.imgcolors[index], 1);
                x = int(index) * 100;
                y = 100;
                rect(x + 300, y + 300, 100, 100);
            }
            //testresult
            if(app.imgcolors.length == 5 && equals(app.imgcolors[0],app.imgcolors[1])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }
        case 1:
        {
            if(app.currentpalettename != "sand"){
                //load a palette from an image
                app.imgPalette(app.images[0], 5, "sand");
            }
            //use colors from the image
            app.style.set(app.imgcolors[0], app.imgcolors[3], 2);
            rect(random(width), random(height), 50,50);

            //testresult
            if(app.imgcolors.length == 5 && equals(app.imgcolors[0],app.imgcolors[1])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }
        case 0:
        {
            //use a black and white palette
            app.style.set(app.colors[1], app.colors[0], 2);
            ellipse(random(width), random(height), 50,50);

            //testresult
            if(app.colors.length == 2 && equals(app.colors[0],app.colors[1])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }


        default:
        {
            app.info.add(this.name + " UNKNOWN");
        }
    }

};


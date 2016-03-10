/**
 * Created by Ria Stroes on 9-3-2016.
 */
function Test(){
    this.name = "";

}
Test.prototype.start = function(){
    app.style.text(16,CENTER,app.colors[0]);
    text("START TESTRUN",width/2, height/2);
};
Test.prototype.end = function(){
    app.style.text(16,CENTER,app.colors[0]);
    text("END TESTRUN",width/2, height/2);
}
Test.prototype.palette = function(testnr){
    //testing palette functions
    this.name = "palette test " + testnr;

    switch (testnr) {
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
        case 3:
        {
            if(app.currentpalettename != "water,sand") {
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

//TODO random imgcolor
//TODO random color
//TODO random rgbcolor (light / dark)

        default:
        {
            app.info.add(this.name + " UNKNOWN");
        }
    }

};
Test.prototype.styles = function(testnr){
    //testing style functions
    this.name = "style test " + testnr;

    switch (testnr) {
        case 0:
        {
            var strokecolor = color(40,80,220);
            var fillcolor = color(190,80,40);
            var x, y;

            //DEFAULT rectMode
            app.style.set(strokecolor, fillcolor, 1);
            x = width/2 - 200;
            y = height/2;
            rect(x,y, 100, 100);
            ellipse(x,y,10,10);

            app.style.text(12,CENTER,app.colors[0]);
            text("mode == undefined", x,y + 100);

            //rectMode = CORNER
            app.style.set(strokecolor, fillcolor, 1, CORNER);
            x = width/2;
            y = height/2;
            rect(x,y, 100, 100);
            ellipse(x,y,10,10);

            app.style.text(12,CENTER,app.colors[0]);
            text("mode == CORNER", x,y + 100);

            //rectMode = CENTER
            app.style.set(strokecolor, fillcolor,4, CENTER);
            x = width/2 + 200;
            y = height/2;
            rect(x,y, 100, 100);
            ellipse(x,y,10,10);

            app.style.text(12,CENTER,app.colors[0]);
            text("mode == CENTER", x,y + 100);
            app.style.reset();



            //testresult
            app.info.add(this.name + " visible");

            break;
        }
        case 1:
        {

            break;
        }
        case 2:
        {

            break;
        }



        default:
        {
            app.info.add(this.name + " UNKNOWN");
        }
    }
};


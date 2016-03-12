/**
 * Created by Ria Stroes on 9-3-2016.
 */
function Test(){
    this.name = "";
    this.testnr = -1;
    this.subject = "";
    this.firstscene = 0;

}
Test.prototype.start = function(){
    background(app.pal.colors[1]);
    app.style.text(16,CENTER,app.pal.colors[0]);
    text("START TESTRUN",width/2, height/2);
    app.style.text(12,CENTER,app.pal.colors[0]);
    text("Use the LEFT-ARROW and RIGHT-ARROW keys in this test run.",width/2, height/2 + 20);
};
Test.prototype.end = function(){
    background(app.pal.colors[1]);
    app.style.text(16,CENTER,app.pal.colors[0]);
    text("END TESTRUN",width/2, height/2);
    app.style.text(12,CENTER,app.pal.colors[0]);
    text("Click on SPACEBAR to return to menu",width/2, height/2 + 20);
};

Test.prototype.palette = function(testnr){
    //testing palette functions
    var x, y, index;
    this.name = "palette test " + testnr;

    switch (testnr) {
        case 0:
        {
            this.showDescription("Use black and white colors.");

            app.style.set(app.pal.colors[1], app.pal.colors[0], 2);
            ellipse(random(width),  random(100,height), 50,50);

            //testresult
            if(app.pal.colors.length == 2 && equals(app.pal.colors[0],app.pal.colors[1])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }
        case 1:
        {
            this.showDescription("Use colors from an image.");

            if(app.currentpalettename != "sand"){
                //load a palette from an image
                app.imgPalette(app.images[0], 5, "sand");
            }
            //use colors from the image
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[3], 2);
            rect(random(width), random(100,height), 50,50);

            //testresult
            if(app.pal.imgcolors.length == 5 && equals(app.pal.imgcolors[0],app.pal.imgcolors[1])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }

        case 2:
        {
            this.showDescription("Use colors from an image.");

            if(app.currentpalettename != "water") {
                //load a palette from an image
                app.imgPalette(app.images[1], 5, "water");
            }
            // use colors from the image

            for(index in app.pal.imgcolors) {
                if (app.pal.imgcolors.hasOwnProperty(index)) {
                    app.style.set(app.pal.colors[0], app.pal.imgcolors[index], 1);
                    x = int(index) * 100;
                    y = 100;
                    rect(x + 300, y + 300, 100, 100);
                }
            }
            //testresult
            if(app.pal.imgcolors.length == 5 && equals(app.pal.imgcolors[0],app.pal.imgcolors[1])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }
        case 3:
        {
            this.showDescription("Use colors from a mixed palette.");

            if(app.currentpalettename != "water,sand") {
                //mix to palettes from two images
                app.imgPalette(app.images[0], 5, "water");
                app.imgPalette(app.images[1], 5, "sand", true);
            }
            // use colors from this.imgpalette
            for(index in app.pal.imgcolors) {
                if (app.pal.imgcolors.hasOwnProperty(index)) {
                    app.style.set(app.pal.colors[0], app.pal.imgcolors[index], 1);
                    x = int(index) * 100;
                    y = 100;
                    rect(x + 300, y + 300, 100, 100);
                }
            }
            //testresult
            if(app.pal.imgcolors.length == 10 && equals(app.pal.imgcolors[0],app.pal.imgcolors[6])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }
        case 4:
        {
            this.showDescription("Test random colors from app.pal.colors");

            app.style.set(app.pal.colors[1], app.pal.randomColor(), 2);
            ellipse(random(width), random(100,height), 50,50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 5:
        {
            this.showDescription("Test random image colors");

            app.style.set(app.pal.colors[1], app.pal.randomImgColor(), 2);
            ellipse(random(width), random(100,height), 50,50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 6:
        {
            this.showDescription("Test random RGB colors");

            app.style.set(app.pal.colors[1], app.pal.randomRGBColor(), 2);
            ellipse(random(width), random(100,height), 50,50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 7:
        {
            this.showDescription("Test random RGB colors in groups");

            app.style.set(app.pal.colors[1], app.pal.randomRGBColor("DARK"), 2);
            ellipse(random(width/3), random(100,height), 50,50);
            app.style.set(app.pal.colors[0], app.pal.randomRGBColor("GRAY"), 2);
            ellipse(random(width/3, width/3*2), random(100,height), 50,50);
            app.style.set(app.pal.colors[1], app.pal.randomRGBColor("LIGHT"), 2);
            ellipse(random(width/3*2, width), random(100,height), 50,50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        default:
        {
            app.info.add(this.name + " UNKNOWN");
        }
    }

};

Test.prototype.testrun = function(subject, scene){
    this.subject = subject;
    if(this.testnr == -1){
        this.firstscene = scene;
        this.testnr = scene;
    }
    this.testnr = scene - this.firstscene;
    if(this.subject == "Palette") {
        switch (this.testnr) {
            case 0:
            {
                this.start();
                break;
            }
            case 1:
            {
                this.palette(0);
                break;
            }
            case 2:
            {
                this.palette(1);
                break;
            }
            case 3:
            {
                this.palette(2);
                break;
            }
            case 4:
            {
                this.palette(3);
                break;
            }
            case 5:
            {
                this.palette(4);
                break;
            }
            case 6:
            {
                this.palette(5);
                break;
            }
            case 7:
            {
                this.palette(6);
                break;
            }
            case 8:
            {
                this.palette(7);
                break;
            }
            default:
            {
                this.end();
                break;
            }
        }
    }
    else if(this.subject == "Styles") {

        switch (this.testnr) {
            case 0:
            {
                this.start();
                break;
            }
            case 1:
            {
                this.styles(0);
                break;
            }
            default:
            {
                this.end();
                break;
            }
        }
    }
};
Test.prototype.styles = function(testnr){
    //testing style functions
    var x, y;
    var strokecolor, fillcolor;
    this.name = "style test " + testnr;

    switch (testnr) {
        case 0:
        {
            strokecolor = color(40,80,220);
            fillcolor = color(190,80,40);
            background(app.pal.colors[1]);


            //DEFAULT rectMode
            app.style.set(strokecolor, fillcolor, 1);
            x = width/2 - 200;
            y = height/2;
            rect(x,y, 100, 100);
            ellipse(x,y,10,10);

            app.style.text(12,CENTER,app.pal.colors[0]);
            text("mode == undefined", x,y + 100);

            //rectMode = CORNER
            app.style.set(strokecolor, fillcolor, 1, CORNER);
            x = width/2;
            y = height/2;
            rect(x,y, 100, 100);
            ellipse(x,y,10,10);

            app.style.text(12,CENTER,app.pal.colors[0]);
            text("mode == CORNER", x,y + 100);

            //rectMode = CENTER
            app.style.set(strokecolor, fillcolor,4, CENTER);
            x = width/2 + 200;
            y = height/2;
            rect(x,y, 100, 100);
            ellipse(x,y,10,10);

            app.style.text(12,CENTER,app.pal.colors[0]);
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
Test.prototype.showDescription = function(description){
    app.style.set(false, app.pal.colors[1],0);
    rect(200, 0, width, 100);
    app.style.text(12,CENTER,app.pal.colors[0]);
    text(this.name, width/2,30);
    text(description, width/2,50);
};

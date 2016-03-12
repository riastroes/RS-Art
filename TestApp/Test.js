/**
 * Created by Ria Stroes on 9-3-2016.
 */
function Test() {
    this.name = "";
    this.testnr = -1;
    this.subject = "";
    this.firstscene = 0;


}
Test.prototype.testrun = function (subject, scene) {

    if (this.subject != subject) {
        this.subject = subject;
        this.testnr = -1;
    }
    if (this.testnr == -1) {
        this.firstscene = scene;
        this.testnr = scene;
    }
    this.testnr = scene - this.firstscene;
    switch (this.subject) {
        case "Palette":
        {
            this.palette(this.testnr);
            break;
        }
        case "Styles":
        {
            this.styles(this.testnr);
            break;
        }
    }
};
Test.prototype.start = function () {
    background(app.pal.colors[1]);
    app.style.text(16, CENTER, app.pal.colors[0]);
    text("START TESTRUN", width / 2, height / 2);
    app.style.text(12, CENTER, app.pal.colors[0]);
    text("Use the LEFT-ARROW and RIGHT-ARROW keys in this test run.", width / 2, height / 2 + 20);
};
Test.prototype.end = function () {
    background(app.pal.colors[1]);
    app.style.text(16, CENTER, app.pal.colors[0]);
    text("END TESTRUN", width / 2, height / 2);
    app.style.text(12, CENTER, app.pal.colors[0]);
    text("Click on SPACEBAR to return to menu", width / 2, height / 2 + 20);
};

Test.prototype.palette = function (testnr) {
    //testing palette functions
    var x, y, index;
    this.name = "palette test " + testnr;

    switch (testnr) {
        case 0:
        {
            this.start();
            break;
        }
        case 1:
        {
            this.showDescription("Use black and white colors.");

            app.style.set(app.pal.colors[1], app.pal.colors[0], 2);
            ellipse(random(width), random(100, height), 50, 50);

            //testresult
            if (app.pal.colors.length == 2 && equals(app.pal.colors[0], app.pal.colors[1])) {
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

            if (app.currentpalettename != "sand") {
                //load a palette from an image
                app.imgPalette(app.images[0], 5, "sand");
            }
            //use colors from the image
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[3], 2);
            rect(random(width), random(100, height), 50, 50);

            //testresult
            if (app.pal.imgcolors.length == 5 && equals(app.pal.imgcolors[0], app.pal.imgcolors[1])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }

        case 3:
        {
            this.showDescription("Use colors from an image.");

            if (app.currentpalettename != "water") {
                //load a palette from an image
                app.imgPalette(app.images[1], 5, "water");
            }
            // use colors from the image

            for (index in app.pal.imgcolors) {
                if (app.pal.imgcolors.hasOwnProperty(index)) {
                    app.style.set(app.pal.colors[0], app.pal.imgcolors[index], 1);
                    x = int(index) * 100;
                    y = 100;
                    rect(x + 300, y + 300, 100, 100);
                }
            }
            //testresult
            if (app.pal.imgcolors.length == 5 && equals(app.pal.imgcolors[0], app.pal.imgcolors[1])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }
        case 4:
        {
            this.showDescription("Use colors from a mixed palette.");

            if (app.currentpalettename != "water,sand") {
                //mix to palettes from two images
                app.imgPalette(app.images[0], 5, "water");
                app.imgPalette(app.images[1], 5, "sand", true);
            }
            // use colors from this.imgpalette
            for (index in app.pal.imgcolors) {
                if (app.pal.imgcolors.hasOwnProperty(index)) {
                    app.style.set(app.pal.colors[0], app.pal.imgcolors[index], 1);
                    x = int(index) * 100;
                    y = 100;
                    rect(x + 300, y + 300, 100, 100);
                }
            }
            //testresult
            if (app.pal.imgcolors.length == 10 && equals(app.pal.imgcolors[0], app.pal.imgcolors[6])) {
                app.info.add(this.name + " ok");
            }
            else {
                app.info.add(this.name + " not ok");
            }
            break;
        }
        case 5:
        {
            this.showDescription("Test random colors from app.pal.colors");

            app.style.set(app.pal.colors[1], app.pal.randomColor(), 2);
            ellipse(random(width), random(100, height), 50, 50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 6:
        {
            this.showDescription("Test random image colors");

            app.style.set(app.pal.colors[1], app.pal.randomImgColor(), 2);
            ellipse(random(width), random(100, height), 50, 50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 7:
        {
            this.showDescription("Test random RGB colors");

            app.style.set(app.pal.colors[1], app.pal.randomRGBColor(), 2);
            ellipse(random(width), random(100, height), 50, 50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 8:
        {
            this.showDescription("Test random RGB colors in groups");

            app.style.set(app.pal.colors[1], app.pal.randomRGBColor("DARK"), 2);
            ellipse(random(width / 3), random(100, height), 50, 50);
            app.style.set(app.pal.colors[0], app.pal.randomRGBColor("GRAY"), 2);
            ellipse(random(width / 3, width / 3 * 2), random(100, height), 50, 50);
            app.style.set(app.pal.colors[1], app.pal.randomRGBColor("LIGHT"), 2);
            ellipse(random(width / 3 * 2, width), random(100, height), 50, 50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        default:
        {
            this.end();
        }
    }

};
Test.prototype.styles = function (testnr) {
    //testing style functions
    var x, y;
    var strokecolor, fillcolor;
    this.name = "style test " + testnr;

    switch (testnr) {
        case 0:
        {
            this.start();
            break;
        }
        case 1:
        {
            this.showDescription("Test rectMode");
            strokecolor = color(40, 80, 220);
            fillcolor = color(190, 80, 40);
            background(app.pal.colors[1]);


            //DEFAULT rectMode
            app.style.set(strokecolor, fillcolor, 1);
            x = width / 2 - 200;
            y = height / 2;
            rect(x, y, 100, 100);
            ellipse(x, y, 10, 10);

            app.style.text(12, CENTER, app.pal.colors[0]);
            text("mode == undefined", x, y + 100);

            //rectMode = CORNER
            app.style.set(strokecolor, fillcolor, 1, CORNER);
            x = width / 2;
            y = height / 2;
            rect(x, y, 100, 100);
            ellipse(x, y, 10, 10);

            app.style.text(12, CENTER, app.pal.colors[0]);
            text("mode == CORNER", x, y + 100);

            //rectMode = CENTER
            app.style.set(strokecolor, fillcolor, 4, CENTER);
            x = width / 2 + 200;
            y = height / 2;
            rect(x, y, 100, 100);
            ellipse(x, y, 10, 10);

            app.style.text(12, CENTER, app.pal.colors[0]);
            text("mode == CENTER", x, y + 100);
            app.style.reset();


            //testresult
            app.info.add(this.name + " visible");

            break;
        }
        case 2:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test blendMode with drawings.");
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300,200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,BLEND);
            ellipse(350,200,100,100);
            app.style.image(CORNER, BLEND);
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("BLEND : "+ BLEND,350,270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500,200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,MULTIPLY);
            ellipse(550,200,100,100);
            app.style.image(CORNER, BLEND);
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("MULTIPLY : "+ MULTIPLY,550,270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700,200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,DODGE);
            ellipse(750,200,100,100);
            app.style.reset();
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("DODGE : "+ DODGE,750,270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900,200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,ADD);
            ellipse(950,200,100,100);
            app.style.reset();
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("ADD : "+ ADD,950,270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(1100,200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,BURN);
            ellipse(1150,200,100,100);
            app.style.reset();
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("BURN : "+ BURN,1150,270);

//second row
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300,400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,DARKEST);
            ellipse(350,400,100,100);
            app.style.image(CORNER, BLEND);
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("DARKEST : "+ DARKEST,350,470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500,400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,LIGHTEST);
            ellipse(550,400,100,100);
            app.style.image(CORNER, BLEND);
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("LIGHTEST : "+ LIGHTEST,550,470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700,400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,EXCLUSION);
            ellipse(750,400,100,100);
            app.style.reset();
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("EXCLUSION : "+ EXCLUSION,750,470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900,400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,SCREEN);
            ellipse(950,400,100,100);
            app.style.reset();
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("SCREEN : "+ SCREEN,950,470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(1100,400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,DIFFERENCE );
            ellipse(1150,400,100,100);
            app.style.reset();
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("DIFFERENCE : "+ DIFFERENCE ,1150,470);

            //3e row
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300,600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,HARD_LIGHT);
            ellipse(350,600,100,100);
            app.style.image(CORNER, BLEND);
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("HARD_LIGHT : "+ HARD_LIGHT,350,670);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500,600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,SOFT_LIGHT);
            ellipse(550,600,100,100);
            app.style.image(CORNER, BLEND);
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("SOFT_LIGHT : "+ SOFT_LIGHT,550,670);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700,600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,REPLACE);
            ellipse(750,600,100,100);
            app.style.reset();
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("REPLACE : "+ REPLACE,750,470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900,600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1,undefined,OVERLAY);
            ellipse(950,600,100,100);
            app.style.reset();
            app.style.text(12,CENTER,app.pal.colors[0]);
            text("OVERLAY : "+ OVERLAY,950,670);


            //testresult
            app.info.add(this.name + " visible");

            break;
        }


        default:
        {
            this.end();
        }
    }
};
Test.prototype.showDescription = function (description) {
    app.style.set(false, app.pal.colors[1], 0);
    rect(200, 0, width, 100);
    app.style.text(12, CENTER, app.pal.colors[0]);
    text(this.name, width / 2, 30);
    text(description, width / 2, 50);
};

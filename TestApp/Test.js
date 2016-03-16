/**
 * Created by Ria Stroes on 9-3-2016.
 */
function Test() {
    this.name = "";
    this.testnr = -1;
    this.subject = "";
    this.firstscene = 0;
    this.testgrid = undefined;
    this.stopwatch  = undefined;
    this.bgcolor  = undefined;
    this.blobber = undefined;
    this.blobgrid = undefined;


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
            this.palettetest(this.testnr);
            break;
        }
        case "Styles":
        {
            this.stylestest(this.testnr);
            break;
        }
        case "Grid":
        {
            this.gridtest(this.testnr);
            break;
        }
        case "Button":
        {
            this.buttontest(this.testnr);
            break;
        }
        case "Stopwatch":
        {
            this.stopwatchtest(this.testnr);
            break;
        }
        case "Blob":
        {
            this.blobtest(this.testnr);
            break;
        }
    }
};
Test.prototype.start = function () {
    background(app.pal.colors[1]);
    app.style.text(16, CENTER, app.pal.colors[0]);
    text("START TESTRUN", width / 2, height / 3);
    app.style.text(12, CENTER, app.pal.colors[0]);
    text("Use the LEFT-ARROW and RIGHT-ARROW keys in this test run.", width / 2, (height / 3) + 20);
};
Test.prototype.end = function () {
    background(app.pal.colors[1]);
    app.style.text(16, CENTER, app.pal.colors[0]);
    text("END TESTRUN", width / 2, height / 2);
    app.style.text(12, CENTER, app.pal.colors[0]);
    text("Click on SPACEBAR to return to menu", width / 2, height / 3);
};

Test.prototype.palettetest = function (testnr) {
    //testing palette functions
    var x, y, i, index;
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
            this.showDescription("Show colors in app.pal.colors.");
            for (i = 0; i < app.pal.colors.length; i++) {
                app.style.set(app.pal.colors[0], app.pal.colors[i], 1);
                x = 220 + (i * 50);
                y = 120;
                rect(x, y, 50, 50);
            }
            break;
        }
        case 3:
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
        case 4:
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
        case 5:
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
        case 6:
        {
            this.showDescription("Test random colors from app.pal.colors");

            app.style.set(app.pal.colors[1], app.pal.randomColor(), 2);
            ellipse(random(width), random(100, height), 50, 50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 7:
        {
            this.showDescription("Test random image colors");

            app.style.set(app.pal.colors[1], app.pal.randomImgColor(), 2);
            ellipse(random(width), random(100, height), 50, 50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 8:
        {
            this.showDescription("Test random RGB colors");

            app.style.set(app.pal.colors[1], app.pal.randomRGBColor(), 2);
            ellipse(random(width), random(100, height), 50, 50);

            //testresult
            app.info.add(this.name + " visible");
            break;
        }
        case 9:
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
Test.prototype.stylestest = function (testnr) {
    //testing style functions
    var x, y, i, c, bm;
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
            y = height / 3;
            rect(x, y, 100, 100);
            ellipse(x, y, 10, 10);

            app.style.text(12, CENTER, app.pal.colors[0]);
            text("mode == undefined", x, y + 120);

            //rectMode = CORNER
            app.style.set(strokecolor, fillcolor, 1, CORNER);
            x = width / 2;
            y = height / 3;
            rect(x, y, 100, 100);
            ellipse(x, y, 10, 10);

            app.style.text(12, CENTER, app.pal.colors[0]);
            text("mode == CORNER", x, y + 120);

            //rectMode = CENTER
            app.style.set(strokecolor, fillcolor, 4, CENTER);
            x = width / 2 + 200;
            y = height / 3;
            rect(x, y, 100, 100);
            ellipse(x, y, 10, 10);

            app.style.text(12, CENTER, app.pal.colors[0]);
            text("mode == CENTER", x, y + 120);
            app.style.reset();


            //testresult
            app.info.add(this.name + " visible");

            break;
        }
        case 2:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test blendMode with drawings and two the same colors.");
            //first row
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, BLEND);
            ellipse(350, 200, 100, 100);
            ellipse(400, 200, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-BLEND-BLEND", 350, 130);
            text("BLEND : " + BLEND, 350, 270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, MULTIPLY);
            ellipse(550, 200, 100, 100);
            ellipse(600, 200, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-MULTIPLY-MULTIPLY", 550, 130);
            text("MULTIPLY : " + MULTIPLY, 550, 270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, DODGE);
            ellipse(750, 200, 100, 100);
            ellipse(800, 200, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-DODGE-DODGE", 750, 130);
            text("DODGE : " + DODGE, 750, 270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, ADD);
            ellipse(950, 200, 100, 100);
            ellipse(1000, 200, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-ADD-ADD", 950, 130);
            text("ADD : " + ADD, 950, 270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(1100, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, BURN);
            ellipse(1150, 200, 100, 100);
            ellipse(1200, 200, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-BURN-BURN", 1150, 130);
            text("BURN : " + BURN, 1150, 270);

//second row
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, DARKEST);
            ellipse(350, 400, 100, 100);
            ellipse(400, 400, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-DARKEST-DARKEST", 350, 330);
            text("DARKEST : " + DARKEST, 350, 470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, LIGHTEST);
            ellipse(550, 400, 100, 100);
            ellipse(600, 400, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-LIGHTEST-LIGHTEST", 550, 330);
            text("LIGHTEST : " + LIGHTEST, 550, 470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, EXCLUSION);
            ellipse(750, 400, 100, 100);
            ellipse(800, 400, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-EXCLUSION-EXCLUSION", 750, 330);
            text("EXCLUSION : " + EXCLUSION, 750, 470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, SCREEN);
            ellipse(950, 400, 100, 100);
            ellipse(1000, 400, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-SCREEN-SCREEN", 950, 330);
            text("SCREEN : " + SCREEN, 950, 470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(1100, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, DIFFERENCE);
            ellipse(1150, 400, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-DIFFERENCE-DIFFERENCE", 1150, 330);
            text("DIFFERENCE : " + DIFFERENCE, 1150, 470);

            //3e row
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300, 600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, HARD_LIGHT);
            ellipse(350, 600, 100, 100);
            ellipse(400, 600, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-HARD_LIGHT-HARD_LIGHT", 350, 530);
            text("HARD_LIGHT : " + HARD_LIGHT, 350, 670);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500, 600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, SOFT_LIGHT);
            ellipse(550, 600, 100, 100);
            ellipse(600, 600, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-SOFT_LIGHT-SOFT_LIGHT", 550, 530);
            text("SOFT_LIGHT : " + SOFT_LIGHT, 550, 670);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700, 600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, REPLACE);
            ellipse(750, 600, 100, 100);
            ellipse(800, 600, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-REPLACE-REPLACE", 750, 530);
            text("REPLACE : " + REPLACE, 750, 670);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900, 600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1, undefined, OVERLAY);
            ellipse(950, 600, 100, 100);
            ellipse(1000, 600, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-OVERLAY-OVERLAY", 950, 530);
            text("OVERLAY : " + OVERLAY, 950, 670);


            //testresult
            app.info.add(this.name + " visible");

            break;
        }
        case 3:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test blendMode with drawings and two different colors.");
            //first row
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, BLEND);
            ellipse(350, 200, 100, 100);
            ellipse(400, 200, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-BLEND-BLEND", 350, 130);
            text("BLEND : " + BLEND, 350, 270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, MULTIPLY);
            ellipse(550, 200, 100, 100);
            ellipse(600, 200, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-MULTIPLY-MULTIPLY", 550, 130);
            text("MULTIPLY : " + MULTIPLY, 550, 270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, DODGE);
            ellipse(750, 200, 100, 100);
            ellipse(800, 200, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-DODGE-DODGE", 750, 130);
            text("DODGE : " + DODGE, 750, 270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, ADD);
            ellipse(950, 200, 100, 100);
            ellipse(1000, 200, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-ADD-ADD", 950, 130);
            text("ADD : " + ADD, 950, 270);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(1100, 200, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, BURN);
            ellipse(1150, 200, 100, 100);
            ellipse(1200, 200, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-BURN-BURN", 1150, 130);
            text("BURN : " + BURN, 1150, 270);

//second row
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, DARKEST);
            ellipse(350, 400, 100, 100);
            ellipse(400, 400, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-DARKEST-DARKEST", 350, 330);
            text("DARKEST : " + DARKEST, 350, 470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, LIGHTEST);
            ellipse(550, 400, 100, 100);
            ellipse(600, 400, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-LIGHTEST-LIGHTEST", 550, 330);
            text("LIGHTEST : " + LIGHTEST, 550, 470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, EXCLUSION);
            ellipse(750, 400, 100, 100);
            ellipse(800, 400, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-EXCLUSION-EXCLUSION", 750, 330);
            text("EXCLUSION : " + EXCLUSION, 750, 470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, SCREEN);
            ellipse(950, 400, 100, 100);
            ellipse(1000, 400, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-SCREEN-SCREEN", 950, 330);
            text("SCREEN : " + SCREEN, 950, 470);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(1100, 400, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, DIFFERENCE);
            ellipse(1150, 400, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-DIFFERENCE-DIFFERENCE", 1150, 330);
            text("DIFFERENCE : " + DIFFERENCE, 1150, 470);

            //3e row
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(300, 600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, HARD_LIGHT);
            ellipse(350, 600, 100, 100);
            ellipse(400, 600, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-HARD_LIGHT-HARD_LIGHT", 350, 530);
            text("HARD_LIGHT : " + HARD_LIGHT, 350, 670);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(500, 600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, SOFT_LIGHT);
            ellipse(550, 600, 100, 100);
            ellipse(600, 600, 100, 100);
            app.style.image(CORNER, BLEND);
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-SOFT_LIGHT-SOFT_LIGHT", 550, 530);
            text("SOFT_LIGHT : " + SOFT_LIGHT, 550, 670);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(700, 600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, REPLACE);
            ellipse(750, 600, 100, 100);
            ellipse(800, 600, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-REPLACE-REPLACE", 750, 530);
            text("REPLACE : " + REPLACE, 750, 670);

            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[1], 1);
            ellipse(900, 600, 100, 100);
            app.style.set(app.pal.imgcolors[0], app.pal.imgcolors[2], 1, undefined, OVERLAY);
            ellipse(950, 600, 100, 100);
            ellipse(1000, 600, 100, 100);
            app.style.reset();
            app.style.text(12, CENTER, app.pal.colors[0]);
            text("BLEND-OVERLAY-OVERLAY", 950, 530);
            text("OVERLAY : " + OVERLAY, 950, 670);


            //testresult
            app.info.add(this.name + " visible");

            break;
        }
        case 4:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test blendMode with colors form the app.pal.imgcolors on a white background.");
            app.style.set(app.pal.colors[1], app.pal.colors[1], 1);
            rect(250, 100,(14* 80 )+40, (app.pal.imgcolors.length * 80) + 40);
            //different colors in cols
            //different blendings in rows
            //on white
            for (c = 0; c < app.pal.imgcolors.length; c++) {
                for (bm = 0; bm < 14; bm++) {
                    app.style.set(app.pal.colors[0], app.pal.imgcolors[c], 1, undefined, app.style.getBlendMode(bm));
                    x = (bm * 80) + 270;
                    y = (c * 80) + 120;
                    rect(x, y, 80, 80);


                    if (c == app.pal.imgcolors.length - 1) {
                        app.style.text(10, CENTER, app.pal.colors[0]);
                        text(app.style.getBlendMode(bm), x + 40, y + 140);
                    }
                }
            }


            app.info.add(this.name + " visible");
            break;
        }
        case 5:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test blendMode with colors form the app.pal.imgcolors on a black background.");
            app.style.set(app.pal.colors[1], app.pal.colors[1], 1);
            rect(250, 100, (app.pal.imgcolors.length * 80) + 20, 140);
            //different colors in cols
            //different blendings in rows
            //on black
            app.style.set(app.pal.colors[1], app.pal.colors[0], 1);
            rect(250, 150,(14* 80 )+40, (app.pal.imgcolors.length *80) + 40);
            for (c = 0; c < app.pal.imgcolors.length; c++) {
                for (i = 0; i < 14; i++) {
                    app.style.set(app.pal.colors[0], app.pal.imgcolors[c], 1, undefined, app.style.getBlendMode(i));
                    x = (i * 80) + 270;
                    y = (c * 80) + 170;
                    rect(x, y, 80, 80);

                    if (c == app.pal.imgcolors.length - 1) {
                        app.style.text(10, CENTER, app.pal.colors[0]);
                        text(app.style.getBlendMode(i), x + 40, y + 140);
                    }
                }
            }
            app.info.add(this.name + " visible");
            break;
        }
        case 6:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test blendMode with colors form the app.pal.imgcolors on a colored background.");
            if(typeof(this.button) == "undefined"){
                this.button = new Button("Change BG Color",createVector(400,100), 200, 50, app.pal.colors[0],app.pal.imgcolors[0],10, app.test.changeColor);
            }
            this.button.isClicked();
            this.button.draw();
            if(typeof(this.bgcolor) == "undefined"){
                this.changeColor();
            }
            app.style.set(app.pal.colors[1], this.bgcolor, 1, CORNER);
            rect(250, 150,(14* 80 )+40, (app.pal.imgcolors.length * 80) + 40);
            //different colors in cols
            //different blendings in rows
            //on white
            for (c = 0; c < app.pal.imgcolors.length; c++) {
                for (bm = 0; bm < 14; bm++) {
                    app.style.set(app.pal.colors[0], app.pal.imgcolors[c], 1, undefined, app.style.getBlendMode(bm));
                    x = (bm * 80) + 270;
                    y = (c * 80) + 170;
                    rect(x, y, 80, 80);


                    if (c == app.pal.imgcolors.length - 1) {
                        app.style.text(10, CENTER, app.pal.colors[0]);
                        text(app.style.getBlendMode(bm), x + 40, y + 140);
                    }
                }
            }


            app.info.add(this.name + " visible");
            break;
        }
        case 7:{
            background(app.pal.colors[1]);
            this.showDescription("Test style in graphics buffer.");
            if(typeof(this.pg) == "undefined"){
                this.pg = createGraphics(500,500);
            }
            this.pg.background(app.pal.colors[0]);
            app.style.pg(this.pg, app.pal.imgcolors[0], app.pal.imgcolors[1], 5, CENTER);
            this.pg.ellipse( this.pg.width/2, this.pg.height/2, 100,100);
            image(this.pg, 250,150);
            app.info.add(this.name + " visible");
            break;
        }
        default:
        {
            this.end();
        }
    }
};
Test.prototype.gridtest = function (testnr) {
    //testing grid functions
    var x, y, index;

    this.name = "grid test " + testnr;

    switch (testnr) {
        case 0:
        {
            this.start();
            break;
        }
        case 1:
        {
            this.showDescription("Use a testgrid 6 by 3.");
            if (typeof(this.testgrid) == "undefined") {
                this.testgrid = new Grid(6, 3, 225, 125, 25, height - 300);

            }
            else {
                app.style.set(app.pal.colors[1], app.pal.colors[0], 2);
                for (y = 0; y < this.testgrid.rows; y++) {
                    for (x = 0; x < this.testgrid.cols; x++) {

                        ellipse(this.testgrid.pos[x][y].x, this.testgrid.pos[x][y].y, 50, 50);
                    }

                }

            }


            //testresult
            app.info.add(this.name);
            app.info.add("left margin:" + this.testgrid.lmarge);
            app.info.add("right margin:" + this.testgrid.rmarge);
            app.info.add("top margin:" + this.testgrid.tmarge);
            app.info.add("bottom margin:" + this.testgrid.bmarge);


            break;
        }
        case 2:
        {
            break;
        }
        default:
        {
            this.end();
        }
    }
};
Test.prototype.buttontest = function (testnr) {
    //testing stopwatch functions

    //TODO start stop isn't working yet
    var pos;

    this.name = "button test " + testnr;

    switch (testnr) {
        case 0:
        {
            this.start();
            break;
        }
        case 1:
        {
            //background(app.pal.colors[1]);
            this.showDescription("Test Button.");

            if (app.currentpalettename != "sand") {
                //load a palette from an image
                app.imgPalette(app.images[0], 5, "sand");
            }

            if (typeof(this.button) == "undefined") {
                pos = createVector(300, 100);
                this.button = new Button("BUTTON", pos, 150, 50, app.pal.colors[0], app.pal.imgcolors[0], 5, app.test.clickTestButton1);
                pos.x += this.button.width;
                this.button2 = new Button("BUTTON", pos, 150, 50, app.pal.colors[0], app.pal.imgcolors[0], 10, app.test.clickTestButton2);
            }
            this.button.isClicked();
            this.button2.isClicked();
            this.button.draw();
            this.button2.draw();

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
Test.prototype.clickTestButton1 = function () {
    //call back function, do not use this
    app.style.set(app.pal.imgcolors[3], app.pal.imgcolors[4], 1);
    ellipse(random(250, width - 50), random(150, height - 50), 100, 100);

};
Test.prototype.clickTestButton2 = function () {
    //call back function, do not use this
    app.style.set(app.pal.imgcolors[3], app.pal.imgcolors[4], 1);
    rect(random(250, width - 50), random(150, height - 50), 100, 100);

};
Test.prototype.changeColor = function(){
    //call back function, do not use this
  app.test.bgcolor = app.pal.imgcolors[app.randomInt(0,app.pal.imgcolors.length)] ;

};
Test.prototype.stopwatchtest = function (testnr) {
    //testing stopwatch functions

    //TODO start stop isn't working yet
    var x, y, index;

    this.name = "stopwatch test " + testnr;

    switch (testnr) {
        case 0:
        {
            this.start();
            break;
        }
        case 1:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test Stopwatch");
            if (typeof(this.stopwatch) == "undefined") {
                this.stopwatch = new Stopwatch();
            }

            if ((mouseIsPressed && dist(350, 175, mouseX, mouseY) < 75) || this.stopwatch.status == "STARTED") {
                app.style.set(app.pal.colors[2], app.pal.colors[5], 2, CENTER);
                rect(350, 175, 150, 150);
                if (this.stopwatch.status !== "STARTED") {
                    this.stopwatch.start(10);

                }
                app.style.text(12, CENTER, app.pal.colors[0]);
                text(this.stopwatch.starttime, 350, 280);
                text((this.stopwatch.stoptime - this.stopwatch.starttime ), 550, 280);
                text((this.stopwatch.stoptime), 850, 280);
                mouseIsPressed = false;
            }
            else {
                app.style.set(app.pal.colors[1], app.pal.colors[0], 2, CENTER);
                rect(350, 175, 150, 150);
                if (this.stopwatch.status !== "STARTED") {
                    app.style.text(12, CENTER, app.pal.colors[0]);
                    text(this.stopwatch.starttime, 350, 280);
                }
            }
            if (mouseIsPressed && dist(600, 175, mouseX, mouseY) < 75) {
                app.style.set(app.pal.colors[2], app.pal.colors[5], 2, CENTER);
                rect(600, 175, 150, 150);
                this.stopwatch.checktime();
                app.style.text(12, CENTER, app.pal.colors[0]);
                text(this.stopwatch.now, 600, 280);


            }
            else {
                app.style.set(app.pal.colors[1], app.pal.colors[0], 2, CENTER);
                rect(600, 175, 150, 150);
                if (this.stopwatch.status == "STARTED") {
                    this.stopwatch.checktime();
                }
            }
            if ((mouseIsPressed && dist(850, 175, mouseX, mouseY) < 75) && this.stopwatch.status == "STARTED") {
                app.style.set(app.pal.colors[2], app.pal.colors[5], 2, CENTER);
                rect(850, 175, 150, 150);
                this.stopwatch.stop();
                app.style.text(12, CENTER, app.pal.colors[0]);
                text(this.stopwatch.stoptime, 850, 280);
            }
            else if (this.stopwatch.status == "STOPPED") {
                app.style.set(app.pal.colors[0], app.pal.colors[4], 2, CENTER);
                rect(850, 175, 150, 150);
                app.style.text(12, CENTER, app.pal.colors[0]);
                text(this.stopwatch.stoptime, 850, 280);

            }
            else {
                app.style.set(app.pal.colors[1], app.pal.colors[0], 2, CENTER);
                rect(850, 175, 150, 150);
            }


            app.style.text(14, CENTER, app.pal.colors[1]);
            text("START", 350, 175);
            text("CHECK", 600, 175);
            text("STOP", 850, 175);


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
Test.prototype.blobtest = function (testnr) {
    //testing blobber functions

    //TODO start stop isn't working yet
    var x, y, index, i, pos, mp;

    this.name = "blobber test " + testnr;

    switch (testnr) {
        case 0:
        {

            this.start();
            break;
        }
        case 1:
        {

            background(app.pal.colors[1]);

            this.showDescription("Test Blob");
            if(frameRate()> 2){
                frameRate(2);
            }
            if (typeof(this.blobber) == "undefined") {
                this.blobber = new Blobber();
            }
            if(typeof(this.blobgrid) == "undefined"){
                this.blobgrid = new Grid(3,4,200 + 100,100,100,200);

            }
            if(app.currentpalettename != "spring"){
                app.imgPalette(app.images[0],6,"spring");

            }
            for(i = 0; i <4; i++){
                this.blobber.init(this.blobgrid.get(i), 4, 200,200);
                this.blobber.style(app.pal.colors[1], app.pal.imgcolors[0],1);
                this.blobber.draw();
            }
            for(i = 4; i <8; i++){
                this.blobber.init(this.blobgrid.get(i), 6, 200,200);
                this.blobber.style(app.pal.colors[1], app.pal.imgcolors[1],1);
                this.blobber.draw();
            }
            for(i = 8; i <12; i++){
                this.blobber.init(this.blobgrid.get(i), 8, 200,200);
                this.blobber.style(app.pal.colors[1], app.pal.imgcolors[2],1);
                this.blobber.draw();

            }


            //testresult
            app.info.add(this.name + " visible");

            break;
        }
        case 2:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test Blob in ellipse and show 5 points.");
            if(frameRate()> 1){
                frameRate(1);
            }
            if (typeof(this.blobber) == "undefined") {
                this.blobber = new Blob();
            }
            if(app.currentpalettename != "spring"){
                app.imgPalette(app.images[0],6,"spring");

            }
            app.style.set(app.pal.imgcolors[3], app.pal.imgcolors[4],1);
            pos = createVector(width/2, height/2);
            ellipse(pos.x, pos.y, 600,300);
            this.blobber.create(pos, 5, 600,300);
            this.blobber.style(app.pal.colors[1], app.pal.imgcolors[2],1);
            this.blobber.draw();
            this.blobber.showPoints();
            //testresult
            app.info.add(this.name + " visible");

            break;
        }
        case 3:
        {
            background(app.pal.colors[1]);
            this.showDescription("Test Blob in ellipse and show 10 points.");
            if(frameRate()> 1){
                frameRate(1);
            }
            if (typeof(this.blobber) == "undefined") {
                this.blobber = new Blob();
            }
            if(app.currentpalettename != "spring"){
                app.imgPalette(app.images[0],6,"spring");

            }
            app.style.set(app.pal.imgcolors[3], app.pal.imgcolors[4],1);
            pos = createVector(width/2, height/2);
            ellipse(pos.x, pos.y, 600,300);
            this.blobber.create(pos, 5, 600,300);
            this.blobber.style(app.pal.colors[1], app.pal.imgcolors[2],1);
            this.blobber.draw();
            this.blobber.showPoints();
            mp = 3;
            this.blobber.createMorePoints(mp);
            this.blobber.showMorePoints(mp);
            //testresult
            app.info.add(this.name + " visible");
            app.info.add(mp * this.blobber.corners + "points");

            break;
        }

        default:
        {
            this.end();
            frameRate(60);
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

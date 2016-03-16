/**
 * Created by Ria Stroes on 16-3-2016.
 */
function keyPressed() {
    if (key == 'l' || key == 'L') {
        if (app.isrunning) {
            noLoop();
        } else {
            loop();
            app.isrunning = false;
        }
    }
    if (keyCode == RIGHT_ARROW) {
        if(app.is(app.proces)){
            app.proces.nextScene(app.pal.colors[1]);
        }
    }
    if (keyCode == LEFT_ARROW) {
        if(app.is(app.proces)) {
            app.proces.previousScene(app.pal.colors[1]);
        }
    }
    if (key  == " ") {
        //spacebar
        if(app.is(app.menu)) {
            app.menu.selected = "";
        }
   }
}

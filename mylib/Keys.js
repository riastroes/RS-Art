/**
 * Created by Ria Stroes on 16-3-2016.
 */
function keyPressed() {
    app.acanvas.elt.focus();
    //println("key:" + key);
    //println("keyCode:"+ keyCode);

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
    if(key == 'g' || key =='G'){
        app.makeGif = !app.makeGif;
        if(app.makeGif){
            frameRate(1);
        }
        else{
            app.gif.render();
            frameRate(60);
        }
    }
    if(key == 'i' || key =='I'){
        app.info.doshow = !app.info.doshow;
        if(app.info.doshow){
            app.info.show();
        }
       
    }
    if(key == 's' || key =='S'){
        image(app.signature, width-160, height-120);
        save(app.name + app.savedimages + ".jpg");
        app.savedimages++;
    }
    if(keyCode == 123){
        //F12
        var fs = fullscreen();
        fullscreen(!fs);
        return false;
    }

}

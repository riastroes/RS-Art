var app;

function setup() {

    app = new App("Logo",displayWidth, displayHeight);
    app.resourcepath ="resources";
    app.loadResources("signature.png,spring.jpg");
    //frameRate(5);

}

function draw() {
    var c, p;
    if(app.isloaded) {
        if(app.currentpalettename != "spring"){
            app.pal = new Palette(5);
            app.imgPalette(app.images[1],6,"spring");
        }
        if (app.isnot(app.logo)){
            app.pos =[];
            for(i = 0; i < 49; i++){
              var c = createVector(width/2, height/2);
              if(i<25){
              var p = app.posOnCircle(c,250,25,i);
              append(app.pos, p);
            }
            else if(i<40){
              p = app.posOnCircle(c,150,15,i);
              append(app.pos, p);
            }
            else if(i<48){
              p = app.posOnCircle(c,50,8,i);
              append(app.pos, p);
            }
            else if(i<49){
              p = app.posOnCircle(c,1,1,i);
              append(app.pos, p);
            }
            }
            app.logo = new Logo(app.pos);

            app.scene = 0;

        }

        if(app.isnot(app.l)){
            app.l = 0;
        }
        switch(app.scene) {
            case 0:{
                background(app.pal.tint(app.pal.colors[1],10));
                noStroke();
                fill(app.pal.tint(color(200),10));
                ellipse(width/2, height/2,300,300);
                app.logo.style(app.pal.colors[0], app.pal.colors[1],1);
                app.logo.rotate(0.08);
                app.logo.scale(0.02)
                app.logo.draw();

                app.runscene(200);
                break;
            }
            case 1:{
                background(app.pal.tint(app.pal.colors[1],10));
                noStroke();


                app.logo.style(app.pal.colors[0], app.pal.colors[0],1);
                app.logo.rotate(0.08);
                app.logo.scale(0.02);
                app.logo.drop();
                app.logo.draw();

                app.runscene(8000);
                break;
            }





            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        app.gifmaker.check(1, 80, false);


    }
    else{
        println("loading resources ...");
    }

}



var app;

function setup() {

    app = new App("Machines",windowWidth, windowHeight);
    app.loadResources("mooiekleuren.jpg");
    //frameRate(5);

}

function draw() {
    var i,c;
    if(app.isloaded) {

        if(app.isnot(app.project)){
          app.project = new Project();
          app.pal = new Palette(2);
          app.pal.fromImage(app.images[0],10);
          app.scene = -1;

          frameRate(10);
        }

        switch(app.scene) {
            case -1:{
                background(255);
                app.pal.showImgColors();
                app.wait(50);
                break;
            }
            case 0:{
                background(255);
                app.project.construct(1);
                app.runscene(0);
                break;
            }
            case 1:{
                background(255);
                app.project.draw(0);
                app.runscene(100);
                break;
            }
            case 2:{
                background(255);
                app.project.construct(0);
                app.runscene(0);
                break;
            }
            case 3:{
                background(255);
                app.project.draw(0);
                app.runscene(100);
                break;
            }
            case 4:{
                background(255);
                app.project.construct(2);
                app.runscene(0);
                break;
            }
            case 5:{
                background(255);
                app.project.update();
                app.project.draw(1);
                app.runscene(100);
                break;
            }
            case 6:{
              //bottom up
                background(255);
                app.project.construct(3);
                app.runscene(0);
                break;
            }
            case 7:{
                background(255);
                app.project.update();
                app.project.draw(3);
                app.runscene(50);
                break;
            }
            case 8:{
              //bottom up on paper
                background(255);
                app.project.construct(4);
                app.runscene(0);
                break;
            }
            case 9:{
                background(255);
                app.project.update();
                app.project.draw(5);
                app.runscene(100);
                break;
            }
            case 10:{
              //bottom up on paper
                background(255);
                app.project.construct(2);
                app.runscene(0);
                break;
            }
            case 11:{
                background(255);
                app.project.update();
                app.project.draw(4);
                app.runscene(500);
                break;
            }


            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        app.gifmaker.check(10, 80, false);


    }
    else{
        println("loading resources ...");
    }

}

var app;

function setup() {

    app = new App("Study Isometry");
    app.loadResources("signature.png,spring.jpg");
    //frameRate(10);

}

function draw() {

    if(app.isloaded) {

        if (app.isnot(app.isometry)){
            app.isometry = new Isometry();
            app.scene = 0;
        }
        if(app.currentpalettename != "spring"){
            app.pal = new Palette(3);
            
        }

        switch(true) {
            case (app.scene == 0):{
                app.isometry.drawGrid();
                if(frameCount ==10){
                    app.scene = 1;
                }
                break;
            }
            case (app.scene == 1):{
                    //draw vertical lines on the same height
                    app.style.set(app.pal.colors[0],false,2);
                    app.isometry.drawLine(5,10, 5, 15);
                    app.isometry.drawLine(6,10, 6, 15);
                    app.wait(20);
                    break;
                }
            case (app.scene == 2):{
                //draw vertical lines on the same height
                app.style.set(app.pal.colors[0],false,2);
                app.isometry.drawLine(7,9, 7, 14);
                app.isometry.drawLine(8,9, 8, 14);
                app.wait(20);
                break;
            }
            case (app.scene == 3):{
                //draw vertical lines on the same height
                app.style.set(app.pal.colors[0],false,2);
                app.isometry.drawLine(5,10, 7, 9);
                app.isometry.drawLine(6,10, 8, 9);
                app.isometry.drawLine(5,15, 7, 14);
                app.isometry.drawLine(6,15, 8, 14);
                app.wait(20);
                break;
            }
            case (app.scene == 4):{
                app.isometry.drawLine(5,10,6,10);
                app.isometry.drawLine(5,15,6,15);
                app.isometry.drawLine(7,9,8,9);
                app.isometry.drawLine(7,14,8,14);
                app.wait(20);
                break;
            }
            case (app.scene == 5):{
                app.isometry.drawBox(10, 10, 2,2,2);
                app.wait(50);
                break;
            }
            case (app.scene == 6):{
                background(app.pal.colors[1]);
                if(app.isnot(app.x)){
                    app.x = 10;
                }
                app.isometry.drawBox(app.x, 10, 2,2,2);
                app.x +=1;
                app.wait(50);
                break;
            }
            case (app.scene == 7):{
                background(app.pal.colors[1]);
                if(app.isnot(app.y)){
                    app.y = 10;
                }
                app.isometry.drawBox(app.x, app.y, 2,2,2);
                app.y +=1;
                app.wait(30);
                break;
            }
            case (app.scene == 8):{
                background(app.pal.colors[1]);
                app.x = app.isometry.moveX(app.x);
                app.y = app.isometry.moveY(app.y);
                app.isometry.drawBox(app.x, app.y, 2, 2, 2);
                app.wait(100);
                break;
            }
            case (app.scene == 9):{

                background(app.pal.colors[1]);
                app.x = [];
                app.y = [];
                for (i = 0; i < 100; i++){

                        app.x[i] = app.randomInt(10,90);
                        app.y[i] = app.randomInt(10,90);
                    
                        app.isometry.drawBox(app.x[i], app.y[i], 2, 2, 2);
                }
                app.wait(1);
            break;
        }
            case (app.scene ==10):{

                background(app.pal.colors[1]);
                for (i = 0; i < 100; i++) {

                    app.x[i] = app.isometry.moveX(app.x[i]);
                    app.y[i] = app.isometry.moveY(app.y[i]);
                    app.isometry.drawBox(app.x[i], app.y[i], 2, 2, 2);
                }
                app.wait(2000);
                break;
            }


        }

        app.gifmaker.check();
       

    }
    else{
        println("loading resources ...");
    }

}




var app;

function setup() {

    app = new App("Horizon");
    app.resourcepath = "resources";
    app.loadResources("greens.jpg,blues.jpg,church.png");


}

function draw() {
    if(app.isloaded) {

        if(app.isnot(app.horizon)){
            app.horizon = new Horizon();
        }
        if(typeof(app.horizon.planets[0]) == "undefined"){
            app.horizon.init();
            background(app.horizon.bgcolor);
        }


        app.horizon.draw();
        app.info.show();

        app.gifmaker.check();
    }
    else{
        println("loading resources ...");
    }
}




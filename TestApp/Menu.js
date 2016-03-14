/**
 * Created by riastroes on 11-03-16.
 */
function Menu(strmenu) {
    this.strmenu = strmenu;
    this.menus = this.strmenu.split(",");
    if (this.menus.length / 2 % 2 == 0) {
        this.grid = new Grid(2, int(this.menus.length / 2), width - (450 + 200), 150, undefined, 400);
    }
    else {
        this.grid = new Grid(2, int(this.menus.length / 2) + 1, width - (450 + 200), 150, undefined, 400);
    }
    this.buttons = [];

    this.menuwidth = 200;
    this.menuheight = 50;
    this.selected = "";
    this.init();

}
Menu.prototype.init = function(){
    var i;
    for(i = 0; i < this.menus.length; i++){
        append(this.buttons, new Button(this.menus[i],this.grid.get(i),150, 50,app.pal.imgcolors[0], app.pal.imgcolors[1],10))
    }
};

Menu.prototype.reset = function () {
    app.style.reset();
};
Menu.prototype.draw = function(){
    var index;
    for (index in this.buttons) {
        if (this.buttons.hasOwnProperty(index)) {
            this.buttons[index].draw();
        }
    }
};
Menu.prototype.isclicked = function () {
    var index;
    if (mouseIsPressed) {
        for (index in this.buttons) {
            if (this.buttons.hasOwnProperty(index)) {
                if(this.buttons[index].isclicked()){
                    this.selected = this.buttons[index].text;
                    return true;
                }
            }
        }
        mouseIsPressed = false;
    }
    return false;
};

//base components for crafty
//Crafty.viewport.height -size of the scene 

Crafty.c("Sheet", {
  init: function() {
      this.addComponent("2D, Canvas, Color, Box2D");
      this.color("grey"); 
    },
    dimmensions: function(length){
      this.attr({ w: length, h: 10 }); 
      return this;
    },
    location: function(x_pos, y_pos){
      this.attr({ x: x_pos, y: y_pos }); 
      this.box2d({
        bodyType: 'dynamic'
      });
      return this;
    }
});

Crafty.c("Block", {
  init: function() {
      this.addComponent("2D, Canvas, Color, Box2D");
      this.color("grey"); 
  },
  dimmensions: function(width, height){
    this.attr({w:width, h:height});
    return this;
  },
  location: function(x_pos, y_pos){
    this.attr({ x: x_pos, y: y_pos }); 
    this.box2d({
      bodyType: 'dynamic'
    });
    return this;
  }
});

Crafty.c("RandomPosition", {
  init: function() {
    this.attr({ x: Crafty.math.randomInt(50,350), y: Crafty.math.randomInt(50,350) });
  }
});
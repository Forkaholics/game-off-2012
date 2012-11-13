Crafty.init(400,400);


Crafty.c("RandomPosition", {
  init: function() {
    this.attr({ x: Crafty.math.randomInt(50,350), y: Crafty.math.randomInt(50,350) });
  }
});

Crafty.c("platform", {
  init: function() {
      this.addComponent("2D, Canvas, Color");
      this.color("grey"); 
    },
    plength: function(length) { this.attr({w:length, h: 10}); }
}); 

Crafty.e("platform").plength(100);

var block = Crafty.e("bob, 2D, Canvas, Twoway, RandomPosition, Color, Collision")
                  .twoway(3).color("red").attr({w: 50, h: 50})
                  .onHit('enemy', function(){
                    this.color("blue");
                  });

var enemy = Crafty.e("enemy, 2D, Canvas, RandomPosition, Color")
                  .color("blue").attr({w: 50, h: 50})
                  .bind('EnterFrame');
var stageH = 400;
var stageW = 600;

window.onload = function () {
    gameInit();
};

function gameInit() {

  Crafty.init();
  Crafty.canvas.init();
  Crafty.box2D.init(XGRAVITY, YGRAVITY, PXTOMETER, SLEEP);
  var floor = Crafty.e("2D, Canvas, Box2D")
                    .attr({ x: 0, y: 0})
                    .box2d({
                            bodyType: 'static',
                            shape: [
                                      [0, stageH],
                                      [stageW, stageH]
                                    ]
                            });
  var mouse = Crafty.e("2D, Canvas, Mouse")
                    .attr({ w: stageW, h: stageH})
                    .bind("Click", function(mouse) {
                      Crafty.e("Block").dimmensions(50,50).location(mouse.clientX-25,mouse.clientY);
                });

  var pause = Crafty.e('2D, Canvas, Mouse, Color')
                    .attr({w: 50, h: 50,
                           x: 700, y: 0})
                    .bind("Click", function(mouse){
                      Crafty.box2D.world.m_gravity.y = 0;
                    })
  Crafty.e("Sheet").dimmensions(100).location(100,200);
  Crafty.e("Block").dimmensions(50,50).location(150,250);
}
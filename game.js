

window.onload = function () {
    gameInit();
};

function gameInit() {
  Crafty.init();
  Crafty.canvas.init();
  Crafty.box2D.init(XGRAVITY, YGRAVITY, PXTOMETER, SLEEP);
  var WORLD = Crafty.box2D.world;
  var stageH = Crafty.viewport.height-50;
  var stageW = Crafty.viewport.width;
  var floor = Crafty.e("2D, Canvas, Box2D, Color")
                    .attr({ x: 0, y: stageH,
                             h:10, w: stageW-10})
                    .box2d({bodyType: 'static'})
                    .color('green');
  var mouse = Crafty.e("2D, Canvas, Mouse")
                    .attr({ w: stageW, h: Crafty.viewport.height })
                    .bind("MouseDown", function(mouse) {
                      if(mouse.mouseButton == Crafty.mouseButtons.LEFT){
                        Crafty.e("Block").dimmensions(50,50).location(mouse.clientX-25,mouse.clientY-25);
                      }else
                        Crafty.e("Sheet").dimmensions(300).location(mouse.clientX-150,mouse.clientY);
                    });

  var pause = Crafty.e('2D, Canvas, Mouse, Color')
                    .attr({w: 50, h: 50,
                           x: 700, y: 0})
                    .bind("Click", function(mouse){
                      if(Crafty.box2D.paused){
                        Crafty.box2D.resume();
                      }else{
                        Crafty.box2D.pause();
                      }
                    }).color('red');

  var ygravOff = Crafty.e('2D, Canvas, Mouse, Color')
                    .attr({w: 50, h: 50,
                           x: 900, y: 0})
                    .bind("Click", function(mouse){
                      if(WORLD.m_gravity.y == 0){
                        WORLD.m_gravity.y = 10;
                      }else{
                        WORLD.m_gravity.y = 0;
                      }
                    }).color('red');
}
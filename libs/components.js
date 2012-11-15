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

Crafty.c("Player",{
  init: function(){
    this.color("blue");
    this.attr({w:30, h:30});
    console.log(this.body);
  },

  startingLocation: function(xPos, yPos){
    this.attr({x: xPos, y: yPos});
    return this;
  },
});

Crafty.c("KeyMovableBox2D",{
  init: function(){

  this.bind('keydown', function(e) {
      // Default movement booleans to false
      move.right = move.left = move.down = move.up = false;

      // If keys are down, set the direction
      if (e.keyCode === Crafty.keys.RA) move.right = true;
      if (e.keyCode === Crafty.keys.LA) move.left = true;
      if (e.keyCode === Crafty.keys.UA) move.up = true;
      if (e.keyCode === Crafty.keys.DA) move.down = true;

      this.preventTypeaheadFind(e);
    })
  }
});

Crafty.c("MovableBox2D", {
  speed: 3,
  move: {left: false, right: false, up: false, down: false},

  init: function(){
    this.addComponent("2D, Canvas, Color, Box2D");
    this.box2d({
      bodyType: 'dynamic'
    });
    this.bind('enterframe', function() {
      if (move.right) this.x += this.speed; 
      else if (move.left) this.x -= this.speed; 
      else if (move.up) this.y -= this.speed;
      else if (move.down) this.y += this.speed;
  })
  },

  setInMotion: function(direction, speed){
    if(speed){
      this.speed = speed;
    }

    if(direction == 'left'){
      move.left=true;
    }else if(direction == 'right'){
      move.right=true;
    }else if(direction == 'up'){
      move.up=true;
    }else{
      move.down=true;
    }
  }
});

Crafty.c("RandomPosition", {
  init: function() {
    this.attr({ x: Crafty.math.randomInt(50,350), y: Crafty.math.randomInt(50,350) });
  }
});
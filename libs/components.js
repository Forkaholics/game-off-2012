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
    this.addComponent('KeyMovableBox2D');
    this.color("blue");
    this.attr({w:30, h:30});
  },
});

Crafty.c("KeyMovableBox2D",{
  init: function(){
    this.addComponent('MovableBox2D');
    this.bind('KeyDown', function(e) {
        // Default movement booleans to false
        this.move.right = 
        this.move.left = 
        this.move.down = 
        this.move.up = false;

        // If keys are down, set the direction
        if (e.keyCode == Crafty.keys['RIGHT_ARROW']){ 
          this.move.right = true;
        }else if (e.keyCode == Crafty.keys['LEFT_ARROW']){
          this.move.left = true;
        }else if (e.keyCode == Crafty.keys['UP_ARROW']){
          this.move.up = true;
        }else if (e.keyCode == Crafty.keys['DOWN_ARROW']){
           this.move.down = true;
        }
        });
    this.bind('KeyUp', function(e) {
      // Default movement booleans to false
      this.move.right = 
      this.move.left = 
      this.move.down = 
      this.move.up = false;
      if(e.keyCode == Crafty.keys['RIGHT_ARROW'] ||
         e.keyCode == Crafty.keys['LEFT_ARROW']  ||
         e.keyCode == Crafty.keys['UP_ARROW']    ||
         e.keyCode == Crafty.keys['DOWN_ARROW']  ){
        this.body.SetLinearVelocity({x:0,y:0});
      }
    });
  }
});

Crafty.c("MovableBox2D", {
  speed: 3,
  moveDirection: {left: false, right: false, up: false, down: false},

  init: function(){

    this.addComponent("2D, Canvas, Color, Box2D");
    this.bind('EnterFrame', function() {
      if(this.move.right){
        this.body.SetLinearVelocity({x:this.speed, y:0});
      }else if (this.move.left){
        this.body.SetLinearVelocity({x:-1* (this.speed), y:0});
      }else if (this.move.up){
        this.body.SetLinearVelocity({x:0, y: -1* (this.speed)});
      }else if (this.move.down){
        this.body.SetLinearVelocity({x:0, y: 1* (this.speed)});
      }
    });
  },

  setInMotion: function(direction, speed){
    if(speed){
      this.speed = speed;
    }

    if(direction == 'left'){
      this.moveDirection.left=true;
    }else if(direction == 'right'){
      this.moveDirection.right=true;
    }else if(direction == 'up'){
      this.moveDirection.up=true;
    }else{
      this.moveDirection.down=true;
    }
  },

  startingLocation: function(xPos, yPos){
    this.attr({x: xPos, y: yPos});
    this.box2d({
      bodyType: 'dynamic'
    });
    this.body.SetSleepingAllowed(false);  
    return this;
  },
});
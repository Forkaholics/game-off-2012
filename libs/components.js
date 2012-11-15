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
    this.addComponent("KeyMovableBox2D");
    this.color("blue");
    this.attr({w:30, h:30});
  }
});

Crafty.c("KeyMovableBox2D",{
  init: function(){
    this.addComponent("MovableBox2D, KeyBoard");
    this.bind('KeyDown', function(e){
      this.moveDirection.right = 
        this.moveDirection.left = 
        this.moveDirection.down = 
        this.moveDirection.up = false;

      // If keys are down, set the direction
      if (e.keyCode == Crafty.keys.RIGHT_ARROW){
        this.moveDirection.right = true;
      } 
      if (e.keyCode == Crafty.keys.LEFT_ARROW){
       this.moveDirection.left = true;
      }
      if (e.keyCode == Crafty.keys.UP_ARROW){
        this.moveDirection.up = true;
      } 
      if (e.keyCode == Crafty.keys.DOWN_ARROW){
       this.moveDirection.down = true;
      }

      //this.preventTypeaheadFind(e);
    });
  }
});

Crafty.c("MovableBox2D",{
  speed: 3,
  moveDirection: {left: false, right: false, up: false, down: false},

  init: function(){
    this.addComponent("2D, Canvas, Color, Box2D");
    // this.box2d({
    //   bodyType: 'dynamic'
    // });
    this.bind('EnterFrame', function() {
      if (this.moveDirection.right){
        console.log(this.speed);
       this.body.m_force.x += this.speed;
      }else if (this.moveDirection.left){
       this.body.m_force.x -= this.speed; 
      }else if (this.moveDirection.up){
       this.body.m_force.y -= this.speed;
      }else if (this.moveDirection.down){
       this.body.m_force.y += this.speed;
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
    this.body.allowSleep(false);
    return this;
  }
});
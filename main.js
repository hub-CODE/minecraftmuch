var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x=10;
player_y=10;

var player_object="";
var block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
          top:player_y,
          left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
          top:player_y,
          left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
 keyPressed=e.keyCode;
 if(e.shiftKey == true && keyPressed =='80'){
   block_image_width=block_image_width+10;
   block_image_height=block_image_height+10;
   document.getElementById("currentwidth").innerHTML=block_image_width;
   document.getElementById("currentheight").innerHTML=block_image_height;
 }

 if(e.shiftKey == true && keyPressed =='77'){
  block_image_width=block_image_width-10;
  block_image_height=block_image_height-10;
  document.getElementById("currentwidth").innerHTML=block_image_width;
  document.getElementById("currentheight").innerHTML=block_image_height;
}

if(keyPressed=='38'){
 up();
}

if(keyPressed=='40'){
  down();
 }
 
 if(keyPressed=='37'){
  left();
 }
 

if(keyPressed=='39'){
  right();
 }
 
 if(keyPressed=='87'){
 new_image('wall.jpg');
 }

 if(keyPressed=='66'){
  new_image('download.jpg');
  }

  if(keyPressed=='18'){
    new_image('images.jpg');
    }
   
    if(keyPressed=='83'){
      new_image('book_shelf.jpg');
      }

      if(keyPressed=='91'){
        new_image('chest.jpg');
        }
       
        if(keyPressed=='69'){
          new_image('emerald.png');
          }

          if(keyPressed=='27'){
            new_image('torch.jpg');
            }
           
            if(keyPressed=='70'){
              new_image('flower.png');
              }

              if(keyPressed=='74'){
                new_image('rose.png');
                }
               
                if(keyPressed=='73'){
                  new_image('crafting_table.png');
                  }
                   
                  if(keyPressed=='80'){
                    new_image('sand.jpg');
                    }

                    if(keyPressed=='79'){
                      new_image('wood.png');
                      }
                     
                   

 if(keyPressed=='71'){
  new_image('ground.png');
 }

 if(keyPressed=='76'){
   new_image('light_green.png');
 }

 if(keyPressed=='84'){
  new_image('trunk.jpg');
}

if(keyPressed=='82'){
  new_image('roof.jpg');
}

if(keyPressed=='89'){
  new_image('yellow_wall.png');
}

if(keyPressed=='68'){
  new_image('dark_green(1).png');
}

if(keyPressed=='85'){
  new_image('unique.png');
}

if(keyPressed=='67'){
  new_image('cloud.jpg');
}
}

function up() {
  if (player_y>=0){
  player_y=player_y-block_image_height;
  console.log("block image height ="+block_image_height);
  console.log("when up arrow key is pressed,X="+player_x+",y ="+player_y);
  canvas.remove(player_object);
  player_update();
  }
}

function down() {
  if (player_y<=500){
  player_y=player_y+block_image_height;
  console.log("block image height ="+block_image_height);
  console.log("when up arrow key is pressed,X="+player_x+",y ="+player_y);
  canvas.remove(player_object);
  player_update();
  }
}

function left() {
  if (player_x>0){
  player_x=player_x-block_image_width;
  console.log("block image height ="+block_image_width);
  console.log("when up arrow key is pressed,X="+player_x+",y ="+player_y);
  canvas.remove(player_object);
  player_update();
  }
}

function right() {
  if (player_x<=850){
  player_x=player_x+block_image_width;
  console.log("block image height ="+block_image_height);
  console.log("when up arrow key is pressed,X="+player_x+",y ="+player_y);
  canvas.remove(player_object);
  player_update();
  }
}
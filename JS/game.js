class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value", function(data){
            gameState = data.val();
        }
        )
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if (gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
            
        }
        Car1 = createSprite(100,200);
        Car1.addImage(car1_img)

        Car2 = createSprite(300,200);
        Car2.addImage(car2_img)

        Car3 = createSprite(500,200);
        Car3.addImage(car3_img)

        Car4 = createSprite(700,200);
        Car4.addImage(car4_img)

        // create Cars array
        Cars = [Car1, Car2, Car3, Car4]
    }

    play(){
        form.hidden();
        //textSize(30)
        //text("Game start!", 120, 100)
    //static functions should be called with class name, not object name
        Player.getPlayerInfo();
        //if allPlayers is defined...
        if(allPlayers !== undefined){
            //multi-dimentional(array holds elements, and those elements(players) will be their own arrays(hold name and distance values))
            background(ground)
            //negative displayHeight so that track & car images are visible when up arrow is pressed
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)
            //index of the array
            var index = 0;

            //x & y position of the cars
            var x = 150;
            var y;

            for(var plr in allPlayers){
            //adding one to the index for every loop
            index = index + 1
            //giving distance between each car
            x = x + 220;
            y = displayHeight - allPlayers[plr].distance

            //giving x & y for the cars
            Cars[index-1].x = x
            Cars[index-1].y = y

            if(index === player.index){
                //give player's car a red color
                stroke(10)
                fill("red")
                ellipse(x, y, 60, 60)
                Cars[index-1].shapeColor = "red"
                camera.position.x = displayWidth/2
                camera.position.y = Cars[index-1].y
            }

            }

        }

        //"player.index!==null" to check if player is present
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance +=10
            player.update()
        }

        if(player.distance > 3950){
            gameState = 2
        }

        drawSprites();
    }

    end(){
        console.log("Game Ended!")
    }
}
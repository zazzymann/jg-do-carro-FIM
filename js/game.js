class Game{
    constructor(){
        this.rankt = createElement('h2');
        this.title = createElement('h1');
        this.result = createElement('h2');
        this.result1 = createElement('h2');

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on(
            "value",function(data){
                gameState = data.val()
                 
            }
        )
    }
    update(state){
        database.ref('/').update({gameState:state});
    }
    async start(){
        if(gameState === 0){
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once('value');
            if (playerCountRef.exists()) {
                playerCount= playerCountRef.val();
                player.getCount();     
            } else{
                playerCount = 0
            }
            form = new Form();
            form.display(playerCount);
        }
        car1 = createSprite(200,200);
        car1.addImage("car1",car1img);
        car2 = createSprite(300,200);
        car2.addImage("car2",car2img);
        car3 = createSprite(400,200);
        car3.addImage("car3",car3img);
        car4 = createSprite(500,200);
        car4.addImage("car4",car4img)
        cars = [
            car1,
            car2,
            car3,
            car4
        ]

    }
    play(){
        form.hide();
        textSize(30);
        text("game start",120,100);
        player.getCarsAtEnd();
        Player.getPlayerInfo();
        if (allPlayers !== undefined){
            background(rgb(198,135,103));
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0;
            var x = 175;
            var y;
            var displayPos = 200;
            for (var plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                if (index === player.index){
                    this.playerButton = createButton(player.name);
                    this.playerButton.position(x-25,);
                    stroke(10);
                    fill('#39FF14');
                    ellipse(x,y,60,60);
                    cars[index-1].shapeColor = "blue";
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y

                    
                }
                displayPos +=20
                fill("black")
                textSize(30);
                this.rankt.html(player.name+' : '+player.distance);
                this.rankt.position(displayWidth/2+90,displayHeight/2);
            }

        }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            
            player.distance +=10
    
            player.update();
        }
        if (player.distance >3800){
            gameState = 2;
            player.rank += 1
            Player.updateCarsatEnd(player.rank)
        }
        drawSprites();
    }
    end(){
        this.title.html("Ranking");
        this.title.position(displayWidth/2 - 600, 0);
        for(var plr in allPlayers){
           
          textSize(15);
          this.result.position(allPlayers[plr].name + ": " + allPlayers[plr].rank)
        }
        console.log("ACABO")
        console.log("rank:",player.rank);
        
       
    }
    
}
class Form{
    constructor(){
        this.input = createInput('nickname');
        this.button = createButton('play');
        this.reset = createButton('reset pls')
        this.msg = createElement('h4');
        this.title = createElement('h2');
    }
    hide(){
        this.msg.hide();
        this.button.hide();
        this.input.hide();        
    }
    display(playerCount){

        this.title.html("PUDIM MULTIPLAYER");
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           player.name = this.input.value();
           playerCount+=1;
           player.index = playerCount
           player.update();
           player.updateCount(playerCount);
           this.msg.html("bem vindo ao mundo "+ player.name);
           this.msg.position(displayWidth/2-70,displayHeight/4);
           
        });
       // this.reset.position(displayWidth/2+90,displayHeight/2);
        this.reset.position(displayWidth-100,20);
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        });
    }
}
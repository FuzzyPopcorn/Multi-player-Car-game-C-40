class Form{
    constructor(){
        this.input = createInput('name'),
        this.Greeting = createElement('h2'),
        this.button = createButton("play"),
        this.title = createElement('h1'),
        this.reset = createButton('reset')
    }

    hidden(){
        this.input.hide();
        this.button.hide();
        this.Greeting.hide();
        this.title.hide();
        
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2,150);

        //var input = createInput('name');
        this.input.position(displayWidth/2,displayHeight/2-40);

        //var Greeting = createElement('h2');

        //var button = createButton("play");
        this.button.position(displayWidth/2,displayHeight/2);
        this.reset.position(displayWidth-100, 20)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            //shows player count as player number
            player.index = playerCount;
            player.update();
            player.updatecount(playerCount);

            this.Greeting.html("Hello " + player.name + "!");
            this.Greeting.position(displayWidth/2,displayHeight/2);
        })
        this.reset.mousePressed(()=>{
            player.updatecount(0);
            game.update(0);
        })   
        
    }

    
}
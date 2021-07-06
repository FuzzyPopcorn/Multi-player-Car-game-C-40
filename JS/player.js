class Player{
    constructor(){
 this.name = null,
 this.distance = 0,
 this.index = null
    }

    getCount(){
        var gameStateref = database.ref("playerCount")
        gameStateref.on("value", function(data){
            playerCount = data.val();
        }
        )
    }

    updatecount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    //update(name){
    update(){
        var playerindex = "players/player" + this.index
        database.ref(playerindex).set({
            name:this.name,
            distance: this.distance
        })

    }

    static getPlayerInfo(){
        var playerInforef = database.ref("players")
        playerInforef.on("value", (data)=>{
            //assigning/getting all the data(including name and distance) from "players" to allPlayers
            allPlayers = data.val();
        })
    }
}
var gameTitle = function(game){}

gameTitle.prototype = {
    create: function(){
        var gameTitle = this.game.add.sprite(this.game.width/2,this.game.height/2,"gametitle");
        gameTitle.anchor.setTo(0.5,0.5);
        gameTitle.scale.setTo(0.75, 0.4);
        var playButton = this.game.add.button(330,220,"play",this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);

        this.menuMusic = this.game.add.audio('menu');
        this.menuMusic.loopFull();
    },

    playTheGame: function(){
        this.menuMusic.stop();
        this.game.state.start("TheGame");
    }
}
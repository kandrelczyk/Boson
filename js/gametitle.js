var gameTitle = function(game){}

gameTitle.prototype = {
    create: function(){
    //    var gameTitle = this.game.add.sprite(160,160,"gametitle");
    //    gameTitle.anchor.setTo(0.5,0.5);
        var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);

        this.menuMusic = this.game.add.audio('menu');
        this.menuMusic.loopFull();
    },
    playTheGame: function(){
        this.menuMusic.stop();
        this.game.state.start("TheGame");
    }
}
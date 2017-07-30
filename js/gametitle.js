var gameTitle = function(game){}

gameTitle.prototype = {
    create: function(){
        var gameTitle = this.game.add.sprite(this.game.width/2,this.game.height/2,"gametitle");
        gameTitle.anchor.setTo(0.5,0.5);
        gameTitle.scale.setTo(0.22, 0.22);
        var playButton = this.game.add.button(800,this.game.height/2,"play",this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);
        playButton.scale.setTo(0.4, 0.4);

        this.menuMusic = this.game.add.audio('menu');
        this.fightSnd = this.game.add.audio('fight');
        this.menuMusic.loopFull();

        this.game.input.gamepad.start();
        this.pad1 = this.game.input.gamepad.pad1;
        this.pad2 = this.game.input.gamepad.pad2;
    },

    update: function() {
        if ((this.pad1.justPressed(Phaser.Gamepad.XBOX360_A) || this.pad1.justPressed(Phaser.Gamepad.XBOX360_B) ||
                this.pad1.justPressed(Phaser.Gamepad.XBOX360_X) ||this.pad1.justPressed(Phaser.Gamepad.XBOX360_Y))) {

            this.playTheGame();
        }

    },

    playTheGame: function(){
        this.menuMusic.stop();
        this.fightSnd.play();
        this.game.state.start("TheGame");
    }
}
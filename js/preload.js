var preload = function(game){}

preload.prototype = {
    preload: function(){
        this.game.load.image('gametitle', 'assets/gametitle.png');
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform.png');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.spritesheet('atom', 'assets/atom.png', 98, 78);
        this.game.load.spritesheet('atom2', 'assets/atom2.png', 98, 78);
        this.game.load.spritesheet('platform1', 'assets/platform1_bNr', 400, 45);
        this.game.load.spritesheet('platform2', 'assets/platform2_bNr', 400, 119);
        this.game.load.spritesheet('platform3', 'assets/platform3_bNr', 400, 137);

        this.game.load.audio('menu', 'assets/audio/menu.mp3');
        this.game.load.audio('game', 'assets/audio/game.mp3');
        this.game.load.image('verticalground', 'assets/verticalplatform.png');


    },

    create: function(){
        this.game.state.start("TheGame");
    }
}
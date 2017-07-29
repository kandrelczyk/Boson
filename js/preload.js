var preload = function(game){}

preload.prototype = {
    preload: function(){
        this.game.load.image('sky', 'assets/sky.png');
        this.game.load.image('ground', 'assets/platform.png');
        this.game.load.image('star', 'assets/star.png');
        this.game.load.spritesheet('atom', 'assets/atom.png', 98, 78);
        this.game.load.spritesheet('atom2', 'assets/atom2.png', 98, 78);

        this.game.load.audio('menu', 'assets/audio/menu.mp3');
        this.game.load.audio('game', 'assets/audio/game.mp3');

    },

    create: function(){
        this.game.state.start("TheGame");
    }
}
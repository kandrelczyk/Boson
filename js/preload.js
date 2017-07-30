var preload = function(game){}

preload.prototype = {
    preload: function(){
        this.game.load.image('gametitle', 'assets/gametitle.png');
        this.game.load.image('play', 'assets/play.png');
        this.game.load.image('background', 'assets/backgrounddesaturado.png');
        this.game.load.image('ground', 'assets/platform.png');
        this.game.load.spritesheet('bullet', 'assets/bullet.png', 8, 8);
        this.game.load.spritesheet('atom', 'assets/atom.png', 98, 78);
        this.game.load.spritesheet('atom2', 'assets/atom2.png', 98, 78);
        this.game.load.spritesheet('platform1', 'assets/Platform1rnbRotated.png', 45, 383);
        this.game.load.spritesheet('platform2', 'assets/platform2.png', 400, 119);
        this.game.load.spritesheet('platform3', 'assets/platform3.png', 400, 137);
        this.game.load.spritesheet('platformFloorRoof', 'assets/Platform1rnbRotatedHorizontal.png', 383, 45);

        this.game.load.audio('menu', 'assets/audio/menu.mp3');
        this.game.load.audio('explode', 'assets/audio/explode.mp3');
        this.game.load.audio('fight', 'assets/audio/fight.mp3');
        this.game.load.audio('attraction', 'assets/audio/attraction.mp3');
        this.game.load.audio('game', 'assets/audio/game.mp3');
        this.game.load.audio('death', 'assets/audio/death.mp3');
        this.game.load.audio('shoot', 'assets/audio/shoot.mp3');
        this.game.load.audio('platform_hit', 'assets/audio/platform_hit.mp3');
        this.game.load.audio('atom_hit', 'assets/audio/atom_hit.mp3');
        this.game.load.image('verticalground', 'assets/verticalplatform.png');


    },

    create: function(){
        this.game.state.start("GameTitle");
    }
}
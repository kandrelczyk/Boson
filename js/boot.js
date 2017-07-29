var boot = function(game){
    console.log("%cStarting Boson", "color:white; background:red");
};

boot.prototype = {
    preload: function(){

    },

    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.game.state.start("Preload");
    }
}
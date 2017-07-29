var theGame = function(game) {

    this.lastShot = 0;
}

theGame.prototype = {


    create: function () {

        //  We're going to be using physics, so enable the Arcade Physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A simple background for our game
        this.game.add.sprite(0, 0, 'sky');

        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = this.game.add.group();

        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;

        //  Now let's create two ledges
        var ledge = platforms.create(400, 400, 'ground');
        ledge.body.immovable = true;

        ledge = platforms.create(-150, 250, 'ground');
        ledge.body.immovable = true;

        ledge = platforms.create(50, 500, 'ground');
        ledge.body.immovable = true;

        // The player and its settings
        player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');

        //  We need to enable physics on the player
        this.game.physics.arcade.enable(player);

        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = false;

        //  Our two animations, walking left and right.
        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);

        //  Finally some stars to collect
        stars = this.game.add.group();

        //  We will enable physics for any star that is created in this group
        stars.enableBody = true;



        //  Our controls.
        cursors = this.game.input.keyboard.createCursorKeys();

    },

    update: function () {

        if (player.body.y > this.game.world.height) {
            this.game.add.text(this.game.world.width / 2, this.game.world.height / 2, 'Game Over', {fontSize: '32px', fill: '#000'});
            this.game.state.start("GameTitle",true,false);
        }

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        //  this.game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
        this.game.physics.arcade.overlap(platforms, stars, this.changePlatform, null, this);
        this.game.physics.arcade.collide(player, platforms, this.checkAtraction, null, this);

        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -150;

            player.animations.play('left');
        }
        else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 150;

            player.animations.play('right');
        }
        else {
            //  Stand still
            player.animations.stop();

            player.frame = 4;
        }

        // this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)
        // WASD + altgr

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) && this.lastShot < (Date.now() - 1000)) {
            //  Create a star inside of the 'stars' group


            var direction = 0;
            if (cursors.right.isDown) {
                direction = 1;
            }
            else if (cursors.left.isDown) {
                direction = -1;
            }



            if (direction != 0 || cursors.up.isDown || cursors.down.isDown) {
                this.lastShot = Date.now();



                

                

                //  Let gravity do its thing
                


                if (cursors.down.isDown && cursors.left.isDown) {
                    var star = stars.create(player.body.x + (50 * direction) + 30, player.body.y + 40, 'star');
                    star.body.velocity.y = 300;
                }
                else if (cursors.down.isDown && cursors.right.isDown) {
                    var star = stars.create(player.body.x + (50 * direction) - 30, player.body.y + 40, 'star');
                    star.body.velocity.y = 300;
                }
                else if (cursors.up.isDown && cursors.left.isDown) {
                    var star = stars.create(player.body.x + (50 * direction) + 30, player.body.y, 'star');
                    star.body.velocity.y = -300;
                }
                else if (cursors.up.isDown && cursors.right.isDown) {
                    var star = stars.create(player.body.x + (50 * direction) - 30, player.body.y, 'star');
                    star.body.velocity.y = -300;
                }

                else if (cursors.down.isDown) {
                    var star = stars.create(player.body.x + (40 * direction) + 3.5, player.body.y + 50, 'star');
                    star.body.velocity.y = 300;
                    console.log("shoot DOWN");
                }
                else if (cursors.up.isDown) {
                    var star = stars.create(player.body.x + (40 * direction) + 3.5, player.body.y - 20, 'star');
                    star.body.velocity.y = -300;
                    console.log("shoot UP");
                }
                else if (cursors.left.isDown) {
                    var star = stars.create(player.body.x + (20 * direction), player.body.y + 10, 'star');
                    console.log("shoot LEFT");
                }
                else if (cursors.right.isDown) {
                    var star = stars.create(player.body.x + (30 * direction), player.body.y + 10, 'star');
                    console.log("shoot RIGHT");
                }
                


                
                
                

                if (direction != 0) {
                    star.body.velocity.x = 300 * direction;

                }

                star.body.gravity.y = 0;

                //  This just gives each star a slightly random bounce value
                star.body.bounce.y = 0.7 + Math.random() * 0.2;
            }
        }
    },

        collectStar: function (player, star){

        // Removes the star from the screen
         star.kill();

        if (player.scale.x == 1.2) {
            player.scale.set(1, 1);
        } else {
            //  Add and update the score
            player.scale.set(1.2, 1.2);
        }

    },

    changePlatform: function (platform, star) {

        // Removes the star from the screen
        star.kill();

        if (platform.scale.x == 1.2) {
            platform.scale.set(1, 1);
        } else {
            //  Add and update the score
            platform.scale.set(1.2, 1.2);
        }
    },

    checkAtraction: function (player, platform) {

        if (platform.scale.x == 1 && player.scale.x != 1.2) {

            player.body.velocity.y = -350;
        }
        if (platform.scale.x == 1.2 && player.scale.x != 1) {

            player.body.velocity.y = -350;
        }

    }
}
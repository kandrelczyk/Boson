var theGame = function(game) {

    this.lastShot = 0;
}

theGame.prototype = {


    create: function () {


        this.gameMusic = this.game.add.audio('game');
        this.gameMusic.loopFull();

        //  We're going to be using physics, so enable the Arcade Physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A simple background for our game
        this.game.add.sprite(0, 0, 'sky');

        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = this.game.add.group();

        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;

        //  Now let's create two ledges

        var ledge = platforms.create(170, 10, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.3, 0.5);

        ledge = platforms.create(800, 10, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.3, 0.5);

        ledge = platforms.create(480, 20, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.05, 3);

        ledge = platforms.create(480, 480, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.05, 3);

        ledge = platforms.create(100, 580, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.3, 0.5);

        ledge = platforms.create(800, 580, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.3, 0.5);

        ledge = platforms.create(20, 430, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.05, 3);

        ledge = platforms.create(20, 80, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.05, 3);

        ledge = platforms.create(980, 430, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.05, 3);

        ledge = platforms.create(980, 80, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.05, 3);

        ledge = platforms.create(300, 250, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.05, 2);

        ledge = platforms.create(700, 250, 'ground');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.scale.setTo(0.05, 2);

        // The player and its settings
        player = this.game.add.sprite(500, 500, 'atom');

        player.charge = -1;
        player.checkWorldBounds = true;
        player.events.onOutOfBounds.add(this.gameOver, this);

        player.scale.setTo(0.8, 0.8);
        //  We need to enable physics on the player
        this.game.physics.arcade.enable(player);

        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0;
        player.body.gravity.y = 1;
        player.body.collideWorldBounds = false;

        //  Our two animations, walking left and right.
        player.animations.add('idle_b', [5, 6, 7, 8, 9, 10, 11, 12], 10, true);
        player.animations.add('idle_r', [13, 14, 15, 16, 17, 18, 19, 20], 10, true);

        //  Finally some stars to collect
        stars = this.game.add.group();

        //  We will enable physics for any star that is created in this group
        stars.enableBody = true;

        player.animations.play('idle_b');


        //  Our controls.
        cursors = this.game.input.keyboard.createCursorKeys();



        // PLAYER 2 implantation:

        // The player2 and its settings
        player2 = this.game.add.sprite(50, 50, 'atom');

        player2.charge = -1;
        player2.checkWorldBounds = true;
        player2.events.onOutOfBounds.add(this.gameOver, this);

        player2.scale.setTo(0.8, 0.8);
        //  We need to enable physics on the player
        this.game.physics.arcade.enable(player2);

        //  Player physics properties. Give the little guy a slight bounce.
        player2.body.bounce.y = 0;
        player2.body.gravity.y = 1;
        player2.body.collideWorldBounds = false;

        //  Our two animations, walking left and right.
        player2.animations.add('idle_b', [5, 6, 7, 8, 9, 10, 11, 12], 10, true);
        player2.animations.add('idle_r', [13, 14, 15, 16, 17, 18, 19, 20], 10, true);

        //  Finally some stars to collect
        stars = this.game.add.group();

        //  We will enable physics for any star that is created in this group
        stars.enableBody = true;

        player2.animations.play('idle_b');




        // PLAYER 2 FINISH.

    },

    update: function () {

        if (player.body.y > this.game.world.height) {
            this.game.add.text(this.game.world.width / 2, this.game.world.height / 2, 'Game Over', {fontSize: '32px', fill: '#000'});
            this.game.state.start("GameTitle",true,false);
        }

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
        this.game.physics.arcade.overlap(platforms, stars, this.changePlatform, null, this);

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
                    console.log("SHOOT DOWN LEFT")
                }
                else if (cursors.down.isDown && cursors.right.isDown) {
                    var star = stars.create(player.body.x + (80 * direction), player.body.y + 40, 'star');
                    star.body.velocity.y = 300;
                    console.log("SHOOT DOWN RIGHT")
                }
                else if (cursors.up.isDown && cursors.left.isDown) {
                    var star = stars.create(player.body.x + (50 * direction) + 30, player.body.y, 'star');
                    star.body.velocity.y = -300;
                    console.log("SHOOT UP LEFT")
                }
                else if (cursors.up.isDown && cursors.right.isDown) {
                    var star = stars.create(player.body.x + (80 * direction), player.body.y, 'star');
                    star.body.velocity.y = -300;
                    console.log("SHOOT UP RIGHT")
                }

                else if (cursors.down.isDown) {
                    var star = stars.create(player.body.x + (40 * direction) + 25, player.body.y + 60, 'star');
                    star.body.velocity.y = 300;
                    console.log("shoot DOWN");
                }
                else if (cursors.up.isDown) {
                    var star = stars.create(player.body.x + (40 * direction) + 25, player.body.y - 20, 'star');
                    star.body.velocity.y = -300;
                    console.log("shoot UP");
                }
                else if (cursors.left.isDown) {
                    var star = stars.create(player.body.x + (20 * direction), player.body.y + 15, 'star');
                    console.log("shoot LEFT");
                }
                else if (cursors.right.isDown) {
                    var star = stars.create(player.body.x + (80 * direction), player.body.y + 15, 'star');
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

        platforms.forEach(this.checkAttracion, this, true, player);
        platforms.forEach(this.checkAttracion, this, true, player2);

        player.magneticVelocityY = player.body.velocity.y;
        player.magneticVelocityX = player.body.velocity.x;
        this.game.physics.arcade.collide(player, platforms, this.collidePlatform, null, this);

        player2.magneticVelocityY = player2.body.velocity.y;
        player2.magneticVelocityX = player2.body.velocity.x;
        this.game.physics.arcade.collide(player2, platforms, this.collidePlatform, null, this);

    },

    collectStar: function (player, star){

        // Removes the star from the screen
         star.kill();

        player.charge *= -1;
        if (player.charge == 1) {
            player.animations.play('idle_b');
        } else {
            player.animations.play('idle_r');
        }

    },

    changePlatform: function (platform, star) {

        // Removes the star from the screen
        star.kill();

        platform.charge *= -1;
    },

    checkAttracion: function (platform, player) {
        var platformW = platform.body.width;
        var platformH = platform.body.height;
        var platformX = platform.body.x;
        var platformY = platform.body.y;




        var playerX = player.body.x+ player.body.width / 2;
        var playerY = player.body.y+ player.body.height / 2;


        var affectsV = false;
        var affectsH = false;

        if (playerX >= platformX && playerX <= platformX + platformW) {
            if (Math.abs(playerY - platformY) < 250) {
                affectsV = true;
            }
        }

        if (playerY >= platformY && playerY <= platformY + platformH) {
            if (Math.abs(playerX - platformX) < 250) {
                affectsH = true;
            }
        }

        if (affectsV) {

            if (platform.charge != player.charge) {
                if (playerY >= platformY) {
                    console.log("attract Y -")
                    player.body.velocity.y = -50;
                } else {
                    console.log("attract Y +")
                    player.body.velocity.y = 50;
                }

            } else {
                if (playerY >= platformY) {
                    console.log("repeal Y +")
                    player.body.velocity.y = 50;
                } else {
                    console.log("repeal Y -")
                    player.body.velocity.y = -50;
                }
            }
          //  console.log("p: " + playerY + " plat: " + platformY + " vel " + player.body.velocity.y);

        }

        if (affectsH) {
            if (platform.charge != player.charge) {
                if (playerX >= platformX) {
                    console.log("attract X -")
                    player.body.velocity.x = -50;
                } else {
                    console.log("attract X +")
                    player.body.velocity.x = 50;
                }

            } else {
                if (playerX >= platformX) {
                    console.log("repeal X +")

                    player.body.velocity.x = 50;
                } else {
                    console.log("repeal X -")

                    player.body.velocity.x = -50;
                }
            }
          //  console.log("Hplatform: x " + platformX + " y" + platformY + " wid " + platformW + " hei" + platformH);
        }

    },

    collidePlatform: function (player, platform) {

        if (player.charge != platform.charge) {

            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
        } else {
            player.body.velocity.x = player.magneticVelocityX;
            player.body.velocity.y = player.magneticVelocityY;

        }

        if (player2.charge != platform.charge) {

            player2.body.velocity.x = 0;
            player2.body.velocity.y = 0;
        } else {
            player2.body.velocity.x = player.magneticVelocityX;
            player2.body.velocity.y = player.magneticVelocityY;

        }
    },




    gameOver: function (player) {
        this.gameMusic.stop();
        this.game.state.start("GameTitle");
    }
}
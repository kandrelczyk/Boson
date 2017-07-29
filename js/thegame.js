var theGame = function(game) {

    this.lastShot = 0;

    this.lastShot2 = 0;

    this.score1 = 0;
    this.score2 = 0;

    this.scored = false;

}

theGame.prototype = {


    createPlatforms: function () {


        var platforms = this.game.add.group();

        
        platforms.enableBody = true;

        

        var ledge = platforms.create(150, 10, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.5);

        ledge = platforms.create(860, 10, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.frame = 1;
        ledge.scale.setTo(0.3, 0.5);

        ledge = platforms.create(480, -60, 'platform1');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.5, 0.5);


        ledge = platforms.create(480, 480, 'platform1');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.5, 0.5);

        
        ledge = platforms.create(45, 580, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.5);

        
        ledge = platforms.create(800, 580, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.frame = 1;
        ledge.scale.setTo(0.3, 0.5);
        ledge.bounciness = 0;

        ledge = platforms.create(20, 430, 'platform1');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.5, 0.5);

        ledge = platforms.create(20, 60, 'platform1');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.5, 0.5);

        ledge = platforms.create(980, 430, 'platform1');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.frame = 1;
        ledge.scale.setTo(0.5, 0.5);

        ledge = platforms.create(980, 60, 'platform1');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.frame = 1;
        ledge.scale.setTo(0.5, 0.5);


        return platforms;
    },

    create: function () {

        this.gameMusic = this.game.add.audio('game');
        this.gameMusic.loopFull(0.3);

        this.death = this.game.add.audio('death');
        this.shoot = this.game.add.audio('shoot');
        this.platform_hit = this.game.add.audio('platform_hit');
        this.atom_hit = this.game.add.audio('atom_hit');

        //  We're going to be using physics, so enable the Arcade Physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A simple background for our game
        var bg = this.game.add.sprite(0, 0, 'background');
        bg.scale.setTo(1, 0.7)
        var tween = this.game.add.tween(bg);
        tween.to({ x: -29000 }, 500000, 'Linear', true, 0);

        this.platforms = this.createPlatforms();
        // The player and its settings
        this.player = this.game.add.sprite(800, 480, 'atom');
        this.player.charge = -1;
        this.player.checkWorldBounds = true;
        this.player.events.onOutOfBounds.add(this.score, this);

        this.player.scale.setTo(0.8, 0.8);
        //  We need to enable physics on the player
        this.game.physics.arcade.enable(this.player);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player.body.bounce.y = 0;
        this.player.body.bounce.x = 0;
        this.player.body.gravity.y = 1;
        this.player.body.gravity.x = 1;
        this.player.body.collideWorldBounds = false;

        //  Our two animations, walking left and right.
        this.player.animations.add('idle_b', [5, 6, 7, 8, 9, 10, 11, 12], 10, true);
        this.player.animations.add('idle_r', [13, 14, 15, 16, 17, 18, 19, 20], 10, true);
        this.player.animations.add('fire_b', [21], 10, false);
        this.player.animations.add('fire_r', [22], 10, false);

        //  Finally some stars to collect
        stars = this.game.add.group();

        //  We will enable physics for any star that is created in this group
        stars.enableBody = true;

        this.player.animations.play('idle_b');

        this.player.name = 'Player 1';

        //  Our controls.
        cursors = this.game.input.keyboard.createCursorKeys();


        // PLAYER 2 implantation:

        // The player2 and its settings

        this.player2 = this.game.add.sprite(80, 120, 'atom2');


        this.player2.charge = 1;
        this.player2.checkWorldBounds = true;
        this.player2.events.onOutOfBounds.add(this.score, this);

        this.player2.scale.setTo(0.8, 0.8);
        //  We need to enable physics on the player
        this.game.physics.arcade.enable(this.player2);

        //  Player physics properties. Give the little guy a slight bounce.
        this.player2.body.bounce.y = 0;
        this.player2.body.bounce.x = 0;
        this.player2.body.gravity.y = 1;
        this.player2.body.gravity.x = 1;
        this.player2.body.collideWorldBounds = false;

        //  Our two animations, walking left and right.
        this.player2.animations.add('idle_b', [5, 6, 7, 8, 9, 10, 11, 12], 10, true);
        this.player2.animations.add('idle_r', [13, 14, 15, 16, 17, 18, 19, 20], 10, true);
        this.player2.animations.add('fire_b', [21], 10, false);
        this.player2.animations.add('fire_r', [22], 10, false);
        this.player2.name = 'Player 2';

        //  Finally some stars to collect
        stars = this.game.add.group();

        //  We will enable physics for any star that is created in this group
        stars.enableBody = true;

        this.player2.animations.play('idle_r');

        this.score1Text = this.game.add.text(20, 10, this.score1, {fontSize: '32px', fill: '#fff'});
        this.score2Text = this.game.add.text(980, 10, this.score2, {fontSize: '32px', fill: '#fff'});

        this.player2.life = 3;
        this.player.life = 3;

    },

    update: function () {

        this.score1Text.setText(this.score1);
        this.score2Text.setText(this.score2);

        
        this.game.physics.arcade.overlap(this.player, stars, this.collectStar, null, this);
        this.game.physics.arcade.overlap(this.platforms, stars, this.changePlatform, null, this);

       

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) && this.lastShot < (Date.now() - 500)) {
            


            var direction = 0;
            if (cursors.right.isDown) {
                direction = 1;
            }
            else if (cursors.left.isDown) {
                direction = -1;
            }



            if (direction != 0 || cursors.up.isDown || cursors.down.isDown) {
                this.lastShot = Date.now();


                
                

                var star;
                if (cursors.down.isDown && cursors.left.isDown) {
                    star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = 1000;
                    console.log("SHOOT DOWN LEFT")
                }
                else if (cursors.down.isDown && cursors.right.isDown) {
                    star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = 1000;
                    console.log("SHOOT DOWN RIGHT")
                }
                else if (cursors.up.isDown && cursors.left.isDown) {
                    star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = -1000;
                    console.log("SHOOT UP LEFT")
                }
                else if (cursors.up.isDown && cursors.right.isDown) {
                    star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = -1000;
                    console.log("SHOOT UP RIGHT")
                }

                else if (cursors.down.isDown) {
                    star = stars.create(this.player.body.x + 35, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = 1000;
                    console.log("shoot DOWN");
                }
                else if (cursors.up.isDown) {
                    star = stars.create(this.player.body.x + 35, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = -1000;
                    console.log("shoot UP");
                }
                else if (cursors.left.isDown) {
                    var star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');

                    console.log("shoot LEFT");
                }
                else if (cursors.right.isDown) {
                    star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
                    console.log("shoot RIGHT");
                }

                star.animations.add('wobble', [0,2,4], 10, true);
                star.animations.play("wobble");

                this.shoot.play();
                if (this.player.charge == -1) {
                    this.player.animations.play('fire_b');
                } else {
                    this.player.animations.play('fire_r');
                }
                this.player.animations.currentAnim.onComplete.add(this.p1FireComplete, this);

                if (direction != 0) {
                    star.body.velocity.x = 1000 * direction;
                }

                star.body.gravity.y = 0;
                star.from = "Player 1";

            }
        }





        if (this.game.input.keyboard.isDown(Phaser.Keyboard.ALT) && this.lastShot2 < (Date.now() - 500)) {
            


            var direction = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                direction = 1;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                direction = -1;
            }



            if (direction != 0 || this.game.input.keyboard.isDown(Phaser.Keyboard.W) || this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                this.lastShot2 = Date.now();


                
                


                if (this.game.input.keyboard.isDown(Phaser.Keyboard.S) && this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = 1000;
                    console.log("SHOOT DOWN LEFT")
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S) && this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = 1000;
                    console.log("SHOOT DOWN RIGHT")
                }
                
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W) && this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = -1000;
                    console.log("SHOOT UP LEFT")
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W) && this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = -1000;
                    console.log("SHOOT UP RIGHT")
                }

                

                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                    var star = stars.create(this.player2.body.x + 35, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = 1000;
                    console.log("shoot DOWN");
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                    var star = stars.create(this.player2.body.x + 35, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = -1000;
                    console.log("shoot UP");
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    console.log("shoot LEFT");
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    console.log("shoot RIGHT");
                }

                if (this.player2.charge == 1) {
                    this.player2.frame = 20;
                }
                this.shoot.play();
                if (this.player2.charge == 1) {
                    this.player2.animations.play('fire_r');
                } else {
                    this.player2.animations.play('fire_b');
                }
                this.player2.animations.currentAnim.onComplete.add(this.p2FireComplete, this);

                if (direction != 0) {
                    star.body.velocity.x = 1000 * direction;

                }

                star.body.gravity.y = 0;


                star.from = "Player 2";

                

            }
        }

        
        this.game.physics.arcade.overlap(this.player, stars, this.collectStar, null, this);
        this.game.physics.arcade.overlap(this.player2, stars, this.collectStar, null, this);

        this.platforms.forEach(this.checkAttracion, this, true, this.player);

        this.platforms.forEach(this.checkAttracion, this, true, this.player2);


        this.player.magneticVelocityY = this.player.body.velocity.y;
        this.player.magneticVelocityX = this.player.body.velocity.x;

        this.game.physics.arcade.collide(this.player, this.platforms, this.collidePlatform, null, this);

        this.player2.magneticVelocityY = this.player2.body.velocity.y;
        this.player2.magneticVelocityX = this.player2.body.velocity.x;
        this.game.physics.arcade.collide(this.player2, this.platforms, this.collidePlatform, null, this);

    },

    collectStar: function (player, star){

        
        

        if (star.from === player.name){
            return;
        }
        else {
            star.kill();
            this.atom_hit.play();
            player.charge *= -1;
            if (player.name == "Player 2") {
                if (player.charge == 1) {
                    player.animations.play('idle_r');
                } else {
                    player.animations.play('idle_b');
                }
            } else {
                if (player.charge == 1) {
                    player.animations.play('idle_r');
                } else {
                    player.animations.play('idle_b');
                }
            }

        }


        player.life--;
        console.log("life: " + player.life);
        if (player.life <= 0) {
            if (player.name == "Player 1") {
                this.score(this.player);
            } else {
                this.score(this.player2);
            }
        }


    },

    changePlatform: function (platform, star) {

        
        star.kill();
        this.platform_hit.play();
        platform.charge *= -1;

        if (platform.charge == 1) {
            platform.frame = 1;
        } else {
            platform.frame = 0;
        }
    },

    checkAttracion: function (platform, player) {
        var platformW = platform.body.width;
        var platformH = platform.body.height;
        var platformX = platform.body.x;
        var platformY = platform.body.y;

        var playerX = player.body.x;
        var playerY = player.body.y;
        var playerW = player.body.width;
        var playerH = player.body.height;

        var affectsV = false;
        var affectsH = false;
        var distanceV = 0;
        var distanceH = 0;

        if (playerX <= (platformX + platformW) && platformX <=(playerX + playerW)) {
            if (Math.abs(playerY - platformY) < 200) {
                affectsV = true;
                distanceV = 100;
            }
        }

        if (playerY <= (platformY + platformH) && platformY <=(playerY + playerH)) {
            if (Math.abs(playerX - platformX) < 200) {
                affectsH = true;
                distanceH = 100;

            }
        }

        if (affectsV) {

            if (platform.charge != player.charge) {
                if (playerY >= platformY) {
                    player.body.velocity.y = -distanceV;
                } else {
                    player.body.velocity.y = distanceV;
                }

            } else {
                if (playerY >= platformY) {
                    player.body.velocity.y = distanceV;
                } else {
                    player.body.velocity.y = -distanceV;
                }
            }

        }

        if (affectsH) {
            if (platform.charge != player.charge) {
                if (playerX >= platformX) {
                    player.body.velocity.x = -distanceH;
                } else {
                    player.body.velocity.x = distanceH;
                }

            } else {
                if (playerX >= platformX) {

                    player.body.velocity.x = distanceH;
                } else {

                    player.body.velocity.x = -distanceH;
                }
            }
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

    },

    score: function (player) {

        if (this.scored) {
            return;
        }

        this.scored = true;

        this.death.play();

        player.body.velocity.x = 0;
        player.body.velocity.y = 0;

        if (player.name == "Player 1") {
            this.score1++;
        } else {
            this.score2++;
        }

        var endGame = false;
        var text = "";
        if (this.score1 == 10) {
            text = "Player 1 wins!";
            endGame = true;

        } else if (this.score2 == 10) {
            text = "Player 2 wins!";
            endGame = true;
        } else if (player.name == "Player 1") {
            text = "Player 2 scores!";
        } else {
            text = "Player 1 scores!";

        }
        this.scoredText = this.game.add.text(this.game.width / 2 - 130, this.game.height / 2, text, {
            fontSize: '32px',
            fill: '#fff'
        });

        if (endGame) {
            this.game.time.events.add(Phaser.Timer.SECOND * 3, this.backToTitle, this);
        } else {
            this.game.time.events.add(Phaser.Timer.SECOND * 3, this.restoreStage, this);
        }
    },

    restoreStage: function () {

        this.scored = false;

        this.scoredText.kill()
        this.platforms.callAll('kill');
        this.platforms = this.createPlatforms();

        this.player.x = 820;
        this.player.y = 500;
        this.player.body.velocity.setTo(0, 0);
        this.player.charge = -1;
        this.player.animations.play('idle_b');

        this.player.life = 3;
        this.player2.life = 3;

        this.player2.x = 150;
        this.player2.y = 80;
        this.player2.body.velocity.setTo(0, 0);
        this.player2.charge = 1;
        this.player2.animations.play('idle_r');

    },

    backToTitle: function () {
        this.gameMusic.stop();
        this.game.state.start("GameTitle");
    },

    p1FireComplete: function() {

        if (this.player.charge == 1) {
            this.player.animations.play('idle_r');
        } else {
            this.player.animations.play('idle_b');
        }
    },
    p2FireComplete: function() {

        if (this.player2.charge == 1) {
            this.player2.animations.play('idle_r');
        } else {
            this.player2.animations.play('idle_b');
        }
    }
}
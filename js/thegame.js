var theGame = function(game) {

    this.lastShot = 0;
    this.lastShot2 = 0;

    this.score1 = 0;
    this.score2 = 0;

    this.scored = false;

    //this.shootVel = 750;

}

theGame.prototype = {




    createPlatforms: function () {


        var platforms = this.game.add.group();

        
        platforms.enableBody = true;

        
        //Laterales:
        var ledge = platforms.create(20, 430, 'platform1');
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
        //Arriba:

        ledge = platforms.create(50, 20, 'platformFloorRoof');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.8, 0.8);

        ledge = platforms.create(390, 30, 'platformFloorRoof');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.6, 0.6);

        ledge = platforms.create(640, 20, 'platformFloorRoof');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.frame = 1;
        ledge.scale.setTo(0.8, 0.8);
/*
        ledge = platforms.create(50, 20, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(180, 20, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(310, 20, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(440, 20, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(570, 20, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(700, 20, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(830, 20, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);
*/
        //Abajo:

        ledge = platforms.create(50, 560, 'platformFloorRoof');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.8, 0.8);

        ledge = platforms.create(390, 560, 'platformFloorRoof');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.frame = 1;
        ledge.scale.setTo(0.6, 0.6);

        ledge = platforms.create(640, 560, 'platformFloorRoof');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.frame = 1;
        ledge.scale.setTo(0.8, 0.8);

/*
        ledge = platforms.create(830, 560, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(700, 560, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(570, 560, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(440, 560, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(310, 560, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(180, 560, 'platform3');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(50, 560, 'platform2');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);
*/
        //Medio:
            //Verticales centrales:
        ledge = platforms.create(500, 440, 'platform1');
        ledge.body.immovable = true;
        ledge.charge = 1;
        ledge.frame = 1;
        ledge.scale.setTo(0.3, 0.3);

        ledge = platforms.create(500, 60, 'platform1');
        ledge.body.immovable = true;
        ledge.charge = -1;
        ledge.frame = 0;
        ledge.scale.setTo(0.3, 0.3);






        return platforms;
    },

    create: function () {

        this.gameMusic = this.game.add.audio('game');
        this.gameMusic.loopFull(0.3);

        this.death = this.game.add.audio('death');
        this.shoot = this.game.add.audio('shoot');
        this.explode = this.game.add.audio('explode');
        this.platform_hit = this.game.add.audio('platform_hit');
        this.atom_hit = this.game.add.audio('atom_hit');

        //  We're going to be using physics, so enable the Arcade Physics system
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //  A simple background for our game
        var bg = this.game.add.sprite(0, 0, 'background');
        bg.scale.setTo(1, 1)
        var tween = this.game.add.tween(bg);
        tween.to({ x: -29000 }, 500000, 'Linear', true, 0);

        this.platforms = this.createPlatforms();
        // The player and its settings
        this.player = this.game.add.sprite(860, 480, 'atom');
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

        this.player.animations.add('idle_b3', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
        this.player.animations.add('idle_r3', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
        this.player.animations.add('fire_b3', [16], 10, false);
        this.player.animations.add('fire_r3', [17], 10, false);
        this.player.animations.add('idle_b2', [18, 19, 20, 21, 22, 23, 24, 25], 10, true);
        this.player.animations.add('idle_r2', [26, 27, 28, 29, 30, 31, 32, 33], 10, true);
        this.player.animations.add('fire_b2', [34], 10, false);
        this.player.animations.add('fire_r2', [35], 10, false);
        this.player.animations.add('idle_b1', [36, 37, 38, 39, 40, 41, 42, 43], 10, true);
        this.player.animations.add('idle_r1', [44, 45, 46, 47, 48, 49, 50, 51], 10, true);
        this.player.animations.add('fire_b1', [52], 10, false);
        this.player.animations.add('fire_r1', [53], 10, false);


        //  Finally some stars to collect
        stars = this.game.add.group();

        //  We will enable physics for any star that is created in this group
        stars.enableBody = true;

        this.player.animations.play('idle_b3');

        this.player.name = 'Player 1';

        //  Our controls.
        cursors = this.game.input.keyboard.createCursorKeys();


        // PLAYER 2 implantation:

        // The player2 and its settings

        this.player2 = this.game.add.sprite(60, 70, 'atom2');


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
        this.player2.animations.add('idle_b3', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
        this.player2.animations.add('idle_r3', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
        this.player2.animations.add('fire_b3', [16], 10, false);
        this.player2.animations.add('fire_r3', [17], 10, false);
        this.player2.animations.add('idle_b2', [18, 19, 20, 21, 22, 23, 24, 25], 10, true);
        this.player2.animations.add('idle_r2', [26, 27, 28, 29, 30, 31, 32, 33], 10, true);
        this.player2.animations.add('fire_b2', [34], 10, false);
        this.player2.animations.add('fire_r2', [35], 10, false);
        this.player2.animations.add('idle_b1', [36, 37, 38, 39, 40, 41, 42, 43], 10, true);
        this.player2.animations.add('idle_r1', [44, 45, 46, 47, 48, 49, 50, 51], 10, true);
        this.player2.animations.add('fire_b1', [52], 10, false);
        this.player2.animations.add('fire_r1', [53], 10, false);
        this.player2.name = 'Player 2';

        //  Finally some stars to collect
        stars = this.game.add.group();

        //  We will enable physics for any star that is created in this group
        stars.enableBody = true;

        this.player2.animations.play('idle_r3');

        this.score1Text = this.game.add.text(20, 10, this.score1, {fontSize: '32px', fill: '#fff'});
        this.score2Text = this.game.add.text(980, 10, this.score2, {fontSize: '32px', fill: '#fff'});

        this.player2.life = 3;
        this.player.life = 3;

        this.score1 = 0;
        this.score2 = 0;

        this.game.input.gamepad.start();
        this.pad1 = this.game.input.gamepad.pad1;
        this.pad2 = this.game.input.gamepad.pad2;




       



        this.emitter = this.game.add.emitter(0, 0, 10);

        this.emitter.makeParticles('bullet');
        this.emitter.gravity = 0;


    },

    update: function () {

        var shootVel = 400;


        this.score1Text.setText(this.score1);
        this.score2Text.setText(this.score2);

        
        this.game.physics.arcade.overlap(this.player, stars, this.collectStar, null, this);
        this.game.physics.arcade.overlap(this.platforms, stars, this.changePlatform, null, this);


        //CONTROLS PAD PLAYER 1

        if ((this.pad1.justPressed(Phaser.Gamepad.XBOX360_A) || this.pad1.justPressed(Phaser.Gamepad.XBOX360_B) ||
            this.pad1.justPressed(Phaser.Gamepad.XBOX360_X) ||this.pad1.justPressed(Phaser.Gamepad.XBOX360_Y)) &&
            (this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) != 0 || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) != 0) &&
             this.lastShot < (Date.now() - 600))

        {
            this.lastShot = Date.now();

            var star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
            star.animations.add('wobble', [0,2,4], 10, true);
            star.animations.play("wobble");

            this.shoot.play();
            if (this.player.charge == -1) {
                this.player.animations.play('fire_b' + this.player.life);
            } else {
                this.player.animations.play('fire_r'  + this.player.life);
            }
            this.player.animations.currentAnim.onComplete.add(this.p1FireComplete, this);

            star.body.velocity.x = shootVel * this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X);
            star.body.velocity.y = shootVel * this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y);


            star.body.gravity.y = 0;
            star.from = "Player 1";
        }


        //CONTROLS PAD PLAYER 2
        
        if ((this.pad2.justPressed(Phaser.Gamepad.XBOX360_A) || this.pad2.justPressed(Phaser.Gamepad.XBOX360_B) ||
            this.pad2.justPressed(Phaser.Gamepad.XBOX360_X) ||this.pad2.justPressed(Phaser.Gamepad.XBOX360_Y)) &&
            (this.pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) != 0 || this.pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) != 0) &&
             this.lastShot2 < (Date.now() - 600))
            //this.pad3.justPressed(Phaser.Gamepad.XBOX360_A) || this.pad3.justPressed(Phaser.Gamepad.XBOX360_B) ||
           // this.pad3.justPressed(Phaser.Gamepad.XBOX360_X) || this.pad3.justPressed(Phaser.Gamepad.XBOX360_Y) ||

            //this.pad4.justPressed(Phaser.Gamepad.XBOX360_A) || this.pad4.justPressed(Phaser.Gamepad.XBOX360_B) ||
            //this.pad4.justPressed(Phaser.Gamepad.XBOX360_X) || this.pad4.justPressed(Phaser.Gamepad.XBOX360_Y)
            

        {
            this.lastShot2 = Date.now();

            var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
            star.animations.add('wobble', [0,2,4], 10, true);
            star.animations.play("wobble");

            this.shoot.play();
            if (this.player.charge == -1) {
                this.player.animations.play('fire_b'  + this.player2.life);
            } else {
                this.player.animations.play('fire_r'  + this.player2.life);
            }
            this.player.animations.currentAnim.onComplete.add(this.p1FireComplete, this);


            star.body.velocity.x = shootVel * this.pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X);
            star.body.velocity.y = shootVel * this.pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y);
            if(star.body.velocity.x === 0 && star.body.velocity.y === 0) {
                star.body.velocity.x = shootVel * this.pad3.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X);
                star.body.velocity.y = shootVel * this.pad3.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y);
            }
            else if (star.body.velocity.x === 0 && star.body.velocity.y === 0){
                star.body.velocity.x = shootVel * this.pad4.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X);
                star.body.velocity.y = shootVel * this.pad4.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y);
            }

            


            star.body.gravity.y = 0;
            star.from = "Player 2";
        }



        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SHIFT) && this.lastShot < (Date.now() - 600)) {
            


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
                    star.body.velocity.y = shootVel;
                    console.log("SHOOT DOWN LEFT")
                }
                else if (cursors.down.isDown && cursors.right.isDown) {
                    star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = shootVel;
                    console.log("SHOOT DOWN RIGHT")
                }
                else if (cursors.up.isDown && cursors.left.isDown) {
                    star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = -shootVel;
                    console.log("SHOOT UP LEFT")
                }
                else if (cursors.up.isDown && cursors.right.isDown) {
                    star = stars.create(this.player.body.x + 30, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = -shootVel;
                    console.log("SHOOT UP RIGHT")
                }

                else if (cursors.down.isDown) {
                    star = stars.create(this.player.body.x + 35, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = shootVel;
                    console.log("shoot DOWN");
                }
                else if (cursors.up.isDown) {
                    star = stars.create(this.player.body.x + 35, this.player.body.y + 30, 'bullet');
                    star.body.velocity.y = -shootVel;
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
                    this.player.animations.play('fire_b' + this.player.life);
                } else {
                    this.player.animations.play('fire_r'  + this.player.life);
                }
                this.player.animations.currentAnim.onComplete.add(this.p1FireComplete, this);

                if (direction != 0) {
                    star.body.velocity.x = shootVel * direction;
                }

                star.body.gravity.y = 0;
                star.from = "Player 1";

            }
        }




        //PLAYER2 CONTROLS KEYBOARD
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.ALT) && this.lastShot2 < (Date.now() - 600)) {
            


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
                    star.body.velocity.y = shootVel;
                    console.log("SHOOT DOWN LEFT")
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S) && this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = shootVel;
                    console.log("SHOOT DOWN RIGHT")
                }
                
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W) && this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = -shootVel;
                    console.log("SHOOT UP LEFT")
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W) && this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
                    var star = stars.create(this.player2.body.x + 30, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = -shootVel;
                    console.log("SHOOT UP RIGHT")
                }

                

                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
                    var star = stars.create(this.player2.body.x + 35, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = shootVel;
                    console.log("shoot DOWN");
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                    var star = stars.create(this.player2.body.x + 35, this.player2.body.y + 30, 'bullet');
                    star.body.velocity.y = -shootVel;
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
                    this.player2.animations.play('fire_r'  + this.player2.life);
                } else {
                    this.player2.animations.play('fire_b'  + this.player2.life);
                }
                this.player2.animations.currentAnim.onComplete.add(this.p2FireComplete, this);

                if (direction != 0) {
                    star.body.velocity.x = shootVel * direction;

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

        this.game.physics.arcade.collide(this.player, this.player2, this.playerCollision, null, this);

    },

    playerCollision: function(player, player2) {

    },


    collectStar: function (player, star){

        var shootVel = 400;
        

        if (star.from === player.name){
            return;
        }
        else {

            var particle = this.game.add.sprite(player.body.x + 30, player.body.y + 30, 'bullet');
            this.game.physics.arcade.enable(particle);
            
            particle.body.velocity.x = star.body.velocity.x + 500;
            particle.body.velocity.y = shootVel * (Math.random() < 0.5 ? -1 : 1);

            player.life--;


            star.kill();
            this.atom_hit.play();
            player.charge *= -1;
            if (player.name == "Player 2") {
                if (player.charge == 1) {
                    player.animations.play('idle_r' + player.life);
                } else {
                    player.animations.play('idle_b' + player.life);
                }
            } else {
                if (player.charge == 1) {
                    player.animations.play('idle_r' + player.life);
                } else {
                    player.animations.play('idle_b' + player.life);
                }
            }

        }


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
        
        var playerSpeed = 80;


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
                distanceV = playerSpeed;
            }
        }

        if (playerY <= (platformY + platformH) && platformY <=(playerY + playerH)) {
            if (Math.abs(playerX - platformX) < 200) {
                affectsH = true;
                distanceH = playerSpeed;

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

        this.gameMusic.stop();

        if (this.player2.life == 0 || this.player.life == 0) {
            this.explode.play();
            if (this.player2.life == 0) {
                this.player2.scale.setTo(0);
                this.emitter.x = this.player2.x;
                this.emitter.y = this.player2.y;

            } else {
                this.player.scale.setTo(0);
                this.emitter.x = this.player.x;
                this.emitter.y = this.player.y;

            }
            this.emitter.start(true, 2000, null, 10);
        }

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

        this.player.x = 860;
        this.player.y = 480;
        this.player.body.velocity.setTo(0, 0);
        this.player.charge = -1;
        this.player.animations.play('idle_b3');
        this.player.scale.setTo(0.8, 0.8);

        this.player.life = 3;
        this.player2.life = 3;

        this.player2.x = 60;
        this.player2.y = 70;
        this.player2.body.velocity.setTo(0, 0);
        this.player2.charge = 1;
        this.player2.animations.play('idle_r3');
        this.player2.scale.setTo(0.8, 0.8);

        this.gameMusic.loopFull(0.3);


    },

    backToTitle: function () {
        this.gameMusic.stop();
        this.game.state.start("GameTitle");
    },

    p1FireComplete: function() {

        if (this.player.charge == 1) {
            this.player.animations.play('idle_r' + this.player.life);
        } else {
            this.player.animations.play('idle_b' + this.player.life);
        }
    },
    p2FireComplete: function() {

        if (this.player2.charge == 1) {
            this.player2.animations.play('idle_r' + this.player2.life);
        } else {
            this.player2.animations.play('idle_b' + this.player2.life);
        }
    }
}

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

}

var player;
var platforms;
var cursors;

var lastShot = 0;

var stars;
var score = 0;
var scoreText;

function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game
    game.add.sprite(0, 0, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

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
    player = game.add.sprite(32, game.world.height - 150, 'dude');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = false;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    //  Finally some stars to collect
    stars = game.add.group();

    //  We will enable physics for any star that is created in this group
    stars.enableBody = true;



    //  The score
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    if (player.body.y > game.world.height) {
        game.add.text(game.world.width/2, game.world.height / 2, 'Game Over', { fontSize: '32px', fill: '#000' });
    }

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, collectStar, null, this);
    game.physics.arcade.overlap(platforms, stars, changePlatform, null, this);
    game.physics.arcade.collide(player, platforms, checkAtraction, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) &&  lastShot < (Date.now() - 1000)) {
        //  Create a star inside of the 'stars' group


        var direction = 0;
        if (cursors.right.isDown) {
            direction = 1;
        }
        else if (cursors.left.isDown) {
            direction = -1;
        }

        if (direction != 0 || cursors.up.isDown || cursors.down.isDown) {
            lastShot = Date.now();

            var star = stars.create(player.body.x + (40 * direction), player.body.y - 20, 'star');

            //  Let gravity do its thing

            if (cursors.up.isDown) {
                star.body.velocity.y = -300;
            }
            else if (cursors.down.isDown) {
                star.body.velocity.y = 300;
            }

            if (direction != 0) {
                star.body.velocity.x = 300 * direction;

            }

            star.body.gravity.y = 0;

            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }
    }
}

function collectStar (player, star) {

    // Removes the star from the screen
    star.kill();

    if (player.scale.x == 1.2) {
        player.scale.set(1, 1);
    } else {
        //  Add and update the score
        player.scale.set(1.2, 1.2);
    }

}

function changePlatform (platform, star) {

    // Removes the star from the screen
    star.kill();

    if (platform.scale.x == 1.2) {
        platform.scale.set(1, 1);
    } else {
        //  Add and update the score
        platform.scale.set(1.2, 1.2);
    }
}

function checkAtraction (player, platform) {
    console.log("checkAttr " + platform.scale.x + " pl " + player.scale.x);

    if (platform.scale.x == 1 && player.scale.x != 1.2) {
        console.log("jump checkAttr " + platform.scale.x + " pl " + player.scale.x);

        player.body.velocity.y = -350;
    }
    if (platform.scale.x == 1.2 && player.scale.x != 1) {
        console.log("jump checkAttr " + platform.scale.x + " pl " + player.scale.x);

        player.body.velocity.y = -350;
    }

}

class SceneA extends Phaser.Scene{
  constructor(){
    super();
  }
  preload(){
    this.load.image('ball', 'soccer ball.png');
    this.load.plugin('rexpathfollowerplugin', 'rexpathfollowerplugin.min.js');
  }
  create(){
    let canvasHeight = this.game.config.height;
    let canvasWidth = this.game.config.width;
    this.ball = this.add.image(canvasWidth/1.8, canvasHeight-100,'ball').setScale(0.7);
    
    this.tweens.add({
      targets:this.ball,
      y: canvasHeight-50,
      ease: 'bounce',
      duration: 2000,
    });
    
    this.goalPost = this.add.graphics();
    
    this.goalPost.beginPath();
    this.goalPost.lineStyle(5, '0xffffff');
    this.goalPost.strokePoints([{x: canvasWidth/2.2, y: 200}, {x:canvasWidth/2.2, y:100}, {x: canvasWidth/1.65, y: 100}, {x: canvasWidth/1.65, y: 200}]).setAlpha(0.5);

    this.kicked = false;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.cursors.up.onDown = ()=>{
      this.ballPath = this.add.path();
      this.ballPath.moveTo( canvasWidth/1.8, canvasHeight-70);
      this.ballPath.lineTo( canvasWidth/1.85, 180);

      this.ball.pathFollower = this.plugins.get('rexpathfollowerplugin').add(this.ball,{
        path: this.ballPath,
        t: 0,
        rotateToPath: true,
      });

      this.ballLinearTween = this.tweens.add({
        targets: this.ball.pathFollower,
        t: 1,
        ease: 'Cubic',
        duration: 1000,
      }, this);

      this.tweens.add({
        targets: this.ball,
        alpha: 0.5,
        scale: 0.5,
        rotation: 1000,
        // depth: 10,
        ease: 'Cubic',
        duration: 1000,
      }, this);

    };

    // this.ball.on('pointerdown', () => {
    //   console.log('hi');
    // });
    
  }
};

window.onload = function(){
  const config = {
    banner: {
      hidePhaser: true,
    },
    pixelArt: true,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: 'PhaserGame'
    },
    title: 'Soccer',
    type: Phaser.Auto,
    scene: [ SceneA ]
  };
  const game = new Phaser.Game(config);
  window.focus();
};
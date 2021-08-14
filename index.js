class SceneA extends Phaser.Scene{
  constructor(){
    super();
  }
  preload(){
    this.load.image('ball', 'soccer ball.png');
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

    this.goalPost.lineStyle(5, '0xffffff');
    this.goalPost.strokeRect(canvasWidth/2.5, 100, 300, 200);

    this.kicked = false;
    
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
import Preloader from './preload.js';
import BallPath from './ballPaths.js';
import MoveBall from './moveBall.js';

class SceneA extends Phaser.Scene{
  constructor(){
    super('SceneA');
  }
  create(){
    let canvasHeight = this.game.config.height;
    let canvasWidth = this.game.config.width;
    this.ball = this.add.image(canvasWidth/1.8, canvasHeight-100,'ball').setScale(0.7).setInteractive();
    
    this.tweens.add({
      targets:this.ball,
      y: canvasHeight-50,
      ease: 'bounce',
      duration: 2000,
    });
    
    const goalPost = this.add.graphics();
    
    goalPost.beginPath();
    goalPost.lineStyle(5, '0xffffff');
    goalPost.strokePoints([{x: canvasWidth/2.2, y: 200}, {x:canvasWidth/2.2, y:100}, {x: canvasWidth/1.65, y: 100}, {x: canvasWidth/1.65, y: 200}]).setAlpha(0.5);

    this.kicked = false;

    this.cursors = this.input.keyboard.createCursorKeys();

    this.ball.on('pointerup', ()=>{

      this.ballPath = new BallPath(this, canvasHeight, canvasWidth).linearPath();
      
      new MoveBall(this).shoot()
    });

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
      autocenter: Phaser.Scale.CENTER_BOTH,
      parent: 'PhaserGame'
    },
    title: 'Soccer',
    type: Phaser.Auto,
    scene: [ Preloader, SceneA ]
  };
  const game = new Phaser.Game(config);
  window.focus();
};
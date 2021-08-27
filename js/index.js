import Preloader from './preload.js';
import Target from './target.js';
import ScoreGoal from './scoreGoal.js';

let draw = false;
class SceneA extends Phaser.Scene{
  constructor(){
    super('SceneA');
  }
  create(){
    const canvasHeight = this.game.config.height;
    const canvasWidth = this.game.config.width;
    this.ball = this.add.image(canvasWidth/1.85, canvasHeight-100,'ball').setScale(0.5).setInteractive({useHandCursor: true});
    
    this.planet = this.make.image({
      x:Phaser.Math.Between(200, 900), 
      y:150, 
      key:'planet',
      scale: 0.05,
    }).setInteractive();
    this.planet.on('pointerup', () => {
      this.scene.restart();
    })

    this.tweens.add({
      targets:this.ball,
      y: canvasHeight-50,
      ease: 'bounce',
      duration: 2000,
    });

    this.ball.on('pointerdown', ()=>{
      draw = true;
      if(draw)new Target(this, draw).target();
      draw = false;
    });

    new ScoreGoal(this).hitEarth();

  }
};

window.onload = function(){
  const config = {
    banner: {
      hidePhaser: true,
    },
    backgroundColor: '#1d3c31',
    pixelArt: true,
    scale: {
      mode: Phaser.Scale.FIT,
      autocenter: Phaser.Scale.CENTER_BOTH,
      parent: 'MessSoccer',
    },
    title: 'Soccer',
    type: Phaser.Auto,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: [ Preloader, SceneA ]
  };
  const game = new Phaser.Game(config);
  window.focus();
};
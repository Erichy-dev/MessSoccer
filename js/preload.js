export default class Preloader extends Phaser.Scene{
  constructor(){
    super('Preloader');
  }
  
  preload(){
    this.load.setPath('assets/');
    this.load.image('ball', 'soccer ball.png');
    this.load.image('planet')
    this.load.setPath('js/')
    this.load.plugin('rexpathfollowerplugin', 'rexpathfollowerplugin.min.js');

  }
  create(){
    this.scene.start('SceneA');
  }
}
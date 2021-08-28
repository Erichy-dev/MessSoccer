export default class Preloader extends Phaser.Scene{
  constructor(){
    super('Preloader');
  }
  
  preload(){
    this.load.image('ball', 'soccer.png');
    this.load.image('planet', 'earth.png');
    this.load.setPath('js/');
    this.load.plugin('rexpathfollowerplugin', 'rexpathfollowerplugin.min.js');

  }
  create(){
    this.scene.start('SceneA');
  }
}
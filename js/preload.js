export default class Preloader extends Phaser.Scene{
  preload(){
    this.load.setPath('assets/');
    this.load.image('ball', 'soccer ball.png');
    this.load.image('post');
    this.load.setPath('js/')
    this.load.plugin('rexpathfollowerplugin', 'rexpathfollowerplugin.min.js');

  }
  create(){
    this.scene.start('SceneA');
  }
}
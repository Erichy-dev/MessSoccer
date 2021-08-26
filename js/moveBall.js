export default class MoveBall {
  constructor(scene){
    this.scene = scene;
  }
  shoot(){
    this.scene.ball.pathFollower = this.scene.plugins.get('rexpathfollowerplugin').add(this.scene.ball,{
      path: this.scene.ballPath,
      t: 0,
      rotateToPath: true,
    });

    this.scene.ballLinearTween = this.scene.tweens.add({
      targets: this.scene.ball.pathFollower,
      t: 1,
      ease: 'Cubic',
      duration: 1000,
      yoyo: false,
    }, this);

    this.scene.tweens.add({
      targets: this.scene.ball,
      alpha: 0.5,
      scale: 0.5,
      rotation: 1000,
      ease: 'Cubic',
      duration: 1000,
      yoyo: false
    }, this);
  }
}
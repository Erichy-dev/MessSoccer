export default class ScoreGoal {
  constructor(scene){
    this.scene = scene;
  }

  hitEarth(){
    this.scene.physics.world.enable([this.scene.ball, this.scene.planet], 0);
    this.scene.physics.add.overlap(this.scene.ball, this.scene.planet, ()=>{
      this.scene.ball.setVisible(false);

      this.scene.tweens.add({
        targets: this.scene.planet,
        y: 400,
        scale: 0.5,
        alpha: 0.5,
        ease: 'Cubic',
        duration: 2000,
        yoyo: false,
        repeat: 0
      }, this.scene);

      this.scene.time.addEvent({
        delay: 3000,
        callback: () => {
          this.scene.scene.restart();
        },
        callbackScope: this.scene,
        loop: false,
      })
    });
  }
}
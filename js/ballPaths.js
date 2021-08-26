export default class BallPath{
  constructor(scene,canvasHeight,canvasWidth){
    this.scene = scene;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }
  linearPath(){
    let linearBallPath = this.scene.add.path();
    linearBallPath.moveTo( this.canvasWidth/1.8, this.canvasHeight-70);
    linearBallPath.lineTo( this.canvasWidth/1.85, 180);
    return linearBallPath;
  }
}
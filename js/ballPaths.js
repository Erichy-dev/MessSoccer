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
  
  messiPath(leftLeg,x, y){
    let messiBallPath = this.scene.add.path();
    let curve;
    if(leftLeg){
      curve = new Phaser.Curves.Spline([
        550, 650,
        450-x, 500-y,
        400-x, 350-y,
        420-x, 250-y,
        480-x, 190-y,
        550-x, 150-y
      ]);
    }else {
      curve = new Phaser.Curves.Spline([
        590, 650,
        540-x, 500-y,
        590-x, 350-y,
        570-x, 250-y,
        510-x, 190-y,
        430-x, 150-y
      ]);
  
    }
    messiBallPath.add(curve);
    return messiBallPath;
  }
}
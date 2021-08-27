import MoveBall from "./moveBall.js";
import BallPath from "./ballPaths.js";

let leftLeg;
export default class Target {
  constructor(scene, draw){
    this.scene = scene;
    this.draw = draw;
  }
  target(){
    let graphics = this.scene.add.graphics();

    let color = 0xffff00;
    let thickness = 2;
    let alpha = 1;

    let sx = 0, sy = 0; 

    this.scene.input.mouse.disableContextMenu();

    this.scene.input.on('pointerdown', (pointer) => {
      sx = pointer.x;
      sy = pointer.y;

      if(pointer.leftButtonDown() && pointer.rightButtonDown()){
        color = 0x00ffff;
      }else if(pointer.leftButtonDown()){
        color = 0xffff00;
      }else if(pointer.rightButtonDown()){
        color = 0x00ff00;
      }
    });
    
    let shootP = {
      x: 0,
      y: 0
    }
    let deviation ={};

    this.scene.input.on('pointerup', () => {
      if(this.draw){
        deviation.x = sx-shootP.x-100;
        deviation.y = sy-shootP.y-150;
        shootP.x<550?leftLeg = true: leftLeg = false;
        this.scene.ballPath = new BallPath(this.scene).messiPath(leftLeg, deviation.x, deviation.y);
        new MoveBall(this.scene).shoot()
      }

      this.draw = false;
      graphics.clear();

    });

    this.scene.input.on('pointermove', (pointer) => {
      if(this.draw && pointer.noButtonDown() === false){
        graphics.clear();
        graphics.lineStyle(thickness, color, alpha);
        graphics.lineBetween(sx, sy, pointer.x, pointer.y);
        graphics.stroke();
        shootP.x = pointer.x;
        shootP.y = pointer.y;
      }
    })

  }
}
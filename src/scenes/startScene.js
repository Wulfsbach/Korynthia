import 'phaser';
// import { create } from 'domain';


export default class startScene extends Phaser.Scene {

    constructor(){
        super('Start');
    }


preload(){
this.load.image('forest1', 'assets/Images/Background/title/forest1.png');
this.load.image('forest2', 'assets/Images/Background/title/forest2.png');
this.load.image('forest3','assets/Images/Background/title/forest3.png');
this.load.image('forest4','assets/Images/Background/title/forest4.png');
this.load.image('title', 'assets/Images/KorTitle.png');


}

create(){

var backF1= this.add.image(600,400,'forest1');
var backf3= this.add.image(600,400,'forest3');
var backf4=this.add.image(600,400,'forest4');
var backf2= this.add.image(600,400,'forest2');

backF1.displayWidth = 1200;
backF1.displayHeight= 800;
backf2.displayHeight=800;
backf2.displayWidth=1200;
backf3.displayHeight=800;
backf3.displayWidth=1200;
backf4.displayHeight=800;
backf4.displayWidth=1200;




var title = this.add.image(600,100,'title')
}
}
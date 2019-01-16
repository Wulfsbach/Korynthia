import 'phaser';
// import { create } from 'domain';


export default class startScene extends Phaser.Scene {

    constructor(){
        super('Start');
    }


preload(){
this.load.image('title', 'assets/Images/KorTitle.png');
}

create(){
var title = this.add.image(600,100,'title')
}
}
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
this.load.audio('treeoflife','assets/Sound/Music/treeoflife.wav');
this.load.audio('OrbWhoosh','assets/Sound/FX/OrbWhoosh.wav');
this.load.image('title', 'assets/Images/KorTitle.png');
this.load.image('orb1','assets/Images/SpriteSheets/OrbLoop/orb1.png');
this.load.image('orb2','assets/Images/SpriteSheets/OrbLoop/orb2.png');
this.load.image('orb3','assets/Images/SpriteSheets/OrbLoop/orb3.png');
this.load.image('orb4','assets/Images/SpriteSheets/OrbLoop/orb4.png');
this.load.image('orb5','assets/Images/SpriteSheets/OrbLoop/orb5.png');
this.load.image('orb6','assets/Images/SpriteSheets/OrbLoop/orb6.png');
this.load.image('orb7','assets/Images/SpriteSheets/OrbLoop/orb7.png');
this.load.image('orb8','assets/Images/SpriteSheets/OrbLoop/orb8.png');
this.load.image('orb9','assets/Images/SpriteSheets/OrbLoop/orb9.png');
this.load.image('orb10','assets/Images/SpriteSheets/OrbLoop/orb10.png');
this.load.image('orb11','assets/Images/SpriteSheets/OrbLoop/orb11.png');
this.load.image('orb12','assets/Images/SpriteSheets/OrbLoop/orb12.png');
this.load.image('orb13','assets/Images/SpriteSheets/OrbLoop/orb13.png');
this.load.image('orb14','assets/Images/SpriteSheets/OrbLoop/orb14.png');
this.load.image('orb15','assets/Images/SpriteSheets/OrbLoop/orb15.png');
this.load.image('orb16','assets/Images/SpriteSheets/OrbLoop/orb16.png');



}

create(){

    
this.anims.create({
    key:'shine',
    frames:[
        { key: 'orb1'},
        { key: 'orb2'},
        { key: 'orb3'},
        { key: 'orb4'},
        { key: 'orb5'},
        { key: 'orb6'},
        { key: 'orb7'},
        { key: 'orb8'},
        { key: 'orb9'},
        { key: 'orb10'},
        { key: 'orb11'},
        { key: 'orb12'},
        { key: 'orb13'},
        { key: 'orb14'},
        { key: 'orb15'},
        {key: 'orb16'}

    ],
    frameRate:8,
    repeat:-1
});


var backF1= this.add.image(600,400,'forest1');
var backf3= this.add.image(600,400,'forest3');
var orbCrash= this.add.sprite(100,0, 'orbCrash').play('shine');

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
orbCrash.displayHeight= 150;
orbCrash.displayWidth= 150;


var titleConfig= {
    mute:false,
    volume:0.2,
    rate:1,
    loop:false,
    delay:0
}
var titleMusic =this.sound.add('treeoflife',titleConfig);

var OrbFX= this.sound.add('OrbWhoosh');

titleMusic.play();

// this.anims.create({
//     key:'shine',
//     frames:[
//         { key: 'orb1'},
//         { key: 'orb2'},
//         { key: 'orb3'},
//         { key: 'orb4'},
//         { key: 'orb5'},
//         { key: 'orb6'},
//         { key: 'orb7'},
//         { key: 'orb8'},
//         { key: 'orb9'},
//         { key: 'orb10'},
//         { key: 'orb11'},
//         { key: 'orb12'},
//         { key: 'orb13'},
//         { key: 'orb14'},
//         { key: 'orb15'},
//         {key: 'orb16'}

//     ],
//     frameRate:8,
//     repeat:-1
// });

// this.add.sprite(600,400, 'orb1').play('shine')

var title = this.add.image(600,100,'title');


var tween = this.tweens.add({
    targets:orbCrash,
    props:{
        x: {value:'+=1000', ease: 'Power4'},
        y: {value:'+=900',ease: 'Power1'}
        // y:{ value: function(){return marker.y;}, ease:'Power3'}

    },
    duration:6000,
});


 


}

}
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
this.load.audio('OrbBoom','assets/Sound/FX/OrbBoom.wav');
this.load.image('title', 'assets/Images/KorTitle.png');
this.load.audio('burning', 'assets/Sound/FX/Burning.wav');
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
this.load.image('Explosion1','assets/Images/SpriteSheets/Explosion6/Explosion1.png');
this.load.image('Explosion2','assets/Images/SpriteSheets/Explosion6/Explosion2.png');
this.load.image('Explosion3','assets/Images/SpriteSheets/Explosion6/Explosion3.png');
this.load.image('Explosion4','assets/Images/SpriteSheets/Explosion6/Explosion4.png');
this.load.image('Explosion5','assets/Images/SpriteSheets/Explosion6/Explosion5.png');
this.load.image('Explosion6','assets/Images/SpriteSheets/Explosion6/Explosion6.png');
this.load.image('Explosion7','assets/Images/SpriteSheets/Explosion6/Explosion7.png');
this.load.image('Explosion8','assets/Images/SpriteSheets/Explosion6/Explosion8.png');
this.load.image('Explosion9','assets/Images/SpriteSheets/Explosion6/Explosion9.png');
this.load.image('Explosion10','assets/Images/SpriteSheets/Explosion6/Explosion10.png');
this.load.image('Explosion11','assets/Images/SpriteSheets/Explosion6/Explosion11.png');
this.load.image('Explosion12','assets/Images/SpriteSheets/Explosion6/Explosion12.png');
this.load.image('Explosion13','assets/Images/SpriteSheets/Explosion6/Explosion13.png');
this.load.image('Explosion14','assets/Images/SpriteSheets/Explosion6/Explosion14.png');
this.load.image('Explosion15','assets/Images/SpriteSheets/Explosion6/Explosion15.png');
this.load.image('Explosion16','assets/Images/SpriteSheets/Explosion6/Explosion16.png');
this.load.image('Fire5-1', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-1.png');
this.load.image('Fire5-2', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-2.png');
this.load.image('Fire5-3', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-3.png');
this.load.image('Fire5-4', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-4.png');
this.load.image('Fire5-5', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-5.png');
this.load.image('Fire5-6', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-6.png');
this.load.image('Fire5-7', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-7.png');
this.load.image('Fire5-8', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-8.png');
this.load.image('Fire5-9', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-9.png');
this.load.image('Fire5-10', 'assets/Images/SpriteSheets/Fire5Loop/Fire5-10.png');



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

this.anime.create({
    key:'exploding',
    frames:[
        {key: 'Explosion1'},
        {key: 'Explosion2'},
        {key: 'Explosion3'},
        {key: 'Explosion4'},
        {key: 'Explosion5'},
        {key: 'Explosion6'},
        {key: 'Explosion7'},
        {key: 'Explosion8'},
        {key: 'Explosion9'},
        {key: 'Explosion10'},
        {key: 'Explosion11'},
        {key: 'Explosion12'},
        {key: 'Explosion13'},
        {key: 'Explosion14'},
        {key: 'Explosion15'},
        {key: 'Explosion16'},
    ],
    frameRate:5,
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
var Boom= this.sound.add('OrbBoom');

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

// this.cameras.main.setBounds(0,0, map.widthInPixels, map.heightInPixels);
var tween = this.tweens.add({
    targets:orbCrash,
    props:{
        x: {value:'+=1200', ease: 'Power0'},
        y: {value:'+=900',ease: 'Power0'},
        // y:{ value: function(){return marker.y;}, ease:'Power3'}
     
    },
    duration:4000,
    onStart: function() {OrbFX.play()},
    onComplete: function() {Boom.play(),}
    
    
    
});


     
 }

orbEnding(){
    
};



}




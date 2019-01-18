import 'phaser';
import config from './config/config';
import startScene from './scenes/startScene';




class Game extends Phaser.Game {
    constructor () {
        super(config);
        this.scene.add('Start', startScene);
        this.scene.start('Start');

        
    }
}

window.onload =function () {

    window.game = new Game();
}
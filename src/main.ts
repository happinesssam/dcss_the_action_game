import 'phaser';
import BootScene from './app/scenes/boot-scene';
import CreateNewGameScene from './app/scenes/create-new-game-scene';
import GameScene from './app/scenes/game-scene';
import LevelPrepareScene from './app/scenes/level-prepare-scene';
import MenuScene from './app/scenes/menu-scene';
import PreloadScene from './app/scenes/preload-scene';

const config:Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: [BootScene,PreloadScene, MenuScene, GameScene, CreateNewGameScene, LevelPrepareScene]
};

const game = new Phaser.Game(config);

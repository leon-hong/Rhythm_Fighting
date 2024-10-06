import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    musicBG: Phaser.Sound.BaseSound;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(512, 384, 'background');

        this.logo = this.add.image(512, 300, 'logo');

        this.title = this.add.text(512, 460, 'Click to start!', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // 배경음악 추가 및 재생
        this.musicBG = this.sound.add('music_bg', { loop: true });         

        this.input.once('pointerdown', () => {

            // 음악은 사용자 인터렉션에 의해 재생되어야 하는 브라우저 정책에 따라서 클릭시 재생
            this.musicBG.play();
            this.scene.start('Game');

        });
    }
}

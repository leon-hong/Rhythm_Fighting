import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;    

    charYuri: Phaser.GameObjects.Sprite;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        // 애니메이션 초기화
        this.initAmimation();

        this.input.once('pointerdown', () => {

            // 버튼 클릭 시 실행할 코드 추가            
            //this.scene.start('GameOver');
        });
    }

    // 애니메이션 초기화 코드 추가
    initAmimation(){
        
       // 서있는 애니메이션 정의 및 적용
       this.anims.create({
        key: 'S_idle',
        frames: this.anims.generateFrameNames('S_idle_atlas', {
            prefix: 'ani-',
            suffix: '.png',
            start: 0,
            end: 5
        }),
        frameRate: 6,
        repeat: -1
        });
        this.charYuri = this.add.sprite(300, 500, 'S_idle_atlas', 'ani-0.png');
        this.charYuri.scale = 3;
        this.charYuri.play('S_idle');

        // 앉아 강발 애니메이션 정의 및 적용
        this.anims.create({
            key: 'C_SK',
            frames: this.anims.generateFrameNames('C_SK_atlas', {
                prefix: 'ani-',
                suffix: '.png',
                start: 0,
                end: 8
            }),
            frameRate: 10,
            repeat: -1
        });

        // 대쉬 애니메이션 정의 및 적용
        this.anims.create({
            key: 'F_dash',
            frames: this.anims.generateFrameNames('F_dash_atlas', {
                prefix: 'ani-',
                suffix: '.png',
                start: 0,
                end: 10
            }),
            frameRate: 5,
            repeat: -1
        });

        // 약킥 애니메이션 정의 및 적용
        this.anims.create({
            key: 'S_LK',
            frames: this.anims.generateFrameNames('S_LK_atlas', {
                prefix: 'ani-',
                suffix: '.png',
                start: 0,
                end: 7
            }),
            frameRate: 12,
            repeat: -1
        });

        // 앞걷기 애니메이션 정의 및 적용
        this.anims.create({
            key: 'F_walk',
            frames: this.anims.generateFrameNames('F_walk_atlas', {
                prefix: 'ani-',
                suffix: '.png',
                start: 0,
                end: 5
            }),
            frameRate: 10,
            repeat: -1
        });

        // 뒤걷기 애니메이션 정의 및 적용
        this.anims.create({
            key: 'B_walk',
            frames: this.anims.generateFrameNames('B_walk_atlas', {
                prefix: 'ani-',
                suffix: '.png',
                start: 0,
                end: 3
            }),
            frameRate: 8,
            repeat: -1
        });

        // 뒤스텝 애니메이션 정의 및 적용
        this.anims.create({
            key: 'B_step',
            frames: this.anims.generateFrameNames('B_step_atlas', {
                prefix: 'ani-',
                suffix: '.png',
                start: 0,
                end: 3
            }),
            frameRate: 5,
            repeat: -1
        });
    }


}

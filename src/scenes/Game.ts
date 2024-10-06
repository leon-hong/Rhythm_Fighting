import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;    

    charYuri: Phaser.GameObjects.Sprite;
    bg: Phaser.GameObjects.Image;
    shadow : Phaser.GameObjects.Graphics;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    isCmdExecuted: boolean = false;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        // 게임 속도 설정
        // 각 컴포넌트별로 속도설정은 각각 해야함.
        const gameSpeed = 1.2;
        this.anims.globalTimeScale = gameSpeed;
        this.tweens.timeScale = gameSpeed;        

        // 배경 이미지 추가
        this.bg = this.add.image(1920/2, 1080/2, 'bg_inside');
        this.bg.setScale(0.75);
        this.bg.setPosition( 550, 380);
        
        // 애니메이션 초기화
        this.initAmimation();

        // 그림자 추가
        this.shadow = this.add.graphics();
        this.shadow.fillStyle(0x000000, 0.3); // 반투명한 검정색
        this.shadow.fillEllipse(0, 0, 130, 50); // 타원형 그림자
        this.shadow.setPosition(this.charYuri.x, 650);

        // 키보드 입력 설정
        if(this.input.keyboard) {
            this.cursors = this.input.keyboard.createCursorKeys();
        }

        this.input.once('pointerdown', () => {

            // 버튼 클릭 시 실행할 코드 추가            
            //this.scene.start('GameOver');
        });
    }

    update() {
        
        // 키보드 입력 감지 및 처리
        if (this.cursors.left.isDown && !this.isCmdExecuted) {            
            console.log('Left arrow key is pressed');

            this.isCmdExecuted = true;

            // 왼쪽으로 이동            
            this.charYuri.play('B_walk', true);
            this.tweens.add({
                targets: this.charYuri,
                x: this.charYuri.x - 120,
                duration: 500,
                onComplete: () => {
                    this.isCmdExecuted = false;
                    this.charYuri.play('S_idle', true)
                }
            });                    

        } else if (this.cursors.right.isDown && !this.isCmdExecuted) {
            console.log('Right arrow key is pressed');
            
            this.isCmdExecuted = true;

            // 오른쪽으로 이동            
            this.charYuri.play('F_walk', true);
            this.tweens.add({
                targets: this.charYuri,
                x: this.charYuri.x + 120,
                duration: 500,
                onComplete: () => {
                    this.isCmdExecuted = false;
                    this.charYuri.play('S_idle', true)
                }
            });
        } else if (this.cursors.up.isDown && !this.isCmdExecuted) {
            console.log('Up arrow key is pressed');    
        } else if (this.cursors.down.isDown && !this.isCmdExecuted) {
            console.log('Down arrow key is pressed');
        }
    
        this.shadow.setPosition(this.charYuri.x, 650);
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

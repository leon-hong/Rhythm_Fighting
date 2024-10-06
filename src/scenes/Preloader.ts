import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');

        // 유리 애니메이션 로드
        this.load.atlas('C_SK_atlas', 'character/Yuri/C_SK.png','character/Yuri/C_SK.json' );
        this.load.atlas('F_dash_atlas', 'character/Yuri/F_dash.png','character/Yuri/F_dash.json' );
        this.load.atlas('F_walk_atlas', 'character/Yuri/F_walk.png','character/Yuri/F_walk.json' );
        this.load.atlas('B_walk_atlas', 'character/Yuri/B_walk.png','character/Yuri/B_walk.json' );
        this.load.atlas('B_step_atlas', 'character/Yuri/B_step.png','character/Yuri/B_step.json' );
        this.load.atlas('S_idle_atlas', 'character/Yuri/S_idle.png','character/Yuri/S_idle.json' );
        this.load.atlas('S_LK_atlas', 'character/Yuri/S_LK.png','character/Yuri/S_LK.json' );

        // 배경음악 로드
        this.load.audio('music_bg', 'music/BG_DavidKBD.ogg');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}

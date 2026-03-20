

// this code is violating the rule OPEN_CLOSED
class VideoPlayer {
        quality:String;
        constructor(quality:String) {
            this.quality = quality;
        }
        playVideo():void {
            if(this.quality === 'SD'){
                console.log("Running video in SD quality")
            }else if(this.quality === 'HD'){
                console.log("Running video in HD quality")

            }
        }
}

const myPlayer = new VideoPlayer("SD");
myPlayer.playVideo();
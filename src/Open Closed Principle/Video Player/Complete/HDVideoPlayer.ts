import VideoPlayer from "./VideoPlayer";

class HDVideoPlayer implements VideoPlayer{
    playVideo(): void {
        console.log("Playing video in HD quality")
    }
}
export default HDVideoPlayer
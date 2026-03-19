import VideoPlayerService from "./VideoPlayerService";
import HDVideoPlayer from "./HDVideoPlayer";
import k4_VideoPlayer from "./4kVideoPlayer";


//my actual service
const myVideoPlayer = new VideoPlayerService()

const hdPlayer = new HDVideoPlayer()
const _4kPlayer = new k4_VideoPlayer()

myVideoPlayer.play(hdPlayer)
myVideoPlayer.play(_4kPlayer)


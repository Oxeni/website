import { isVideoFinished } from "components/utils/video.utils"

interface IsizeAndVideo {
    size: number,
    videoUrl: string
}


export const setCurrentVideoSizeVideo = (videoElement: HTMLVideoElement, size: number, videosOnWhatSize: IsizeAndVideo[]) => {
    let currentVideoTime = videoElement.currentTime
    let isCurrentlyPlaying = false
    let videoFinished = isVideoFinished(videoElement)
    if (videoFinished) 
        isCurrentlyPlaying = true
    
    

    videosOnWhatSize.map(video => {
        if (video.size > size) {
            videoElement.src = video.videoUrl
            videoElement.currentTime = currentVideoTime
            if (isCurrentlyPlaying)
                videoElement.play()
        }
        return null
    })
}
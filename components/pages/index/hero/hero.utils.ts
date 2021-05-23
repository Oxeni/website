import { isVideoFinished } from "components/utils/video.utils"

interface IsizeAndVideo {
    size: number,
    videoUrl: string
}


export const setCurrentVideoSizeVideo = async (videoElement: HTMLVideoElement, size: number, videosOnWhatSize: IsizeAndVideo[]) => {
    let currentVideoTime = videoElement.currentTime
    let isCurrentlyPlaying = false
    let videoFinished = isVideoFinished(videoElement)
    if (videoFinished)
        isCurrentlyPlaying = true

    const mobileSize = +getComputedStyle(document.documentElement)
        .getPropertyValue('--medium-screen').split('px')[0];

    if (window.innerWidth > mobileSize - 100) {
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
}

export const setVideoAcordingToScreen = async (videoElement: HTMLVideoElement,
    size: number,
    videoUrl: string) => {

        if (window.innerWidth < size) {
            videoElement.src = videoUrl
        }


}

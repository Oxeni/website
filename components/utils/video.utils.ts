export const isVideoFinished = (videoElement: HTMLVideoElement): boolean => {
    return !!(videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended && videoElement.readyState > 2)
}

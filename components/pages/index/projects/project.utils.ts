
export const hoverHandler = async (cardContainer: any, hovered: boolean) => {
    let video = cardContainer.current.querySelector(".projectCard_video .card_video") as HTMLVideoElement;
    let videoShadow = cardContainer.current.querySelector(".projectCard_video .card_video-shadow") as HTMLVideoElement;

    if (hovered) {
        video.playbackRate = 1;
        video.currentTime = 0
        await video.play();

        videoShadow.playbackRate = 1;
        videoShadow.currentTime = 0
        await videoShadow.play();

    } else {
        video.currentTime = 20;
        await video.pause();

        videoShadow.currentTime = 20;
        await videoShadow.pause();
    }
}
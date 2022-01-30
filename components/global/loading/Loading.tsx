import { useEffect } from "react"
import { counter } from "./loading_animation/Loading.animation"

const Loading = () => {
    const path = 'M410.426 206.07C410.426 318.801 319.04 410.187 206.309 410.187C93.5777 410.187 2.19116 318.801 2.19116 206.07C2.19116 93.3386 93.5777 1.95209 206.309 1.95209C319.04 1.95209 410.426  93.3386  410.426  206.07Z'



    useEffect(() => {
        counter()
    }, []);

    
    // const init = async () => {
    //     await counter(() => {
    //         const videoIntro = document.getElementById("videoIntro") as HTMLVideoElement;
    //         videoIntro.play();
    //     });
    // }


    return (
        <>
            <div className="loading-screen">
                <div className="loading-screen_container">
                    <svg
                        className='loading_circle'
                        width="412"
                        height="412"
                        viewBox="0 0 412 412"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d={path} stroke="white" strokeWidth="2.5" />

                    </svg>
                    <div className="loading_poligon">
                        <h1 className="f-weight-bo f-size-h1" id="counter"></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading

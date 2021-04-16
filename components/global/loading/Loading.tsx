import { useEffect } from "react"
import {counter} from "./loading_animation/Loading.animation"

const Loading = () => {



    useEffect(() => {
        counter()
    }, []);


    return (
        <>
            <div className="loading-screen">
                <div className="loading-screen_container">
                    <div className="outer_circle circle"></div>
                    <div className="inside_circle circle"></div>
                    <div className="loading_poligon">
                        <h1 className="f-weight-bo f-size-h1" id="counter"></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading

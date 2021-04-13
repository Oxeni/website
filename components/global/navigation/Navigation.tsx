import React, { useEffect } from 'react'

import { navigationScrollAnim } from "./Animation.animation";

const Navigation = () => {
    
    useEffect(() => {
        init()
    }, [])

    const init = () => {
        navigationScrollAnim(".hero")
    }
    return (
        <>
            <div className="navigation">
                <div className="navigation_container">
                    <div className="logo"></div>
                </div>
            </div>   
        </>
    )
}


export default Navigation;
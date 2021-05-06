import React, { useEffect } from 'react'

import { navigationScrollAnim } from "./animation/Navigation.animation";
import Logo from './Logo';

const Navigation = () => {
    
    useEffect(() => {
        init()
    }, [])

    const init = () => {
        navigationScrollAnim(".hero")
    }
    return (
        <>
            <Logo className="navigation_logo"/>

            <div className="navigation">
                <div className="navigation_container">
                </div>
            </div>   
        </>
    )
}


export default Navigation;
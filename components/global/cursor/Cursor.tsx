import { useEffect, useState } from 'react';
import gsap from 'gsap';
import * as React from 'react';

const Cursor = () => {
    const cursor = document.querySelector<HTMLElement>("#cursorEl");

    document.addEventListener('mousedown', () => {
        gsap.to(cursor, {
            scale: 0.5,
            duration: .1,
            ease: 'power1.out'
        })
        console.log('asdas');
        
    }, false)
    document.addEventListener('mouseup', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: .1,
            ease: 'power1.out'
        })
    }, false)

    const followCursor = (e: MouseEvent) => {
        const cursor = document.querySelector<HTMLElement>("#cursorEl");
        const textElementTagsArray = ['P', 'H1', 'H1', 'H2', 'H3', 'H4', 'H6', 'SPAN', 'STRONG', 'I', 'B']


        //@ts-ignore
        if (textElementTagsArray.includes(e.target.nodeName)) {
            gsap.to(cursor, {
                borderRadius: .5,
                duration: .15,
                width: 4,
                ease: 'power1.out'
            })
        } else {
            gsap.to(cursor, {
                borderRadius: 100,
                duration: .15,
                width: 20,
                delay: 0.5,
                ease: 'power1.out'
            })
        }


        if (window.innerWidth > 1186) {
            // cursor.style.transform = `translate3d(${e.clientX - 8 + "px"}, ${e.clientY - 10 + "px"}, 0)`;
            
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                ease: 'power1.out'
            })
        } else {
            cursor.style.display = "none";
        }
    };


    useEffect(() => {
        window.addEventListener("mousemove", (e: MouseEvent) => {
            followCursor(e)
        })

        navigator.userAgent.search("Firefox") > -1 &&
            document.querySelector("#cursorEl").classList.add("cursor_black")
    }, []);

    return (
        <>
            <div className="cursor_container">
                <div id="cursorEl" className="cursor"></div>
            </div>
        </>
    );
};

export default Cursor;

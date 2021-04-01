import { useEffect, memo } from "react";

const Cursor = () => {
    
    const followCursor = (e: any) => {
        const object = document.getElementById("cursor");

        object!.style.transform = `translateX(${e.clientX - 8 + "px"})
            translateY(${e.clientY - 10 + "px"})`;
    };


    useEffect(() => {
        
        window.addEventListener("mousemove", (e) => {
            followCursor(e)
        }, false)

    }, []);

    return (
        <>
            <div className="cursor_container">
                <div id="cursor" className="cursor"></div>
            </div>
        </>
    );
};

export default memo(Cursor);

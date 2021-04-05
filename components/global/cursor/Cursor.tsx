import { useEffect } from "react";

const Cursor = () => {
    
    const followCursor = (e: any) => {
        const cursor = document.querySelector<HTMLElement>("#cursor");

        cursor!.style.transform = `translateX(${e.clientX - 8 + "px"})
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

export default Cursor;

import { useEffect } from "react";

const Cursor = () => {
    
    const followCursor = (e: any) => {
        const cursor = document.querySelector<HTMLElement>("#cursorEl");

        if(window.innerWidth > 768) {
            cursor!.style.transform = `translateX(${e.clientX - 8 + "px"})
            translateY(${e.clientY - 10 + "px"})`;
        }else {
            cursor!.style.display = "none";
        }

    };


    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            followCursor(e)
        })
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

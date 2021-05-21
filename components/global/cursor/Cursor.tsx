import { useEffect } from "react";

const Cursor = () => {

    const followCursor = (e: any) => {
        const cursor = document.querySelector<HTMLElement>("#cursorEl");

        if (window.innerWidth > 1186) {
            cursor.style.transform = `translate3d(${e.clientX - 8 + "px"}, ${e.clientY - 10 + "px"}, 0)`;
        } else {
            cursor.style.display = "none";
        }
    };


    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
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

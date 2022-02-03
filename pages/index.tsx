import { useEffect, useState } from "react";



import Hero from "components/pages/index/new_hero/Hero";
import Projects from "components/pages/index/projects/Project";
import Loading from "components/global/loading/Loading";
import Other_works from "components/pages/index/other_works/Other_works";
import Contact from "components/pages/index/contact/Contact";
import Services from "components/pages/index/services/service"


import { smoothScroll } from "components/utils/smoothScroll.utils";




const index = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const controlLoading = (time: number) => {
        if (time == 100) {
            setIsLoaded(true)
        } else {
            setIsLoaded(false)
        }

    }


    useEffect(() => {
        window.addEventListener("load", () => {
            smoothScroll()
        })
        let storedTime = localStorage.getItem('time')
        // console.log(typeof (+storedTime));
        controlLoading(+storedTime)
        // console.log(isLoaded);

    }, [isLoaded])


    return (
        <>
            {isLoaded && <Loading />}


            <Hero />

            <Projects />
            <Other_works />
            <Services />
            <Contact />


        </>
    );
};

export default index;

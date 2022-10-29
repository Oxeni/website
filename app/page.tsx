import Hero from "components/pages/index/new_hero/Hero";
import Projects from "components/pages/index/projects/Project";
import Loading from "components/global/loading/Loading";
import Other_works from "components/pages/index/other_works/Other_works";
import Contact from "components/pages/index/contact/Contact";
import Services from "components/pages/index/services/service";



const Page = () => (
    <>
        <Loading />
        <Hero />
        <Projects />
        <Other_works />
        <Services />
        <Contact />
    </>
);


export default Page;

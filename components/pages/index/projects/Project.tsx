import Gradients from "components/lib/gradients/Gradients";


import ProjectCardJson from "components/pages/index/projects/ProjectCard.json";
// import ProjectCard from "./ProjectCard.Component";
import dynamic from "next/dynamic";
const ProjectCard = dynamic(() => import('./ProjectCard.Component'), { ssr: false })



const Project = () => {
  return (
    <>
      <section className="project section_margin" id="ElementToTrigger">
        <div className="circle_container">
          <Gradients />
        </div>



        <div className="project_container">
          <div className="heading">
            <h1 className="f-size-h1 f-weight-bl">projects</h1>
          </div>

          <div className="big_projects">


            {ProjectCardJson.big_projects.map((props, i) => (
              <ProjectCard
                key={i}
                videoSource={props.videoSource}
                heading={props.heading}
                line={props.line}
                paragraph={props.paragraph}
                thumbnail={props.thumbnail}
                link={props.link}
              />
            ))}

          </div>

          <div className="small_projects">
            {ProjectCardJson.small_projects.map((props, i) => (
              <ProjectCard
                key={i}
                videoSource={props.videoSource}
                heading={props.heading}
                line={props.line}
                thumbnail={props.thumbnail}
                link={props.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

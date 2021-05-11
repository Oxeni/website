import ProjectCard from "./ProjectCard.Component";

import ProjectCardJson from "components/pages/index/projects/ProjectCard.json";

const Project = () => {
  return (
    <>
      <section className="project" id="ElementToTrigger">
        <div className="circle_container">
            <div className="blue_circle"></div>
            <div className="red_cicrle"></div>
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
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

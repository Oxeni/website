
import Gradients from "components/lib/gradients/Gradients";
import ProjectCardJson from "components/pages/index/projects/ProjectCard.json";
import ProjectCard from "./ProjectCard.Component";



const Project = () => (
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
            heading={props.heading}
            line={props.line}
            paragraph={props.paragraph}
            thumbnail={`pictures/thumbnails/${props.thumbnail}`}
            link={props.link}
          />
        ))}
      </div>

      <div className="small_projects">
        {ProjectCardJson.small_projects.map((props, i) => (
          <ProjectCard
            key={i}
            heading={props.heading}
            line={props.line}
            thumbnail={`pictures/thumbnails/${props.thumbnail}`}
            link={props.link}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Project;

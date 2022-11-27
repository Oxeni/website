import Gradients from "components/lib/gradients/Gradients";
import ProjectCard from "./ProjectCard.Component";

const projects = {
  "big_projects": [
    {
      "heading": "IDEP branding, logo and UI/UX design and website development.",
      "paragraph": "We worked with IDEP on creating the future platform that will push the next generation of NFT tokens and the crypto market.",
      "line": true,
      "thumbnail":"idep.png",
      "link":"https://idep.network/"
    },
    {
      "heading": "Liquid ICP website and branding.",
      "paragraph": "Liquid ICP is world's first s-Bridge where bridged and staked assets remain liquid. Fractional reserve is governed by Liquid ICP community and ensures immediate withdrawal of ICP coins at any given time.",
      "line": true,
      "thumbnail":"icp.png",
      "link":"https://www.icp-20.com/"
    }
  ],
  

  "small_projects": [
    {
      "heading": "Unity capital website and branding.",
      "line": false,
      "thumbnail":"unity.png",
      "link":"https://www.unitycapital.vc/"
    },
    {
      "heading": "Gamify platform website",
      "line": false,
      "thumbnail":"gamify.png",
      "link":"https://gamyfi.vercel.app/"
    },
    {
      "heading": "Archil Snow logo|brand|UI/UX design and website development.",
      "line": false,
      "thumbnail":"archili.png",
      "link":"https://archilsnow.com/"
    }
  ]
}




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
        {projects.big_projects.map((props, i) => (
          <ProjectCard
            key={i}
            heading={props.heading}
            line={props.line}
            paragraph={props.paragraph}
            thumbnail={`/pictures/thumbnails/${props.thumbnail}`}
            link={props.link}
          />
        ))}
      </div>

      <div className="small_projects">
        {projects.small_projects.map((props, i) => (
          <ProjectCard
            key={i}
            heading={props.heading}
            line={props.line}
            thumbnail={`/pictures/thumbnails/${props.thumbnail}`}
            link={props.link}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Project;

import { HTMLProps } from "react";

interface IProjectComponent {
  videoSource: string;
  heading: string;
  paragraph?: string;
  line: boolean;
}

const ProjectCard = ({
  videoSource,
  heading,
  paragraph,
  line,
  ...props
}: HTMLProps<HTMLDivElement> & IProjectComponent) => {
  return (
    <>
      <div className={`projectCard ${props.className}`} {...props}>


        <div className="projectCard_video">
          <video autoPlay  muted src={videoSource} />
        </div>


        <div className="projectCard_heading">
          <h1 className="f-size-h6 f-weight-r">{heading}</h1>
        </div>



        {line && (
          <div className="projectCard_line">
            <svg
              width="39"
              height="3"
              viewBox="0 0 39 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.117889 1.46606H19.0904H38.0629"
                stroke="url(#paint0_linear)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="0.117889"
                  y1="1.46606"
                  x2="38.0629"
                  y2="1.46606"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FC3254" />
                  <stop offset="0.5" stopColor="#0042FF" />
                  <stop offset="1" stopColor="#009E48" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}





        <div className="projectCard_paragraph">
          <p className="f-size-p1 f-weight-l">{paragraph}</p>
        </div>



      </div>
    </>
  );
};

export default ProjectCard;

import { HTMLProps, useState, useEffect } from "react";
import { useRef } from "react";
import Link from "next/link"

import { GlobalScrollElemAnim } from "components/utils/animation/global.animation";
import { hoverHandler } from "./project.utils";

interface IProjectComponent {
  videoSource?: string;
  heading: string;
  paragraph?: string;
  line: boolean;
  thumbnail?: string;
  link?: string;
}





const ProjectCard = ({
  videoSource,
  heading,
  paragraph,
  line,
  thumbnail,
  link,
  className = '',
  ...props
}: HTMLProps<HTMLDivElement> & IProjectComponent) => {
  const cardContainer = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>();



  useEffect(() => {
    GlobalScrollElemAnim(".scrollAnim")
  }, [])



  useEffect(() => {
    hoverHandler(cardContainer, hovered)
  }, [hovered]);



  return (
    <>

      <div
        className={`projectCard  ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        ref={cardContainer}
        onClick={() => window.open(link, '_blank')}
        {...props}>
        <div className="projectCard_video scrollAnim"
          style={{ backgroundImage: `url(${thumbnail})` }}>

          <video
            className="card_video base_video_styles"
            muted
            src={videoSource + '#t=20'} />

          <video
            muted
            className="base_video_styles card_video-shadow"
            src={videoSource + '#t=20'}
          />

        </div>

        <div className="projectCard_heading">
          <Link href="#">
            <h1 className="f-size-p1 f-weight-l">{heading}</h1>
          </Link>
        </div>

        {line && (
          <div className="projectCard_line">
            <svg
              width="39"
              height="3"
              viewBox="0 0 39 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FC3254" />
                  <stop offset="0.5" stopColor="#0042FF" />
                  <stop offset="1" stopColor="#009E48" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        <div className="projectCard_paragraph">
          <p className="f-size-p2 f-weight-l">{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

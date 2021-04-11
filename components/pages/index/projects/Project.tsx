

const Project = () => {

  return (
    <>
      <section className="project_container" id="ElementToTrigger">
        <div className="projects_list">
          <h1 className="heading f-size-h4 f-weight-bo">
            What we've <br /> worked on

          </h1>

          <a href="#" className="project" >
            <div className="pic"></div>
            <div className="project_heading">
              <h1 className="f-size-h6 f-weight-bo">Atelier Melt</h1>
            </div>
            <div className="paragraph">
              <p className="f-size-p4 f-weight-r">
                Design workshop,Logo,Branding, UX/UI,Web development
              </p>
            </div>
          </a>

          <a href="#"  className="project">
            <div className="pic" style={{backgroundImage:"url(/pictures/projects/crop2shop.png)"}}></div>
            <div className="project_heading">
              <h1 className="f-size-h6 f-weight-bo">Crop2Shop</h1>
            </div>
            <div className="paragraph">
              <p className="f-size-p4 f-weight-r">
              Crop2shop is a USAID project to promote export-import development in Georgia. The project has already helped thousands of entrepreneurs.
              </p>
            </div>
          </a>
          <a href="#"  className="project">
            <div className="pic"></div>
            <div className="project_heading">
              <h1 className="f-size-h6 f-weight-bo">Atelier Melt</h1>
            </div>
            <div className="paragraph">
              <p className="f-size-p4 f-weight-r">
                Design workshop,Logo,Branding, UX/UI,Web development
              </p>
            </div>
          </a>
          <a href="#"  className="project">
            <div className="pic"></div>
            <div className="project_heading">
              <h1 className="f-size-h6 f-weight-bo">Atelier Melt</h1>
            </div>
            <div className="paragraph">
              <p className="f-size-p4 f-weight-r">
                Design workshop,Logo,Branding, UX/UI,Web development
              </p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Project;

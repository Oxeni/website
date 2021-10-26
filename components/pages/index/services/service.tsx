import Gradients from "components/lib/gradients/Gradients";
// import dynamic from "next/dynamic";
// const OxeniCube = dynamic(() => import('../oxeni_cubes/OxeniCubes'), {ssr: false})




const service = () => {

  return (
    <>
      <section className="services">

        {/* <OxeniCube /> */}

        <div className="circle_container">
          <Gradients />
        </div>

        <div className="services_heading">
          <h1 className="f-size-h1 f-weight-bl">services.</h1>
        </div>
        <div className="services_container">


          <div className="card" >
            <div className="card_heading_gradient"></div>

            <div className="card_heading">
              <h1 className="f-size-p1 f-weight-bl">
                <span className="designing">Designing</span> brands, UI|UX and
                logos
              </h1>
            </div>

            <div className="card_paragraph">
              <p className="f-size-p4 f-weight-l">
                Our priority is to represent your product/company as uniquely and creatively as possible.
              </p>
            </div>

          </div>


          <div className="card">
            <div className="card_heading_gradient"></div>

            <div className="card_heading">
              <h1 className="f-size-p1 f-weight-bl">
                <span className="fullstack">Fullstack</span>. Back and front-end
                development
              </h1>
            </div>
            <div className="card_paragraph">
              <p className="f-size-p4 f-weight-l">
                We offer full suite of services dedicated to creating unforgettable experiences.
              </p>
            </div>

          </div>


          <div className="card">
            <div className="card_heading_gradient"></div>

            <div className="card_heading">
              <h1 className="f-size-p1 f-weight-bl">
                <span className="creating">Creating</span> unique
                logic/platforms
              </h1>
            </div>
            <div className="card_paragraph">
              <p className="f-size-p4 f-weight-l">
                We think outside the box. We can create new and innovative features currently not on the market. We bring your ideas to reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default service;
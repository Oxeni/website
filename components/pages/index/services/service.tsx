const service = () => {
  return (
    <>
      <section className="services">
          <div className="services_heading">
              <h1 className="f-size-h1 f-weight-bl">services.</h1>
          </div>
        <div className="services_container">


          <div className="card">

            <div className="card_heading_gradient"></div>

            <div className="card_heading">
              <h1 className="f-size-p1 f-weight-bl">
                <span className="designing">Designing</span> brands, UI|UX and
                logos
              </h1>
            </div>

            <div className="card_paragraph">
              <p className="f-size-p4 f-weight-l">
                Our first priority is to present your product/company in the
                unique and one of a kind way as possible.
              </p>
            </div>

            {/* <div className="card-red_gradient card_big_gradient"></div> */}
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
                We offer the full sweet of services for any business, and create
                unforgettable experiences for the user
              </p>
            </div>

            {/* <div className="card-blue_gradient card_big_gradient"></div> */}
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
                We are not limited. We can create things that are not on the
                market. We don’t limit ourselves with standards.
              </p>
            </div>
            {/* <div className="card-black_gradient card_big_gradient"></div> */}
          </div>



        </div>
      </section>
    </>
  );
};

export default service;

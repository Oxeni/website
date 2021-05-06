import React from "react";

import Landing from "components/pages/index/hero/Hero";
import Projects from "components/pages/index/projects/Project";
// import Loading from "components/global/loading/Loading";


const index = () => {

  return (
    <>
      {/* <Loading /> */}
      <Landing />
      <Projects />
    </>
  );
};

export default index;

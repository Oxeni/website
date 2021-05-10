import React from "react";

import Landing from "components/pages/index/hero/Hero";
import Projects from "components/pages/index/projects/Project";
// import Loading from "components/global/loading/Loading";
import Other_works from "components/pages/index/other_works/Other_works";

const index = () => {

  return (
    <>
      {/* <Loading /> */}
      <Landing />
      <Projects />
      <Other_works/>
    </>
  );
};

export default index;

import React from "react";

import Landing from "components/pages/index/hero/Landing";
import ContactProposal from "components/pages/index/hero/ContactProposal";
import Projects from "components/pages/index/projects/Project";


const index = () => {
    
  return (
    <>
      <Landing/>
      <ContactProposal/>
      <Projects/>
    </>
  );
};

export default index;

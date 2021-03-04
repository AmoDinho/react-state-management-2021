import React from "react";
/* eslint-disable import/no-webpack-loader-syntax */

import Intro from "!babel-loader!@mdx-js/loader!../content/Intro.mdx";

const Index = () => {
  return (
    <>
      <Intro />
    </>
  );
};

export default Index;

import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const About = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="smallText">About</span>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sitt nulla nec, mollis
          pulvinar nulla. Praesent vel pharetra turpis. Ut a tempus turpis.
          Nullam eget diam non ex dapibus gravida. Nullam mi lacus, egestas at
          est vel, placerat malesuada augue. Phasellus tempor, quam eu lobortis
          euismod, justo nisl convallis orci, sit amet ullamcorper
          vitae ex faucibus nunc accumsan feugiat eget at tortor. Phasellus
          dapibus enim et risus dapibus, vel tempor velit ullamcorper. Curabitur
          tincidunt nisl quis elit viverra blandit.
        </p>
      </ContentWrapper>
    </div>
  );
};

export default About;

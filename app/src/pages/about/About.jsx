import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const About = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="smallText">About us</span>
        <p className="para">
          Born from a shared passion for bringing exceptional entertainment to
          the forefront, BitStream was established in 2024 by Ankit Bose and
          Sibasish Dalui. Their vision was to create a one-stop streaming haven
          overflowing with content that caters to every taste. BitStream takes
          pride in its meticulously curated library, encompassing a vast array
          of movies, captivating TV shows, documentaries that delve deep into
          various subjects, and much more. <br/>This commitment to diversity ensures
          there's always something fresh to discover, keeping viewers glued to
          their screens. The BitStream team is dedicated to providing an
          unparalleled streaming experience, prioritizing constant innovation
          and expansion of their offerings. They strive to keep their audience
          thoroughly entertained, ensuring every visit to the platform is a
          delightful journey into a world of endless possibilities.
        </p>
      </ContentWrapper>
    </div>
  );
};

export default About;

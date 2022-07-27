import React, { Component } from "react";
import "./Publications.css";
import DegreeCard from "../../components/publicationCard/PublicationCard.js";
import { publications } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div"></div>
        <div className="educations-body-div">
          {publications.publications.map((publication) => {
            return <DegreeCard degree={publication} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;

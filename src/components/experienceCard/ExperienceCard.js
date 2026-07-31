import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        <div
          className="experience-card-logo-div"
          style={{
            backgroundColor: experience["logo_background"] || "#fff",
          }}
        >
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt={experience["alt_name"] || `${experience["company"]} logo`}
          />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          {experience["highlights"] ? (
            <ul
              className="experience-card-highlights"
              style={{ color: theme.text }}
            >
              {experience["highlights"].map((highlight) => (
                <li key={`${experience["title"]}-${highlight}`}>{highlight}</li>
              ))}
            </ul>
          ) : (
            <p
              className="experience-card-description"
              style={{ color: theme.text }}
            >
              {experience["description"]}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default ExperienceCard;

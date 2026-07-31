import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

function getSectionId(title, index) {
  const titleSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `experience-${titleSlug || "section"}-${index}`;
}

function getExperienceKey(experience) {
  return [
    experience.title,
    experience.company,
    experience.duration,
    experience.location,
  ]
    .filter(Boolean)
    .join("-");
}

class ExperienceAccordion extends Component {
  state = {
    expandedSection: null,
  };

  toggleSection = (sectionIndex) => {
    this.setState(({ expandedSection }) => ({
      expandedSection: expandedSection === sectionIndex ? null : sectionIndex,
    }));
  };

  render() {
    const theme = this.props.theme;

    return (
      <div className="experience-accord">
        <div className="experience-accordion">
          {this.props.sections.map((section, sectionIndex) => {
            const sectionId = getSectionId(section.title, sectionIndex);
            const buttonId = `${sectionId}-button`;
            const panelId = `${sectionId}-panel`;
            const expanded = this.state.expandedSection === sectionIndex;

            return (
              <section
                className={`accord-panel${expanded ? " is-expanded" : ""}`}
                key={section.title}
              >
                <h2 className="accord-heading">
                  <button
                    aria-controls={panelId}
                    aria-expanded={expanded}
                    className="accord-trigger"
                    id={buttonId}
                    onClick={() => this.toggleSection(sectionIndex)}
                    type="button"
                  >
                    <span>{section.title}</span>
                    <span className="accord-indicator" aria-hidden="true" />
                  </button>
                </h2>
                <div
                  aria-labelledby={buttonId}
                  className="accord-content"
                  hidden={!expanded}
                  id={panelId}
                  role="region"
                >
                  {section.experiences.map((experience) => (
                    <ExperienceCard
                      experience={experience}
                      key={getExperienceKey(experience)}
                      theme={theme}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceAccordion;

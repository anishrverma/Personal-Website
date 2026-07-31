import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import ExperienceAccordion from "./ExperienceAccordion";

const sections = [
  {
    title: "Work",
    experiences: [],
  },
  {
    title: "Research",
    experiences: [],
  },
  {
    title: "Volunteering",
    experiences: [],
  },
];

describe("ExperienceAccordion", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      ReactDOM.render(
        <ExperienceAccordion sections={sections} theme={{}} />,
        container,
      );
    });
  });

  afterEach(() => {
    act(() => {
      ReactDOM.unmountComponentAtNode(container);
    });
    container.remove();
  });

  function click(element) {
    act(() => {
      element.dispatchEvent(
        new MouseEvent("click", { bubbles: true, cancelable: true }),
      );
    });
  }

  it("renders every section heading in order", () => {
    const headings = Array.from(container.querySelectorAll("h2")).map(
      (heading) => heading.textContent,
    );

    expect(headings).toEqual(["Work", "Research", "Volunteering"]);
  });

  it("connects native controls to labelled panels", () => {
    const buttons = Array.from(container.querySelectorAll("button"));

    buttons.forEach((button) => {
      const panel = container.querySelector(
        `#${button.getAttribute("aria-controls")}`,
      );

      expect(button.type).toBe("button");
      expect(button.getAttribute("aria-expanded")).toBe("false");
      expect(panel).not.toBeNull();
      expect(panel.getAttribute("role")).toBe("region");
      expect(panel.getAttribute("aria-labelledby")).toBe(button.id);
      expect(panel.hidden).toBe(true);
    });
  });

  it("starts with every section collapsed", () => {
    const expandedButtons = container.querySelectorAll(
      'button[aria-expanded="true"]',
    );
    const visiblePanels = Array.from(
      container.querySelectorAll('[role="region"]'),
    ).filter((panel) => !panel.hidden);

    expect(expandedButtons).toHaveLength(0);
    expect(visiblePanels).toHaveLength(0);
  });

  it("opens and closes a section", () => {
    const workButton = container.querySelector("button");
    const workPanel = container.querySelector(
      `#${workButton.getAttribute("aria-controls")}`,
    );

    click(workButton);
    expect(workButton.getAttribute("aria-expanded")).toBe("true");
    expect(workPanel.hidden).toBe(false);

    click(workButton);
    expect(workButton.getAttribute("aria-expanded")).toBe("false");
    expect(workPanel.hidden).toBe(true);
  });

  it("keeps only one section open at a time", () => {
    const buttons = container.querySelectorAll("button");

    click(buttons[0]);
    click(buttons[1]);

    expect(buttons[0].getAttribute("aria-expanded")).toBe("false");
    expect(buttons[1].getAttribute("aria-expanded")).toBe("true");
    expect(
      container.querySelectorAll('button[aria-expanded="true"]'),
    ).toHaveLength(1);
  });
});

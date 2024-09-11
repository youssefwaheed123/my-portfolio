import React from "react";
import { Tabs } from "./ProjectTabs"; // Adjust the import path as needed
import { tabs, webProjects, javaProjects, mobileProjects } from "@/data"; // Adjust the import path as needed

const projects = {
  All: [...webProjects, ...javaProjects, ...mobileProjects],
  "Web Projects": webProjects,
  "Java Projects": javaProjects,
  "Mobile Projects": mobileProjects,
};

const Projects = () => {
  return (
    <section className="mb-20">
      <h1
        id="projects"
        className="container text-3xl border-b-2 pb-5 text-purple pt-20"
      >
        Projects
      </h1>
      <div className="mt-8">
        <Tabs
          tabs={tabs}
          projects={projects}
          containerClassName="custom-container"
          activeTabClassName="active-tab"
          tabClassName="tab"
          contentClassName="content"
        />
      </div>
    </section>
  );
};

export default Projects;

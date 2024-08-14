import React from "react";
import { Tabs } from "./ProjectTabs"; // Adjust the import path as needed
import { tabs, webProjects, javaProjects, mobileProjects } from "@/data"; // Adjust the import path as needed

const projects = {
  All: [...webProjects, ...javaProjects],
  "Web Projects": webProjects,
  "Java Projects": javaProjects,
  "Mobile Projects": mobileProjects,
};

const Projects = () => {
  return (
    <section className="mb-20">
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

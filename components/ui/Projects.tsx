import React from "react";
import { Tabs } from "./ProjectTabs"; // Adjust the import path as needed
import { tabs, webProjects, oopProjects } from "@/data"; // Adjust the import path as needed

const projects = {
  All: [...webProjects, ...oopProjects],
  "Web Projects": webProjects,
  "OOP Projects": oopProjects,
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

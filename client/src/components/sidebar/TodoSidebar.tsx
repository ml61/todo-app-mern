import React from "react";
import SidebarCategoriesSection from "./components/SidebarCategoriesSection";
import SidebarUrgencySection from "./components/SidebarUrgencySection";
import SidebarSortSection from "./components/SidebarSortSection";
import SidebarHeader from "./components/SidebarHeader";

const TodoSidebar = () => {
  return (
    <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
      <SidebarHeader />
      <hr />
      <SidebarCategoriesSection />
      <hr />
      <SidebarUrgencySection />
      <hr />
      <SidebarSortSection />
    </aside>
  );
};

export default TodoSidebar;

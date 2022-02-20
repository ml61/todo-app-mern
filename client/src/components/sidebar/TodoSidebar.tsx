import React from "react";
import SidebarCategoriesSection, {
  ISidebarCategoriesSectionProps,
} from "./components/SidebarCategoriesSection";
import SidebarUrgencySection from "./components/SidebarUrgencySection";
import SidebarSortSection from "./components/SidebarSortSection";
import SidebarHeader from "./components/SidebarHeader";

const TodoSidebar = ({
  categories,
  setCategories,
}: ISidebarCategoriesSectionProps) => {
  return (
    <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
      <SidebarHeader />
      <hr />
      <SidebarCategoriesSection
        categories={categories}
        setCategories={setCategories}
      />
      <hr />
      <SidebarUrgencySection />
      <hr />
      <SidebarSortSection />
    </aside>
  );
};

export default TodoSidebar;

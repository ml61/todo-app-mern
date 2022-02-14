import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import React from "react";

const SidebarSortSection = () => {
  return (
    <div className="d-flex flex-column user-select-none ">
      <div className="d-flex ">
        <h6 className="me-2 flex-grow-1">Sort</h6>
        <FontAwesomeIcon
          className="me-2"
          role="button"
          icon={Icons.faSortAmountUp}
          // color="#f9cc41"
        />
        <FontAwesomeIcon role="button" icon={Icons.faSortAmountDown} />
      </div>
      <span className="mb-1 cursor-pointer">Fieldddd 1</span>
      <span className="mb-1 cursor-pointer">Fieldddd 1</span>
      <span className="mb-1 cursor-pointer">Fieldddd 1</span>
      <span className="mb-1 cursor-pointer">Fieldddd 1</span>
      <span className="mb-1 cursor-pointer">Fieldddd 1</span>
    </div>
  );
};

export default SidebarSortSection;

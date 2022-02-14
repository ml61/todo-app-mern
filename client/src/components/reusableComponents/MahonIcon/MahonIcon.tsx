import * as Icons from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

interface ICustomIcon extends FontAwesomeIconProps {
  isLoading?: boolean;
}

const MahonIcon = ({ onClick, isLoading, icon, ...props }: ICustomIcon) => {
  return (
    <FontAwesomeIcon
      role="button"
      icon={isLoading ? Icons.faSpinner : icon}
      onClick={isLoading ? () => {} : onClick}
      {...props}
    />
  );
};

export { MahonIcon };

import { ReactNode } from "react";

export interface IMahonCard {
  renderHeader?: () => ReactNode;
  renderBody?: () => ReactNode;
  renderFooter?: () => ReactNode;
  onSubmitHandler?: () => void;
}

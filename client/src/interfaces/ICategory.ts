export interface ICategory {
  _id: string;
  categoryName: string;
  urgentHrsLessThan?: number;
  mediumHrsLessThan?: number;
}

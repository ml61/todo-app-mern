export interface ITodo {
  _id: string;
  taskName: string;
  taskDescription: string;
  categoryId: string;
  deadline: Date;
  isCompleted: boolean;
  owner: string;
  categoryName?: string;
}

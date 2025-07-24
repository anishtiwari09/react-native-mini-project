export interface TodoListType {
  id: number;
  name: string;
  date: number;
  isActive: boolean;
}

interface IPayload {
  name: string;
}

export enum IActionType {
  add = 'add',
  delete = 'delete',
}
export interface IAction {
  type: IActionType;
  payload: IPayload;
}

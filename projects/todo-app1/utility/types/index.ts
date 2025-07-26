export interface TodoListType {
  id: number;
  name: string;
  date: number;
  isActive: boolean;
}

interface IPayload {
  name: string;
  id: number;
  initialValue?: TodoListType[];
}

export enum IActionType {
  add = 'add',
  delete = 'delete',
  setPersistStorage = 'setPersistStorage',
  'restoreValue' = 'restoreValue',
}
export interface IAction {
  type: IActionType;
  payload: IPayload;
}

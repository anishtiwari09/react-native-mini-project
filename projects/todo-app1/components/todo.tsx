import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoInput from './todo-input';
import { IAction, IActionType, TodoListType } from '../utility/types';
import TodoList from './todo-list';

const reducer = (state: TodoListType[], action: IAction): TodoListType[] => {
  switch (action.type) {
    case IActionType.add: {
      return [
        ...state,
        {
          name: action.payload.name,
          id: Date.now(),
          isActive: true,
          date: Date.now(),
        },
      ];
    }
    default:
      return state;
  }
};
export default function Todo() {
  const [state, dispatch] = useReducer(reducer, []);
  const handleAddToList = (text: string) => {
    dispatch({
      type: IActionType.add,
      payload: {
        name: text,
      },
    });
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Todo List</Text>
      <TodoInput handleAdd={handleAddToList} />
      <TodoList datas={state} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 40,
  },
});

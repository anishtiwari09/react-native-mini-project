import React, { useEffect, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoInput from './todo-input';
import { IAction, IActionType, TodoListType } from '../utility/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoFlatList from './flatlist-todolist';
const STORE_DB = 'store-todo-value';
const reducer = (state: TodoListType[], action: IAction): TodoListType[] => {
  switch (action.type) {
    case IActionType.add: {
      return [
        ...state,
        {
          name: action.payload.name,
          id: action.payload.id,
          isActive: true,
          date: Date.now(),
        },
      ];
    }
    case IActionType.delete: {
      const selectedId = action.payload?.id;
      return state.filter(item => item.id !== selectedId);
    }

    case IActionType.restoreValue: {
      const initialValue = action.payload.initialValue || [];
      return [...initialValue];
    }
    default:
      return state;
  }
};
export default function Todo() {
  const [state, dispatch] = useReducer(reducer, []);
  const handleAddList = (text: string) => {
    dispatch({
      type: IActionType.add,
      payload: {
        name: text,
        id: Date.now(),
      },
    });
  };

  const handleDeleteFromList = (id: number) => {
    dispatch({
      type: IActionType.delete,
      payload: {
        id: id,
        name: '',
      },
    });
  };

  const handleInitilizeValue = async () => {
    const todoValue = await AsyncStorage.getItem(STORE_DB);
    const jsonValue = JSON.parse(todoValue || '[]');

    dispatch({
      type: IActionType.restoreValue,
      payload: { name: '', id: 2, initialValue: jsonValue },
    });
  };
  const saveToStorage = async (data: TodoListType[]) => {
    console.log('storing');
    try {
      await AsyncStorage.setItem(STORE_DB, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to store data', error);
    }
  };
  useEffect(() => {
    handleInitilizeValue();
  }, []);

  useEffect(() => {
    saveToStorage(state);
  }, [state]);

  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Todo List</Text>
      <TodoInput handleAdd={handleAddList} />
      <TodoFlatList datas={state} handleDelete={handleDeleteFromList} />
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

import React from 'react';
import { TodoListProps, TodoListType } from '../utility/types';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import TodoItem from './todo-item';

export default function TodoList({ datas, handleDelete }: TodoListProps) {
  if (!datas.length) return null;

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container]}>
        <Text style={[styles.textTitle]}>S.No</Text>
        <Text style={[styles.textTitle]}>Name</Text>
        <Text style={[styles.textTitle]}>Status</Text>
        <Text style={[styles.textTitle]}>Action</Text>
      </View>
      <ScrollView style={[styles.todoList]}>
        {datas?.map((item, index) => (
          <TodoItem
            data={item}
            key={index}
            index={index + 1}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  todoList: {
    width: '100%',
  },
  mainContainer: {
    flex: 1,
    gap: 10,
  },
});

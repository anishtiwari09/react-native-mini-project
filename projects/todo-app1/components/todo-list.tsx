import React from 'react';
import { TodoListType } from '../utility/types';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import TodoItem from './todo-item';

export default function TodoList({ datas }: { datas: TodoListType[] }) {
  if (!datas.length) return null;

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.container]}>
        <Text style={[styles.textTitle]}>S.No</Text>
        <Text style={[styles.textTitle]}>Name</Text>
        <Text style={[styles.textTitle]}>Status</Text>
      </View>
      <ScrollView style={[styles.todoList]}>
        {datas?.map((item, index) => (
          <TodoItem data={item} key={item.id} index={index + 1} />
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

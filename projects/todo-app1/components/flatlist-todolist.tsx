import React from 'react';
import { TodoListProps } from '../utility/types';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './todo-item';

export default function TodoFlatList(props: TodoListProps) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flexWrapper}>
        <Text style={[styles.fontStyle, styles.fixTitle]}>S.No</Text>
        <Text style={[styles.fontStyle, styles.fixTitle]}>Name</Text>
        <Text style={[styles.fontStyle, styles.variableStyle]}>Status</Text>
        <Text style={[styles.fontStyle, styles.fixTitle]}>Action</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        data={props.datas || []}
        renderItem={({ item, index }) => (
          <TodoItem
            data={item}
            handleDelete={() => props.handleDelete(item.id)}
            index={index + 1}
          />
        )}
        keyExtractor={item => '_' + item.id}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 5,
  },
  flexWrapper: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  fontStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  fixTitle: {
    width: 70,
    justifyContent: 'flex-start',
  },
  variableStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});

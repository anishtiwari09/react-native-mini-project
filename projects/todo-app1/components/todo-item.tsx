import { StyleSheet, Text, View } from 'react-native';
import { TodoListType } from '../utility/types';

export default function TodoItem({
  data,
  index,
}: {
  index: number;
  data: TodoListType;
}) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.index}>{index}</Text>
      <Text style={[styles.todoText]}>{data.name}</Text>
      <Text style={[styles.status]}>
        {data?.isActive ? 'Active' : 'Inactive'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    maxWidth: '100%',
    marginTop: 20,
    // flexWrap: 'wrap',
  },
  todoText: {
    flex: 1, // takes remaining space
    fontSize: 14,

    flexWrap: 'wrap', // not strictly necessary but okay
    textAlign: 'center',
  },
  status: {
    width: 50, // fixed width for status
    fontSize: 14,
    textAlign: 'right',
  },
  index: {
    width: 50, // fixed width for index
    fontSize: 14,
    textAlign: 'center',
  },
});

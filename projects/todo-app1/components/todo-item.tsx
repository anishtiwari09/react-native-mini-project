import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TodoListType } from '../utility/types';
import { TextInput } from 'react-native/';

export default function TodoItem({
  data,
  index,
  handleDelete,
}: {
  index: number;
  data: TodoListType;
  handleDelete: () => void;
}) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.index}>{index}</Text>
      <TextInput style={[styles.todoText]} defaultValue={data.name} />
      <Text style={[styles.status]}>
        {data?.isActive ? 'Active' : 'Inactive'}
      </Text>
      <TouchableOpacity onPress={handleDelete}>
        <Text style={[styles.status]}>Delete</Text>
      </TouchableOpacity>
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

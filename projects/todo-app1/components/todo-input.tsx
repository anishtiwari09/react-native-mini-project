import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
interface TodoInputProps {
  handleAdd: (val: string) => void;
}
export default function TodoInput({ handleAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  return (
    <View style={style.textWrapper}>
      <TextInput
        style={[style.textInput]}
        keyboardAppearance="default"
        autoCapitalize="sentences"
        autoFocus
        placeholder="Add To Todo"
        value={text}
        onChangeText={setText}
        onSubmitEditing={() => {
          if (!!text) {
            handleAdd(text);
            setText('');
          }
        }}
        blurOnSubmit={false}
        returnKeyType="done"
      />
    </View>
  );
}

const style = StyleSheet.create({
  textInput: {
    borderBottomColor: 'btelack',
    borderBottomWidth: 2,
  },
  textWrapper: {
    width: '100%',
  },
});

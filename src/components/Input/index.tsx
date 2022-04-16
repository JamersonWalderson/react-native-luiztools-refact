import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface IButton extends TextInputProps {
  error?: string;

}

const Input = ({
  error, 
  ...props
}: IButton) => {
  return(
    <View>
      <TextInput
        style={styles.input}
        {...props}
      />
      {error && (
        <Text style={styles.error}>{ error }</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
    borderEndColor: 'black',
  },
  error: {
    color: 'red',

  }
});

export default Input;
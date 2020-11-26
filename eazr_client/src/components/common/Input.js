import React from 'react';
import {View, TextInput, Text} from 'react-native';

//Components
import If from './If';

const Input = ({placeholder, onChangeText, prop, error, editable}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#a0a1b0"
          onChangeText={(text) => onChangeText(prop, text)}
          editable={editable}
        />
      </View>
      <If show={error}>
        <Text style={styles.errorText}>{error}</Text>
      </If>
    </View>
  );
};

Input.defaultProps = {
  editable: true,
  placeholder: 'placeholder',
};

const styles = {
  container: {
    width: '80%',
    marginBottom: 30,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
  },
  input: {
    color: '#fff',
  },
  errorText: {
    color: 'red',
    marginLeft: 5,
    marginTop: 5,
  },
};

export default Input;

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Button = ({text, onPress, loading, style, textStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color="#000" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#FFD662AA',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

Button.defaultProps = {
  loading: false,
  text: 'button text',
};

export default Button;

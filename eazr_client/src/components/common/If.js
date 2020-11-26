import React from 'react';
import {View} from 'react-native';

const If = (props) => {
  return <View>{props.show ? props.children : null}</View>;
};

export default If;

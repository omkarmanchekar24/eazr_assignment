import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';

//Components
import Input from '../common/Input';
import Button from '../common/Button';

class Login extends Component {
  state = {
    email: '',
    Password: '',
  };

  onChange = (prop, val) => {
    this.setState({
      [prop]: val,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <Input
            placeholder="Email"
            onChangeText={this.onChange}
            prop="email"
          />
          <Input
            placeholder="Password"
            onChangeText={this.onChange}
            prop="password"
          />
          <Button text="Login" onPress={() => {}} loading={false} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Forgot Password"
            onPress={() => {}}
            loading={false}
            style={{width: 100}}
            textStyle={{fontSize: 10}}
          />
          <Button
            text="Go to Register"
            onPress={() => Actions.register()}
            loading={false}
            style={{width: 100}}
            textStyle={{fontSize: 10}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    height: '80%',
    width: Dimensions.get('window').width,
    backgroundColor: '#242985',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Login;

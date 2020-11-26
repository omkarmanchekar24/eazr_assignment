import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

//Components
import Input from '../common/Input';
import Button from '../common/Button';
import If from '../common/If';

//Actions
import {register} from '../../actions/authActions';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    loading: false,
    errors: {},
  };

  onChange = (prop, val) => {
    this.setState({
      [prop]: val,
    });
  };

  onRegister = () => {
    const {name, email, password} = this.state;
    this.props.register({name, email, password});
  };

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.loading) {
      return {
        loading: true,
        errors: {},
      };
    } else if (nextProps.errors) {
      return {
        loading: false,
        errors: nextProps.errors,
      };
    }
    return null;
  }

  render() {
    const {name, email, password, loading, errors} = this.state;
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register</Text>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={this.onChange}
            prop="name"
            error={errors.name}
            editable={!loading}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={this.onChange}
            prop="email"
            error={errors.email}
            editable={!loading}
          />

          <Input
            placeholder="Password"
            value={password}
            onChangeText={this.onChange}
            prop="password"
            error={errors.password}
            editable={!loading}
          />
          <Button
            text="Register"
            onPress={this.onRegister.bind(this)}
            loading={loading}
          />
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
            text="Go to Login"
            onPress={() => Actions.login()}
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

const mapStateToProps = (state) => {
  return {
    errors: state.register.errors,
    loading: state.register.loading,
  };
};

export default connect(mapStateToProps, {register})(Register);

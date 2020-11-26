import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

//Components
import Input from '../common/Input';
import Button from '../common/Button';

//Actions
import {login} from '../../actions/authActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    loading: {},
  };

  onChange = (prop, val) => {
    this.setState({
      [prop]: val,
    });
  };

  onLogin = () => {
    const {email, password} = this.state;
    this.props.login({email, password});
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
    const {email, password, loading, errors} = this.state;
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={this.onChange}
            prop="email"
            editable={!loading}
            error={errors.email}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={this.onChange}
            prop="password"
            editable={!loading}
            error={errors.password}
          />
          <Button
            text="Login"
            onPress={this.onLogin.bind(this)}
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

const mapStateToProps = (state) => {
  return {
    errors: state.login.errors,
    loading: state.login.loading,
  };
};

export default connect(mapStateToProps, {login})(Login);

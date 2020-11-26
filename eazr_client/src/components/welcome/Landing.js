import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

class Landing extends Component {
  render() {
    const {name} = this.props.auth.user;
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.title}>{`Welcome ${name
            .charAt(0)
            .toUpperCase()}${name.substring(1)}`}</Text>
        </View>
        <View style={styles.box2}>
          <Text style={[styles.title, {color: '#000'}]}>Body</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242985',
    justifyContent: 'flex-end',
  },
  box1: {height: '20%', padding: 20, justifyContent: 'center'},
  box2: {
    height: '80%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Landing);

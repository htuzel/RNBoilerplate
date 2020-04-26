import * as React from 'react';
import {View, Text, Button} from 'react-native';
import BoxCenter from '../components/boxcenter';
import {Logo} from '../components/icons';
import styled from 'styled-components/native';
import {inject, observer} from 'mobx-react';

@inject('store')
@observer
class Register extends React.Component {
  render() {
    const {navigation} = this.props;
    const isAuthenticated = this.props.store.isAuthenticated;
    return (
      <BoxCenter>
        <Logo />
        <Text>Register</Text>
      </BoxCenter>
    );
  }
}

export default Register;

import * as React from 'react';
import {View, Button} from 'react-native';
import BoxCenter from '../components/boxcenter';
import H1 from '../components/h1';
import {Logo} from '../components/icons';
import styled from 'styled-components/native';
import { inject, observer } from 'mobx-react';


@inject('store')
@observer

class Login extends React.Component {
  render () {
    const { navigation } = this.props;
    const isAuthenticated = this.props.store.isAuthenticated;
    return (
      <BoxCenter>
        <Logo/>
        <H1>Login</H1>
        
      </BoxCenter>
    );
  } 
}

export default Login;

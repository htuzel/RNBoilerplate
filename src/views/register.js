import * as React from 'react';
import BoxCenter from '../components/boxcenter';
import {Logo} from '../components/icons';
import {inject, observer} from 'mobx-react';
import {Input, Card, Button} from '@ui-kitten/components';
import {ActivityIndicator} from 'react-native';
import {store} from '../store';

@inject('store')
@observer
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        data: '',
        error: '',
      },
      name: {
        data: '',
        error: '',
      },
      password: {
        data: '',
        error: '',
      },
      isLoading: false,
      error: '',
    };
  }

  emailHandleChange = text => {
    let newEmail = {
      data: text,
      error: '',
    };
    this.setState({email: newEmail});
  };

  passwordHandleChange = text => {
    let newPassword = {
      data: text,
      error: '',
    };
    this.setState({password: newPassword});
  };

  nameHandleChange = text => {
    let newName = {
      data: text,
      error: '',
    };
    this.setState({name: newName});
  };

  submitForm = async () => {
    this.setState({isLoading: true});
    try {
      let response = await fetch('https://turacoon.com/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email.data,
          password: this.state.password.data,
          name: this.state.name.data,
        }),
      });
      if (response.ok) {
        let user = await response.json();
        if (user.data.api_token) {
          this.props.store.setAuthUser();
          this.props.store.setApiToken(user.data.api_token);
          this.setState({isLoading: false});
        }
      } else {
        let data = await response.json();
        for (var key in data.errors) {
          let newState = this.state;
          newState[key].error = data.errors[key];
          this.setState(newState);
        }
        this.setState({isLoading: false});
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        error: 'An error occured, Try again please',
      });
    }
  };

  render() {
    const {navigation} = this.props;
    const isAuthenticated = this.props.store.isAuthenticated;
    return (
      <BoxCenter behavior="padding">
        {this.state.isLoading ?
          <ActivityIndicator size="large" color="#ffbf00" />
        : (
          <Card>
            <Logo />
            <Input
              autoCapitalize="none"
              label="Your Name"
              value={this.state.name}
              onChangeText={this.nameHandleChange}
              status={this.state.name.error ? 'danger' : 'basic'}
              caption={this.state.name.error}
            />
            <Input
              autoCapitalize="none"
              label="Your Email"
              value={this.state.email}
              onChangeText={this.emailHandleChange}
              status={this.state.email.error ? 'danger' : 'basic'}
              caption={this.state.email.error}
            />
            <Input
              autoCapitalize="none"
              label="Password"
              caption="Should contain at least 6 characters"
              secureTextEntry={true}
              status={this.state.email.error ? 'danger' : 'basic'}
              onChangeText={this.passwordHandleChange}
              value={this.state.password}
              minLength={6}
            />
            <Button onPress={this.submitForm} style={{marginTop: 15}}>
              Register
            </Button>
          </Card>
        )}
      </BoxCenter>
    );
  }
}

export default Register;

import * as React from 'react';
import BoxCenter from '../components/boxcenter';
import {Text} from 'react-native';
import {Logo} from '../components/icons';
import {inject, observer} from 'mobx-react';
import {Input, Card, Button} from '@ui-kitten/components';
import {store} from '../store';

@inject('store')
@observer
class Login extends React.Component {
  constructor(props) {
    super(props);
    let { navigation } = props;
    this.state = {
      email: '',
      password: '',
    };
  }

  emailHandleChange = text => {
    this.setState({email: text});
  };

  passwordHandleChange = text => {
    this.setState({password: text});
  };

  submitForm = async () => {
    try {
      let response = await fetch('https://turacoon.com/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });
      let user = await response.json();
      if (user.data.api_token) {
        this.props.store.setAuthUser();
        this.props.store.setApiToken(user.data.api_token);
      }
      console.warn(this.props.store.isAuthenticated);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {navigation} = this.props;
    const isAuthenticated = this.props.store.isAuthenticated;
    return (
      <BoxCenter behavior="padding">
        <Card>
          <Logo />
          <Input
            label="Your Email"
            value={this.state.email}
            onChangeText={this.emailHandleChange}
          />
          <Input
            label="Password"
            caption="Should contain at least 8 symbols"
            secureTextEntry={true}
            onChangeText={this.passwordHandleChange}
            value={this.state.password}
          />
          <Button onPress={this.submitForm} style={{marginTop: 15}}>
            Login
          </Button>
        </Card>
      </BoxCenter>
    );
  }
}

export default Login;

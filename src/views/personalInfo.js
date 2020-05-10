import * as React from 'react';
import {View, Text} from 'react-native';
import {Input, Card, Button, Icon, Select} from '@ui-kitten/components';
import {inject, observer} from 'mobx-react';
import {LogoWhite} from '../components/icons';
import BoxCenter from '../components/boxcenter';
import CountryPicker from 'react-native-country-picker-modal';

const PersonIcon = props => <Icon {...props} name="person-outline" />;
const ForwardIcon = props => <Icon {...props} name="arrow-ios-forward" />;
const creditCardIcon = props => <Icon {...props} name="credit-card-outline" />;
const videoIcon = props => <Icon {...props} name="video-outline" />;
const shareIcon = props => <Icon {...props} name="share-outline" />;

@inject('store')
@observer
class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        data: '',
        error: '',
      },
      email: {
        data: '',
        error: '',
      },
      password: {
        data: '',
        error: '',
      },
      country: {
        code: '',
        data: '',
        error: '',
      },
      countries: '',
      selectedIndex: 0,
      isLoading: false,
      error: '',
    };
  }

  setSelectedIndex = country => {
    this.setState({selectedIndex: country});
  };

  nameHandleChange = text => {
    let newName = {
      data: text,
      error: '',
    };
    this.setState({name: newName});
  };

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

  countryHandleChange = country => {
    let newCountry = {
      data: country,
      code: country.cca2,
      error: '',
    };
    this.setState({country: newCountry});
  };

  componentDidMount() {
    this.fetchInfo();
  }

  fetchInfo = async () => {
    let response = await fetch('https://turacoon.com/api/fetch-profile', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.props.store.apiToken,
      },
    });
    console.warn(response);
    if (response.ok) {
      let json = await response.json();
      if (json.success) {
        for (var key in json.data) {
          let newState = this.state;
          newState[key].data = json.data[key];
          this.setState(newState);
        }
        let newCountry = {
          data: json.data.country,
          code: json.data.country,
          error: '',
        };
        this.setState({country: newCountry});
        console.warn(this.state);
      }
    } else {
    }
  };

  submitForm = async () => {
    this.setState({isLoading: true});
    try {
      let response = await fetch('https://turacoon.com/api/update-profile', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name.data,
          email: this.state.email.data,
          password: this.state.password.data,
          country: this.state.country.data,
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

    return (
      <>
        <BoxCenter behavior="padding">
          <LogoWhite style={{marginTop: 40, flex: 1}} />
          <Card style={{minWidth: '100%', flex: 3, display: 'flex'}}>
            <Input
              autoCapitalize="none"
              label="Your Name"
              value={this.state.name.data}
              onChangeText={this.nameHandleChange}
              status={this.state.name.error ? 'danger' : 'basic'}
              caption={this.state.name.error}
            />
            <Input
              autoCapitalize="none"
              label="Email"
              value={this.state.email.data}
              onChangeText={this.emailHandleChange}
              status={this.state.email.error ? 'danger' : 'basic'}
              caption={this.state.email.error}
            />
            <Input
              autoCapitalize="none"
              label="Password"
              value={this.state.password}
              onChangeText={this.passwordHandleChange}
              status={this.state.password.error ? 'danger' : 'basic'}
              caption={this.state.password.error}
              minLength={6}
            />
            <Text style={labelStyle}>Country</Text>
            <View
              style={
                this.state.country.code
                  ? countryStyle
                  : {...countryStyle, paddingBottom: 20}
              }>
              <CountryPicker
                countryCode={this.state.country.code}
                withFilter={true}
                withFlag={true}
                withCountryNameButton={true}
                withAlphaFilter={false}
                withCallingCode={false}
                withEmoji={true}
                onSelect={this.countryHandleChange}
                placeholder=""
              />
            </View>
            <Button onPress={this.submitForm} style={{marginTop: 15}}>
              Save
            </Button>
          </Card>
          <View style={{flex: 1}} />
        </BoxCenter>
      </>
    );
  }
}


const labelStyle = {
  fontFamily: 'Helvetica Neue',
  color: '#8F9BB3',
  fontWeight: '800',
  paddingBottom: 3,
};

const countryStyle = {
  marginTop: 1,
  marginBottom: 5,
  backgroundColor: '#F7F9FC',
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 10,
  borderColor: '#E4E9F2',
  borderWidth: 1,
  borderRadius: 3,
};

export default PersonalInfo;

import * as React from 'react';
import {View, Text} from 'react-native';
import {SelectItem, Card, Button, Icon, Select} from '@ui-kitten/components';
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
class ClassPreferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correction: 1,
      isLoading: false,
      error: '',
    };
  }

  setCorrection = correction => {
    this.setState({correction});
  };

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
            <Select
              selectedIndex={this.state.correction}
              onSelect={index => setCorrection(index)}>
              <SelectItem title="Option 1" />
              <SelectItem title="Option 2" />
              <SelectItem title="Option 3" />
            </Select>
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

export default ClassPreferences;

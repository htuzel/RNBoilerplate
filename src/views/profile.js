import * as React from 'react';
import {View, Text} from 'react-native';
import {
  Input,
  Card,
  Button,
  Icon,
  Divider
} from '@ui-kitten/components';
import {inject, observer} from 'mobx-react';
import {LogoWhite} from '../components/icons';
import BoxCenter from '../components/boxcenter';


const PersonIcon = props => <Icon {...props} name="person-outline" />;

const BrowserIcon = props => <Icon {...props} name="browser-outline" />;

const ColorPaletteIcon = props => (
  <Icon {...props} name="color-palette-outline" />
);

const StarIcon = props => <Icon {...props} name="star" />;

@inject('store')
@observer
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
    };
  }

  setSelectedIndex = index => {
    this.setState({selectedIndex: index});
  };

  logout = async () => {
    this.props.store.logout();
  };

  render() {
    return (
      <>
        <BoxCenter behavior="padding">
          <LogoWhite style={{marginTop: 30, flex: 1}} />
          <Card style={{minWidth: '100%', flex: 6, display: 'flex'}}>
            <Button
              onPress={this.logout}
              style={{width: '50%', marginLeft: '25%'}}>
              Logout
            </Button>
          </Card>
          <View style={{flex: 1}} />
        </BoxCenter>
      </>
    );
  }
}

export default Profile;

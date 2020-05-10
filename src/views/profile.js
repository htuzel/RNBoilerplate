import * as React from 'react';
import {View, Text} from 'react-native';
import {MenuItem, Card, Button, Icon, Menu} from '@ui-kitten/components';
import {inject, observer} from 'mobx-react';
import {LogoWhite} from '../components/icons';
import BoxCenter from '../components/boxcenter';

const PersonIcon = props => <Icon {...props} name="person-outline" />;
const ForwardIcon = props => <Icon {...props} name="arrow-ios-forward" />;
const creditCardIcon = props => <Icon {...props} name="credit-card-outline" />;
const videoIcon = props => <Icon {...props} name="video-outline" />;
const shareIcon = props => <Icon {...props} name="share-outline" />;

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
    const { navigation } = this.props;

    return (
      <>
        <BoxCenter behavior="padding">
          <LogoWhite style={{marginTop: 80, flex: 1}} />
          <Card style={{minWidth: '100%', flex: 2, display: 'flex'}}>
            <Menu
              style={{backgroundColor: 'white'}}
              selectedIndex={this.state.selectedIndex}
              onSelect={index => this.setSelectedIndex(index)}>
              <MenuItem
                onPress={() => navigation.navigate('Personal Info')}
                title="Personal Info"
                accessoryLeft={PersonIcon}
                accessoryRight={ForwardIcon}
              />
              <MenuItem
                title="Class Preferences"
                accessoryLeft={creditCardIcon}
                accessoryRight={ForwardIcon}
              />
              <MenuItem
                title="Payment Info"
                accessoryLeft={videoIcon}
                accessoryRight={ForwardIcon}
              />
              <MenuItem
                title="Invite to Turacoon"
                accessoryLeft={shareIcon}
                accessoryRight={ForwardIcon}
              />
            </Menu>
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

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ProfileTab from '../appTabNavigator/ProfileTab';
import Icon from '@expo/vector-icons/Ionicons';

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileTab,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});


export default ProfileStack;
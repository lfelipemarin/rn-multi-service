import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeTab from '../appTabNavigator/HomeTab'
import DetailsScreen from '../screens/DetailsScreen'
import Icon from '@expo/vector-icons/Ionicons';

const FeedStack = createStackNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Home',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    },
    DetailsScreen: {
      screen: DetailsScreen
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default FeedStack;
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import MapTab from '../appTabNavigator/MapTab';
import Icon from '@expo/vector-icons/Ionicons';

const MapStack = createStackNavigator({
  Profile: {
    screen: MapTab,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Map',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});


export default MapStack;
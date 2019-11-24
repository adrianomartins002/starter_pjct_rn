import {createBottomTabNavigator} from 'react-navigation-tabs';

import {TouchableOpacity} from 'react-native';

import {tabs} from './tabs';

export const Principal = createBottomTabNavigator(
  {
    ...tabs,
  },
  {
    defaultNavigationOptions: navigationOptions,
  },
);

function navigationOptions({navigation}) {
  return {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#5ba0d7',
      style: {
        elevation: 2,
      },
    },
    tabBarButtonComponent: TouchableOpacity,
  };
}

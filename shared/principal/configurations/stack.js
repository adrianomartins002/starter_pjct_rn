import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import * as pages from '../pages';
import {aplicarEstiloPadraoDeNavegacao} from '../../common/util';
import Icon from 'react-native-vector-icons/Fontisto';
import {Colors} from '../../common/util';

function ConfigurationIcon(props) {
  return <Icon name="player-settings" size={30} color={Colors.black.default} />;
}

export const ConfigurationsStack = createStackNavigator(
  {
    Configurations: pages.Configurations,
  },
  {
    ...aplicarEstiloPadraoDeNavegacao(ConfigurationIcon),
  },
);

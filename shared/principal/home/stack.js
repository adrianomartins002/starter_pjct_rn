/**
 * stack.js
 *
 * Páginas que fazem parte da Stack da `Carteira` devem estar neste arquivo.
 */

import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import * as pages from '../pages';
import {aplicarEstiloPadraoDeNavegacao} from '../../common/util';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeIcon(props) {
  return <Icon name="home" size={30} color="#000" />;
}

export const HomeStack = createStackNavigator(
  {
    Home: pages.Home,
  },
  {
    ...aplicarEstiloPadraoDeNavegacao(HomeIcon),
  },
);

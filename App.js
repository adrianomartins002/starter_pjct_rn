import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {Principal} from './shared/principal';

/**
 * Fases do app devem ser adicionadas a este SwitchNavigator
 */
const AppNavigator = createSwitchNavigator({
  Principal,
});

/**
 * O `AppContainer` é um componente que contém todas as
 * páginas que podem ser acessadas por meio de navegação.
 */
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

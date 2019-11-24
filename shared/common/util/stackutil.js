import {Platform} from 'react-native';

export function aplicarEstiloPadraoDeNavegacao(icone, navigationOptions) {
  return {
    /**
     * Estilo padrão
     *
     */
    defaultNavigationOptions: {
      headerPressColorAndroid: '#fff',
      headerStyle: {
        elevation: 0,
      },
      headerTitleContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: Platform.select({ios: 0, android: 64}),
      },
      headerTitleStyle: {
        color: '#344D60',
        fontFamily: 'Bariol-Regular',
        fontSize: 20,
        fontWeight: 'normal',
      },
      headerBackTitle: null,
      headerRight: null,
    },

    /**
     * Lógica aplicada para que,
     * quando o usuário acessar mais de um nível na stack
     * a tabBar nao seja mostrada.
     */
    navigationOptions: ({navigation}) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }

      return {
        tabBarIcon: icone,
        tabBarVisible,
        ...navigationOptions,
      };
    },
  };
}

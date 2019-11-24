/**
 * tabs.js
 * 
 * Páginas acessíveis através do Tab Navigator devem ser mapeadas aqui.
 */

import { HomeStack } from './home/stack'
import { ConfigurationsStack } from './configurations/stack'

export const tabs = {
    Home: HomeStack,
    Configurations: ConfigurationsStack,
}
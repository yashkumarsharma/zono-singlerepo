/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';

AppRegistry.registerComponent('zonosinglerepo', () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication('zonosinglerepo', {
    rootTag: document.getElementById('root'),
  })
}

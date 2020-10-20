/**
 * @format
 */
import React from 'react'
import {AppRegistry, Platform} from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import App from './App'

const rootComponent = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent('zonosinglerepo', () => rootComponent)

if (Platform.OS === 'web') {
  AppRegistry.runApplication('zonosinglerepo', {
    rootTag: document.getElementById('root'),
  })
}

import { registerRootComponent } from 'expo';
import { register } from "@videosdk.live/react-native-sdk";
import { AppRegistry } from 'react-native';

register();

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);
AppRegistry.registerComponent('main', () => App);

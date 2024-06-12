import 'react-native-get-random-values'; // Ensure this is imported first
import { AppRegistry, NativeModules } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

if (NativeModules.RNRandomBytes) {
  NativeModules.RNRandomBytes.seed();
}

AppRegistry.registerComponent(appName, () => App);

Object.assign(window, {
  addEventListener: () => 0,
  removeEventListener: () => {},
  dispatchEvent: () => true,
  CustomEvent: class CustomEvent {},
});
import "fast-text-encoding";
import "@ethersproject/shims";
import "./shim.js";

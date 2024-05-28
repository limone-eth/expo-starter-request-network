Object.assign(window, {
  addEventListener: () => 0,
  removeEventListener: () => {},
  dispatchEvent: () => true,
  CustomEvent: class CustomEvent {},
});
import "fast-text-encoding";
import "react-native-get-random-values";
import "@ethersproject/shims";
import "./shim.js";

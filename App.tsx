import "fast-text-encoding";
import "react-native-get-random-values";
import "crypto-browserify";
import { Buffer } from "buffer";
import "@ethersproject/shims";
import Constants from "expo-constants";
import React from "react";
import { registerRootComponent } from 'expo';
import {SafeAreaView, View, Text} from "react-native";

import {PrivyProvider} from "@privy-io/expo";

import {Wrapper} from "./Wrapper";

// Polyfill Buffer globally
global.Buffer = Buffer;
console.log('Buffer polyfilled:', global.Buffer);

// Polyfill crypto
global.crypto = require('crypto');
console.log('Crypto polyfilled:', global.crypto);

export default function App() {
  if (Constants.expoConfig?.extra?.privyAppId === "<your-app-id>") {
    return (
      <SafeAreaView>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Set your app id in app.json</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <PrivyProvider appId={process.env.EXPO_PUBLIC_PRIVY_APP_ID!}>
      <SafeAreaView style={{flex: 1, margin: 10}}>
        <Wrapper />
      </SafeAreaView>
    </PrivyProvider>
  );
}

registerRootComponent(App);
console.log('App registered');

// app/Index.tsx
// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from "react-native";

// providers
import { PaperProvider } from "react-native-paper";
import { EventProvider } from 'react-native-outside-press';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { SafeAreaView } from "react-native-safe-area-context";

// animation
import 'react-native-reanimated';
import 'react-native-gesture-handler';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Settings from './settings';
// import { Link } from 'expo-router';

// home page components
// import BottomNavbar from '@/src/components/navbars/BottomNavbar/BottomNavbar';

// const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

let storybookEnabled = false;
// storybookEnabled = true; // COMMENT THIS TO TURN OFF STORYBOOK

// const Tab = createBottomTabNavigator();
const Index = () => {
  return (
    <PaperProvider>
      <EventProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={{ height: '100%' }}>
            <Home />
          </View>
        </GestureHandlerRootView>
      </EventProvider>
    </PaperProvider>
  );
};

let EntryPoint = Index;

if (storybookEnabled) {
  const StorybookUI = require("../.storybook").default;

  EntryPoint = () => {
    return (
      <PaperProvider>
        <View style={{ flex: 1 }}>
          <StorybookUI />
        </View>
      </PaperProvider>
    );
  };
}


export default EntryPoint;
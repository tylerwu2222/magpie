// app/Index.tsx
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from "@/AppContextProvider";
import React from "react";
import { Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

// const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

let storybookEnabled = false;

storybookEnabled = true; // COMMENT THIS TO TURN OFF STORYBOOK

const Index = () => {
  return (
    <PaperProvider>
      <AppProvider>
        <SafeAreaView>
          <Text>Hello world</Text>
          <StatusBar style="auto" />
        </SafeAreaView>
      </AppProvider>
    </PaperProvider>
  );
};

let EntryPoint = Index;

if (storybookEnabled) {
  const StorybookUI = require("../.storybook").default;

  EntryPoint = () => {
    return (
      <PaperProvider>
        <AppProvider>
          <View style={{ flex: 1 }}>
            <StorybookUI />
          </View>
        </AppProvider>
      </PaperProvider>
    );
  };
}


export default EntryPoint;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
// import { AppProvider } from '../AppContextProvider';
// import Constants from 'expo-constants';
// import Storybook from '../.storybook';

// let storybookEnabled = false;

// function App() {

//   return (
//     <AppProvider>
//       <PaperProvider>
//         <View style={styles.container}>
//           <Text>Magpie, add Screen navigator here? check youzi and docs</Text>
//           <StatusBar style="auto" />
//         </View>
//       </PaperProvider>
//     </AppProvider>
//   );
// }

// app/Index.tsx
// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View } from "react-native";

// providers

// import { SafeAreaView } from "react-native-safe-area-context";

// animation
import 'react-native-reanimated';
import 'react-native-gesture-handler';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Settings from './settings';
import Auth from "@/src/components/auth/Auth";
import Account from "@/src/components/auth/Account";

import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import UserProvider from "@/src/providers/UserProvider/UserProvider";
// import { Link } from 'expo-router';

// home page components
// import BottomNavbar from '@/src/components/navbars/BottomNavbar/BottomNavbar';

// const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

// let storybookEnabled = false;
// storybookEnabled = true; // COMMENT THIS TO TURN OFF STORYBOOK

// const Tab = createBottomTabNavigator();
const Index = () => {
  const [session, setSession] = useState<Session | null>(null)

  // check for session?
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // reset session when change auth/user
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View style={{ height: '100%' }}>
      {/* show login if no session, show home if session */}
      {session && session.user ? <Home key={session.user.id} session={session} /> : <Auth />}
      {/* {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />} */}
    </View>
  );
};

let EntryPoint = Index;

// if (storybookEnabled) {
//   const StorybookUI = require("../.storybook").default;

//   EntryPoint = () => {
//     return (
//       <PaperProvider>
//         <View style={{ flex: 1 }}>
//           <StorybookUI />
//         </View>
//       </PaperProvider>
//     );
//   };
// }

export default EntryPoint;


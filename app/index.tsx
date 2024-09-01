// app/Index.tsx
import React, { useState, useEffect } from "react";
import { View } from "react-native";

// providers
// animation
import 'react-native-reanimated';
import 'react-native-gesture-handler';

import Home from './home';
import Auth from "@/src/components/auth/Auth";
// import Account from "@/src/components/auth/Account";

import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";

export default function Index() {
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
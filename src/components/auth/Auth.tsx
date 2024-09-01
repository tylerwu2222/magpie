import React, { useState } from 'react'
import { Alert, StyleSheet, View, Text, AppState } from 'react-native'
import { supabase } from '@/lib/supabase'

// components
import CustomTextInput from '../inputs/textInput/TextInput'
import TextButton from '../buttons/TextButton/TextButton'
import { Image } from 'moti'
import { Colors } from '@/assets/constants/Colors'
import ElevatedView from '../views/ElevatedView/ElevatedView'

// auth

// import GoogleOAuth from './oAuth/GoogleOAuth'
// import FacebookAuth from './oAuth/FacebookAuth'
// import GithubAuth from './oAuth/GithubAuth'

import { useRouter } from 'expo-router'


// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})

export default function Auth() {

    // const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
        // if (session){}
        // router.push('/home');
    }

    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                emailRedirectTo: ''
            }
        })

        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your email: ' + email + ' for email verification! Then come back here to sign in')
        setLoading(false)
    }

    return (
        <ElevatedView viewMarginTop={80}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/icon.png')}
                    from={{
                        width: 20,
                        height: 20,
                        rotate: '0deg'
                    }}
                    animate={{
                        width: Math.max(Math.min(email.length * 5, 100), 20),
                        height: Math.max(Math.min(email.length * 5, 100), 20),
                        rotate: loading ? '360deg' : '0deg'
                    }}
                    transition={{
                        type: 'spring',
                        rotate: {
                            duration: 6000
                            // deceleration:
                        }
                    }}
                />
            </View>
            <View style={styles.emailAuthContainer}>
                <View style={[styles.verticallySpaced, styles.mt20]}>
                    <CustomTextInput
                        label="Email"
                        maxWidth={250}
                        onChangeTextFn={(text) => setEmail(text)}
                        value={email}
                        placeholder="email@address.com"
                    />
                </View>
                <View style={styles.verticallySpaced}>
                    <CustomTextInput
                        label="Password"
                        maxWidth={250}
                        onChangeTextFn={(text) => setPassword(text)}
                        value={password}
                        isPassword={true}
                        placeholder="Password"
                    />
                </View>
                <View style={[styles.verticallySpaced, styles.mt20]}>
                    <TextButton
                        text='Sign in'
                        buttonColorDict={Colors.accentBlueButtonFilled}
                        buttonWidth={250}
                        disabled={loading}
                        onPressFn={() => signInWithEmail()}
                    />
                </View>
                <View style={styles.verticallySpaced}>
                    <TextButton
                        text='Sign up'
                        buttonColorDict={Colors.darkGreyButtonFilled}
                        buttonWidth={250}
                        disabled={loading}
                        onPressFn={() => signUpWithEmail()}
                    />
                </View>
            </View>
            {/* <View style={styles.oAuthContainer}>
                <Text>Or sign in with a social:</Text>
                <GoogleOAuth />
                <FacebookAuth />
                <GithubAuth />
            </View> */}
        </ElevatedView>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    emailAuthContainer: {

    },
    oAuthContainer: {

    },
    verticallySpaced: {
        paddingTop: 15,
        paddingBottom: 15,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
})
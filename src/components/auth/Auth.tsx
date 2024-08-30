import React, { useState } from 'react'
import { Alert, StyleSheet, View, AppState } from 'react-native'
import { supabase } from '@/lib/supabase'
import { Button, Input } from '@rneui/themed'
import CustomTextInput from '../inputs/textInput/TextInput'
import TextButton from '../buttons/TextButton/TextButton'
import { Image } from 'moti'
import { magpieDimensions } from '@/assets/constants/magpieDimensions'
import { Colors } from '@/assets/constants/Colors'

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
    }

    async function signUpWithEmail() {
        setLoading(true)
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        console.log('signing up with email....');
        console.log('session',session);
        console.log('error?',error);
        
        if (error) Alert.alert(error.message)
        if (!session) Alert.alert('Please check your inbox for email verification!')
        setLoading(false)
    }

    return (
        <View style={styles.authContainer}>
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
                        rotate: loading? '360deg': '0deg'
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
            <View style={[styles.verticallySpaced, styles.mt20]}>
                {/* <Input
                    label="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    autoCapitalize={'none'}
                /> */}
                <CustomTextInput
                    label="Email"
                    onChangeTextFn={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                // autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                {/* <Input
                    label="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize={'none'}
                /> */}
                <CustomTextInput
                    label="Password"
                    onChangeTextFn={(text) => setPassword(text)}
                    value={password}
                    isPassword={true}
                    placeholder="Password"
                // autoCapitalize={'none'}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <TextButton
                    text='Sign in'
                    buttonColorDict={Colors.accentBlueButtonFilled}
                    disabled={loading}
                    onPressFn={() => signInWithEmail()}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <TextButton
                    text='Sign up'
                    buttonColorDict={Colors.darkGreyButtonFilled}
                    disabled={loading}
                    onPressFn={() => signUpWithEmail()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    authContainer: {
        marginTop: 40,
        padding: 12,
        height: 'auto',
        width: magpieDimensions.vw * 0.9,
        alignSelf: 'center',
        backgroundColor: Colors.lightTheme.background,
        shadowColor: '#000', // color of the shadow
        shadowOffset: { width: 0, height: 2 }, // shadow offset (width and height)
        shadowOpacity: 0.25, // shadow opacity
        shadowRadius: 3.84, // shadow blur radius
        elevation: 5,
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
})
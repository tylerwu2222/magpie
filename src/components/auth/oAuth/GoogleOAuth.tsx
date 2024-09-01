import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
    isErrorWithCode
} from '@react-native-google-signin/google-signin';

const GoogleOAuth = () => {
    GoogleSignin.configure({
        // webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    });

    const [isInProgress, setIsInProgress] = useState(false);

    // Somewhere in your code
    const _signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            //   setState({ userInfo, error: undefined });
            console.log('userInfo', JSON.stringify(userInfo, null, 2))
        } catch (error) {
            if (isErrorWithCode(error)) {
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        // user cancelled the login flow
                        break;
                    case statusCodes.IN_PROGRESS:
                        // operation (eg. sign in) already in progress
                        break;
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        // play services not available or outdated
                        break;
                    default:
                    // some other error happened
                }
            } else {
                // an error that's not related to google sign in occurred
            }
        }
    };


    const initiateSignIn = () => {
        setIsInProgress(true);
        console.log('sign in w google');
        _signIn();
        setIsInProgress(false);
    };

    return (
        <GoogleSigninButton
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={initiateSignIn}
            // disabled={isInProgress}
        />
    )
}

export default GoogleOAuth

const styles = StyleSheet.create({})
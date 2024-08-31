import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackActionNavbar from '@/src/components/navbars/BackActionNavbar/BackActionNavbar'
import { magpieDimensions } from '@/assets/constants/magpieDimensions'
import { Colors } from '@/assets/constants/Colors'
import SwitchInput from '@/src/components/inputs/SwitchInput/SwitchInput'
import TextButton from '@/src/components/buttons/TextButton/TextButton'
import ElevatedView from '@/src/components/views/ElevatedView/ElevatedView'

const Settings = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [sharingEnabled, setSharingEnabled] = useState(false);

  const onThemeSwitch = () => setDarkMode(!darkMode);
  const onSharingSwitch = () => setSharingEnabled(!sharingEnabled);

  return (
    <>
      <BackActionNavbar navbarTitle='Settings' />
      <ElevatedView>
        <SwitchInput switchLabel={'Toggle Dark Mode'} switchValue={darkMode} onSwitchChangeFn={onThemeSwitch} />
        <SwitchInput switchLabel={'Enable Sharing'} switchValue={sharingEnabled} onSwitchChangeFn={onSharingSwitch} />
        <TextButton text='Upgrade Storage' buttonColorDict={Colors.accentBlueButtonFilled} />
      </ElevatedView>
    </>
  )
}

export default Settings

const styles = StyleSheet.create({
})
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import BackActionNavbar from '@/src/components/navbars/BackActionNavbar/BackActionNavbar'
import ElevatedView from '@/src/components/views/ElevatedView/ElevatedView'
// import InlineView from '@/src/components/views/InlineView/InlineView'
import { ScrollView } from 'moti'

// demonstration icons
import AddIconButton from '@/src/components/buttons/common_icon_buttons/AddIconButton'
import AnimatedActivityIndicator from '@/src/components/icons/AnimatedActivityIndicator/AnimatedActivityIndicator'
import DeleteIconButton from '@/src/components/buttons/common_icon_buttons/DeleteIconButton'
import ShareIconButton from '@/src/components/buttons/common_icon_buttons/ShareIconButton'
import SliderButtonSelect from '@/src/components/composite_components/buttons/SliderButtonSelect/SliderButtonSelect'
import ListIcon from '@/src/components/icons/common_icons/ListIcon'
import GridIcon from '@/src/components/icons/common_icons/GridIcon'
import { Colors } from '@/assets/constants/Colors'

const help = () => {
  return (
    <View>
      <BackActionNavbar navbarTitle='Help' />
      <ElevatedView>
        <Text variant='titleLarge'>How to use Magpie!</Text>
        <ScrollView>
          <Text variant='titleSmall' style={styles.helpSubSection}>Creating a note</Text>
          <Text>
            1) Press the add icon (
            <AddIconButton contentSize={20} />
            ) on the bottom right of the home screen to create a new note
          </Text>
          <Text>
            2) Begin typing in the title, subtitle, and/or description of your note
          </Text>
          <Text>
            3) Close the new note once satisfied -- Magpie will save automatically
          </Text>

          <Text variant='titleSmall' style={styles.helpSubSection}>Editing a note</Text>
          <Text>
            1) Tap a note, this will open an editable modal
          </Text>
          <Text>
            2) Begin typing in any text area, you will notice a loading icon (
            <AnimatedActivityIndicator hasPadding={false} />
            ) when Magpie is saving your changes
          </Text>
          <Text>
            3) Once the indicator disappears that means your changes are saved, feel free to close the note at this point
          </Text>
          <Text variant='titleSmall' style={styles.helpSubSection}>Deleting a note</Text>
          <Text>There are two options for deleting a note</Text>
          <Text>Option 1:</Text>
          <Text>
            1) Open a note
          </Text>
          <Text>
            2) Press the red trash can icon (<DeleteIconButton contentSize={20} />)
          </Text>
          <Text>Option 2:</Text>
          <Text>
            1) Long press on a note in the home screen
          </Text>
          <Text>
            2) Drag the note to the top right of your screen to the trash can icon (<DeleteIconButton contentSize={20} />), and drop it once it turns red
          </Text>
          <Text variant='titleSmall' style={styles.helpSubSection}>Duplicating a note</Text>
          <Text>
            1) Long press on a note in the home screen
          </Text>
          <Text>
            2) Drag the note to the bottom right of your screen to the share icon (<ShareIconButton contentSize={20} />), and drop it once it turns green
          </Text>
          <Text variant='titleSmall' style={styles.helpSubSection}>Toggling note view</Text>
          <Text>
            1) Long press the view selector module (<GridIcon />) on the bottom left of your screen
          </Text>
          <Text>
            2) Pan up or down, to toggle which mode you would like to view your content in: List View (<ListIcon />) or Grid View (<GridIcon />)
          </Text>

          <Text variant='titleMedium' style={styles.helpSection}>Future features</Text>
          <Text variant='titleSmall' style={styles.helpSubSection}>Creating a collection</Text>

          <Text variant='titleSmall' style={styles.helpSubSection}>Sharing a note</Text>

          <Text variant='titleSmall' style={styles.helpSubSection}>Adding a note to a collection</Text>

        </ScrollView>
      </ElevatedView>
    </View>
  )
}

export default help

const styles = StyleSheet.create({
  helpSubSection: {
    paddingTop: 10
  },
  helpSection: {
    paddingTop: 30
  }
})
import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { Colors } from '@/assets/constants/Colors';
import { magpieDimensions } from '@/assets/constants/magpieDimensions';
import { defaultProfileImage } from '@/assets/data/dummyData/dummyCollection copy';

const ProfileButton = () => {

  // set in context/FB
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    setProfileImage(defaultProfileImage);
  }, []);

  const navigateToProfile = () => {
    console.log('navigating to profile page');
  };

  return (
    <View style={styles.profileButtonImageView}>
      {profileImage && <Pressable
        onPress={navigateToProfile}>
        <Image
          src={profileImage}
          alt={'profile-image'}
        >
        </Image>
      </Pressable>}
    </View>
  )
}

export default ProfileButton

const profileImageSize = magpieDimensions.vw / 25;

const styles = StyleSheet.create({
  profileButtonImageView: {
    backgroundColor: Colors.darkButton.text,
    borderRadius: profileImageSize,
    borderWidth: 1,
    borderColor: Colors.darkButton.text,
    height: profileImageSize,
    width: profileImageSize
  }
})
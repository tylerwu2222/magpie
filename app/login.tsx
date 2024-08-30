import { View, Text } from 'react-native'
import React from 'react'
import Auth from '@/src/components/auth/Auth'
import { Link } from 'expo-router'

export default function login() {
    return (
        <View>
            <Auth />
            <Link href="/home"></Link>
        </View>
    )
}
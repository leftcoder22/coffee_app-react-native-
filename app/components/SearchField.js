import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import colors from '../config/colors'
import SPACING from '../config/SPACING'

import { Ionicons } from '@expo/vector-icons'

export default function SearchField() {
  return (
    <View style={{
        borderRadius: SPACING,
        overflow: 'hidden',
        justifyContent: 'center',
    }}
    >
      <BlurView 
        intensity={30}
        style={{
        alignItems: 'center',
        justifyContent: 'center'
        }}
      >
        <TextInput style={{ 
            width: '100%', 
            color: colors.white,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 3.5,
         }} 
        placeholder='Find Your Coffee...'
        placeholderTextColor={colors.light}
        />
        <Ionicons 
        style={{
            position: 'absolute',
            left: SPACING,
        }}
        name="search"
        color={colors.light}
        size={SPACING * 2} 
        />
      </BlurView>
    </View>
  )
}
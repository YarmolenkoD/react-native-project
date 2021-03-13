import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { ViewStyle } from "react-native"
import { isIphoneX } from "react-native-iphone-x-helper"

enableScreens()

// types
import { BottomTabParamList, ProfileParamList, SearchParamList } from 'types'

// theme
import { color } from 'theme'

// hooks
import { useColorScheme } from 'hooks'

// screens
import { Profile, Search } from "screens"

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const TAB_BAR_STYLES: ViewStyle = {
  height: isIphoneX() ? 80 : 60,
  paddingBottom: isIphoneX() ? 20 : 15,
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: color[colorScheme].primary,
        showLabel: false,
        style: TAB_BAR_STYLES
      }}
    >
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} {...props} />
}

const SCREEN_OPTIONS = {
  headerShown: false,
  gestureEnabled: true,
}

const ProfileStack = createNativeStackNavigator<ProfileParamList>()

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={SCREEN_OPTIONS}
    >
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
      />
    </ProfileStack.Navigator>
  )
}

const SearchStack = createNativeStackNavigator<SearchParamList>()

function SearchNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={SCREEN_OPTIONS}
    >
      <SearchStack.Screen
        name="Search"
        component={Search}
      />
    </SearchStack.Navigator>
  )
}

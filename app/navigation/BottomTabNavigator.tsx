import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { ViewStyle } from "react-native"
import { isIphoneX } from "react-native-iphone-x-helper"

enableScreens()

// types
import { BottomTabParamList, InboxParamList, ProfileParamList, ReservationsParamList, SearchParamList } from 'types'

// theme
import { color } from 'theme'

// hooks
import { useColorScheme } from 'hooks'

// screens
import { Inbox, Profile, Reservations, Search } from 'screens'

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
        name="Inbox"
        component={InboxNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="chatbox" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Reservations"
        component={ReservationsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="basketball" color={color} />,
        }}
      />
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

const InboxStack = createNativeStackNavigator<InboxParamList>()

function InboxNavigator() {
  return (
    <InboxStack.Navigator
      screenOptions={SCREEN_OPTIONS}
    >
      <InboxStack.Screen
        name="Inbox"
        component={Inbox}
      />
    </InboxStack.Navigator>
  )
}


const ReservationsStack = createNativeStackNavigator<ReservationsParamList>()

function ReservationsNavigator() {
  return (
    <ReservationsStack.Navigator
      screenOptions={SCREEN_OPTIONS}
    >
      <ReservationsStack.Screen
        name="Reservations"
        component={Reservations}
      />
    </ReservationsStack.Navigator>
  )
}

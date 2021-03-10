import * as React from "react"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"

// components
import { Screen, Text } from "components"

// styles
// import Styles from "./search.styles"

interface ScreenParams {

}

interface SearchScreenProps {
  navigation: BottomTabNavigationProp<any>
  route: {
    params: ScreenParams,
  }
}

export function Search(props: SearchScreenProps) {

  return <Screen preset="scroll" fullWidth>
    <Text preset="h2">
      Search
    </Text>
  </Screen>
}
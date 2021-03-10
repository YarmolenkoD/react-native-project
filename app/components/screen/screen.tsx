import * as React from "react"
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native"
import { useSafeArea } from "react-native-safe-area-context"
import { ScreenProps } from "./screen.props"
import { isNonScrolling, offsets, presets } from "./screen.presets"

const isIos = Platform.OS === "ios"


function ScreenWithoutScrolling(props: ScreenProps) {
  const insets = useSafeArea()
  const preset = presets.fixed
  const style = props.style || {}
  const statusStyle = props.statusStyle || {}
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }

  const fullWidth = props.fullWidth || false
  const fullWidthStyle = fullWidth ? presets.fullWidth : presets.notFullWidth

  return (
    <KeyboardAvoidingView
      style={[fullWidthStyle, preset.outer, preset.statusBar, backgroundStyle, statusStyle]}
      behavior={isIos ? "padding" : null}
      keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}
    >
      <View style={[insetStyle, preset.inner, style]}>{props.children}</View>
    </KeyboardAvoidingView>
  )
}

function ScreenWithScrolling(props: ScreenProps) {
  const insets = useSafeArea()
  const preset = presets.scroll
  const style = props.style || {}
  const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}
  const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top }

  const fullWidth = props.fullWidth || false
  const fullWidthStyle = fullWidth ? presets.fullWidth : presets.notFullWidth

  return (
    <KeyboardAvoidingView
      style={[fullWidthStyle, preset.outer, preset.statusBar, backgroundStyle]}
      behavior={isIos ? "padding" : null}
      keyboardVerticalOffset={offsets[props.keyboardOffset || "none"]}
    >
      <ScrollView
        style={[preset.outer, backgroundStyle]}
        contentContainerStyle={[insetStyle, preset.inner, style]}
        keyboardShouldPersistTaps="always"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export function Screen(props: ScreenProps) {
  if (isNonScrolling(props.preset)) {
    return <ScreenWithoutScrolling {...props} />
  } else {
    return <ScreenWithScrolling {...props} />
  }
}

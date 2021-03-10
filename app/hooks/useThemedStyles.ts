import { StyleProp } from "react-native"
import useColorScheme from './useColorScheme'
import { color } from "theme"
import { Theme } from "types"

export default function useThemedStyles (styles: (theme: Theme) => StyleProp<any>, scheme?: string): object {
  scheme = scheme || useColorScheme()

  return styles({ color: color[scheme] })
}

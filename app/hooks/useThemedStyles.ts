import { StyleProp } from "react-native"
import { color } from "theme"
import { Theme } from "types"
import { useColorScheme } from "./useColorScheme"

export function useThemedStyles (styles: (theme: Theme) => StyleProp<any>, scheme?: string): any {
  scheme = scheme || useColorScheme()

  return styles({ color: color[scheme] })
}

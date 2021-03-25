import { StyleProp } from "react-native"
import { color } from "theme"
import { Theme } from "types"
import { useColorScheme } from "./useColorScheme"
import { useSafeArea } from "react-native-safe-area-context"

export function useStyles (styles: (theme: Theme) => StyleProp<any>, scheme?: string): any {
  const insets = useSafeArea()
  scheme = scheme || useColorScheme()

  return styles({ color: color[scheme], insets })
}

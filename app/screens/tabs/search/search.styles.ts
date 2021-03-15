import { useThemedStyles } from "hooks"

export default useThemedStyles(({ color }) => ({
  filterContainer: {
    background: color.primary
  }
}))
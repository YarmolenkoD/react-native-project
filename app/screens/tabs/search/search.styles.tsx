import useThemedStyles from "../../../hooks/useThemedStyles"

export default useThemedStyles(({ color }) => ({
  filterContainer: {
    background: color.primary
  }
}))
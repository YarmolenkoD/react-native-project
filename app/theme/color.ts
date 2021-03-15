import { palette } from "./palette"
import { ColorTheme } from "types"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */

export const defaultTheme: string = 'light'

export const color = {
  light: {
    /**
     * The palette is available to use, but prefer using the name.
     */
    palette,
    /**
     * A helper for making something see-thru. Use sparingly as many layers of transparency
     * can cause older Android devices to slow down due to the excessive compositing required
     * by their under-powered GPUs.
     */
    transparent: "rgba(0, 0, 0, 0)",
    /**
     * The screen background.
     */
    background: palette.white,
    /**
     * The main tinting color.
     */
    primary: palette.summerSun,
    /**
     * The main tinting color, but darker.
     */
    primaryDarker: palette.darkSummerSun,
    /**
     * A subtle color used for borders and lines.
     */
    line: palette.grayLightest,
    /**
     * The default color of text in many components.
     */
    text: palette.grayDarkest,
    /**
     * The light color of text in many components.
     */
    lightText: palette.white,
    /**
     * Secondary information.
     */
    dim: palette.grayLight,
    /**
     * Error messages and icons.
     */
    error: palette.summerSun,

    /**
     * Storybook background for Text stories, or any stories where
     * the text color is color.text, which is white by default, and does not show
     * in Stories against the default white background
     */
    storybookDarkBg: palette.grayDarkest,

    /**
     * Storybook text color for stories that display Text components against the
     * white background
     */
    storybookTextColor: palette.grayDarkest,
  } as ColorTheme,
  dark: {
    /**
     * The palette is available to use, but prefer using the name.
     */
    palette,
    /**
     * A helper for making something see-thru. Use sparingly as many layers of transparency
     * can cause older Android devices to slow down due to the excessive compositing required
     * by their under-powered GPUs.
     */
    transparent: "rgba(0, 0, 0, 0)",
    /**
     * The screen background.
     */
    background: palette.white,
    /**
     * The main tinting color.
     */
    primary: palette.summerSun,
    /**
     * The main tinting color, but darker.
     */
    primaryDarker: palette.darkSummerSun,
    /**
     * A subtle color used for borders and lines.
     */
    line: palette.grayLightest,
    /**
     * The default color of text in many components.
     */
    text: palette.white,
    /**
     * The light color of text in many components.
     */
    lightText: palette.white,
    /**
     * Secondary information.
     */
    dim: palette.grayLight,
    /**
     * Error messages and icons.
     */
    error: palette.summerSun,

    /**
     * Storybook background for Text stories, or any stories where
     * the text color is color.text, which is white by default, and does not show
     * in Stories against the default white background
     */
    storybookDarkBg: palette.grayDarkest,

    /**
     * Storybook text color for stories that display Text components against the
     * white background
     */
    storybookTextColor: palette.grayDarkest,
  } as ColorTheme,
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.summerSun,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.darkSummerSun,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.grayLightest,
  /**
   * The default color of text in many components.
   */
  text: palette.grayDarkest,
  /**
   * Secondary information.
   */
  dim: palette.grayLight,
  /**
   * Error messages and icons.
   */
  error: palette.summerSun,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.grayDarkest,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.grayDarkest,
}

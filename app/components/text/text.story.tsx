import * as React from 'react'
import { View, ViewStyle } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import { color } from 'theme'
import { Text } from './text'

declare let module

const VIEW_STYLE = {
  flex: 1,
  backgroundColor: color.storybookDarkBg,
}
const viewStyleArray: ViewStyle[] = [VIEW_STYLE, { backgroundColor: '#7fff00' }]

storiesOf('Text', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="default" usage="Used for normal body text.">
        <View style={VIEW_STYLE}>
          <Text>Hello!</Text>
          <Text style={{ paddingTop: 10 }}>
            Check out{'\n'}
            my{'\n'}
            line height
          </Text>
          <Text style={{ paddingTop: 10 }}>The quick brown fox jumped over the slow lazy dog.</Text>
          <Text>$123,456,789.00</Text>
        </View>
      </UseCase>
    </Story>
  ))
  .add('Passing Content', () => (
    <Story>
      <UseCase
        text="text"
        usage="Used when you want to pass a value but don't want to open a child."
      >
        <View style={VIEW_STYLE}>
          <Text text="Heyo!"/>
        </View>
      </UseCase>
      <UseCase text="tx" usage="Used for looking up i18n keys.">
        <View style={VIEW_STYLE}>
          <Text tx="common.ok"/>
          <Text tx="common.cancel"/>
        </View>
      </UseCase>
      <UseCase
        text="children"
        usage="Used like you would normally use a React Native <Text> component."
      >
        <View style={VIEW_STYLE}>
          <Text>Passing strings as children.</Text>
        </View>
      </UseCase>
      <UseCase text="nested children" usage="You can embed them and change styles too.">
        <View style={VIEW_STYLE}>
          <Text>
            {' '}
            Hello <Text preset="h4">bolded</Text> World.
          </Text>
        </View>
      </UseCase>
    </Story>
  ))
  .add('Styling', () => (
    <Story>
      <UseCase text="Style array" usage="Text with style array">
        <View style={viewStyleArray}>
          <Text>
            {' '}
            Hello <Text preset="h4">bolded</Text> World.
          </Text>
        </View>
      </UseCase>
    </Story>
  ))

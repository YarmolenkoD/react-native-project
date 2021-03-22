import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { Avatar } from "./avatar"
import { images } from 'assets'

declare let module

storiesOf("Avatar", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Names", () => (
    <Story>
      <UseCase text="Large" usage="The large avatar">
        <Avatar size="large" image={images.avatarPlaceholder} />
      </UseCase>
      <UseCase text="Medium" usage="The medium avatar">
        <Avatar size="medium" image={images.avatarPlaceholder} />
      </UseCase>
      <UseCase text="Small" usage="The small avatar">
        <Avatar size="small" image={images.avatarPlaceholder} />
      </UseCase>
    </Story>
  ))

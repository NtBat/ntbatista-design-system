import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@ntbatista-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Test element</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
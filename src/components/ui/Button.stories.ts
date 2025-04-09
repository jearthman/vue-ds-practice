import type { Meta, StoryObj } from '@storybook/vue3';

import DsButton from './dsButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof DsButton> = {
  title: 'Button',
  component: DsButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      }
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      }   
    }
  },
} satisfies Meta<typeof DsButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
 export const Primary: Story = {
  render: (args) => ({
    components: { DsButton },
    setup() {
      return { args };
    },
    template: '<DsButton v-bind="args">Button</DsButton>',
  }),
  args: {
    variant: "primary",
    size: "medium",
  },
};

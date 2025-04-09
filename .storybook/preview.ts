import type { Preview } from '@storybook/vue3'
// import Tailwind from 'tailwindcss';
import '../src/style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
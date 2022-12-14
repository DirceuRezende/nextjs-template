import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import { store } from '@/store';

import Home from '.';

export default {
  title: 'Home',
  component: Home,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const FirstStory = Template.bind({});

FirstStory.args = {};

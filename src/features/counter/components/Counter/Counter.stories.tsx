import { store } from '@/store';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';

import Counter from '.';

export default {
  title: 'Counter',
  component: Counter,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => (
  <div>
    <Counter />
  </div>
);

export const FirstStory = Template.bind({});

FirstStory.args = {};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from '.';

export default {
  title: 'Counter',
  component: Counter
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const FirstStory = Template.bind({});

FirstStory.args = {};

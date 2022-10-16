import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  title: 'title basic',
  description: 'description basic'
};

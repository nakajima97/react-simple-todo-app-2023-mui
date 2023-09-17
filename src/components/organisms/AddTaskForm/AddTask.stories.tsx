import type { Meta, StoryObj } from '@storybook/react';
import AddTaskForm from '.';

const meta = {
  title: 'component/organisms/AddTaskForm',
  component: AddTaskForm,
} satisfies Meta<typeof AddTaskForm>;
export default meta;

type Story = StoryObj<typeof AddTaskForm>;

export const Default: Story = {
  args: {},
};

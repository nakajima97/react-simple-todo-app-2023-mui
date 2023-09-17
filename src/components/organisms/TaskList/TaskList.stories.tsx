import type { Meta, StoryObj } from '@storybook/react';
import TaskList from './TaskList';

const meta = {
  title: 'component/organisms/TaskList',
  component: TaskList,
} satisfies Meta<typeof TaskList>;
export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {
    tasks: ['タスク1', 'タスク2', 'タスク3'],
  },
};

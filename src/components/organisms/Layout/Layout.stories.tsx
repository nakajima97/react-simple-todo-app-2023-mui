import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta = {
  title: 'component/organisms/Header',
  component: Layout,
} satisfies Meta<typeof Layout>;
export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {};

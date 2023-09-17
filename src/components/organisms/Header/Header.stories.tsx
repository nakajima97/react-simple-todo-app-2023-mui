import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta = {
  title: 'component/organisms/Header',
  component: Header,
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

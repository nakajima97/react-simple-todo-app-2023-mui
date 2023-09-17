import TaskList from '.';

export default {
  title: 'component/organisms/TaskList',
  component: TaskList,
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: ['タスク1', 'タスク2', 'タスク3'],
};

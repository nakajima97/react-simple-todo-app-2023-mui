import { Container } from '@mui/material';
import AddTaskForm from '../../ecosystems/AddTaskForm/AddTaskForm';
import Layout from '../../organisms/Layout/Layout';
import TaskList from '../../organisms/TaskList/TaskList';

type Props = {
  handleAddTask: (task: string) => void;
  tasks: string[];
  handleFinishTask: (key: number) => void;
};

const TodoBoard = ({
  handleAddTask,
  handleFinishTask,
  tasks = [],
}: Props): JSX.Element => {
  return (
    <Container sx={{ display: 'grid', gap: '10px' }}>
      <Layout />
      <AddTaskForm handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleFinishTask={handleFinishTask} />
    </Container>
  );
};

export default TodoBoard;

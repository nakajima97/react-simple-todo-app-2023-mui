import { useState } from 'react';
import { Container } from '@mui/material';
import AddTaskForm from './components/organisms/AddTaskForm';
import Header from './components/organisms/Header';
import TaskList from './components/organisms/TaskList';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<string[]>(['aaa', 'bbb', 'ccc']);

  return (
    <Container sx={{ display: 'grid', gap: '10px' }}>
      <Header />
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default App;

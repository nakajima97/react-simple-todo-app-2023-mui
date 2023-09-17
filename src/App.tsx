import { useState } from 'react';
import { Container } from '@mui/material';
import AddTaskForm from './components/organisms/AddTaskForm/AddTaskForm';
import Header from './components/organisms/Header/Header';
import TaskList from './components/organisms/TaskList/TaskList';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <Container sx={{ display: 'grid', gap: '10px' }}>
      <Header />
      <AddTaskForm handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default App;

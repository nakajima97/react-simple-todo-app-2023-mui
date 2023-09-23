import { useState } from 'react';
import { Container } from '@mui/material';
import AddTaskForm from '../../organisms/AddTaskForm/AddTaskForm';
import Header from '../../organisms/Header/Header';
import TaskList from '../../organisms/TaskList/TaskList';

const TodoBoard = (): JSX.Element => {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const handleFinishTask = (key: number) => {
    const newTasks = tasks.filter((_, index) => index !== key);
    setTasks(newTasks);
  };

  return (
    <Container sx={{ display: 'grid', gap: '10px' }}>
      <Header />
      <AddTaskForm handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleFinishTask={handleFinishTask} />
    </Container>
  );
};

export default TodoBoard;

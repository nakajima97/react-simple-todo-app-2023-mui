import { useEffect, useState } from 'react';
import TaskBoardTemplate from '../../templates/TasksBoradTemplate/TaskBoardTemplate';

const TodoBoard = (): JSX.Element => {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const localStorageValue = localStorage.getItem('tasks') ?? '[]';
    const tasks = JSON.parse(localStorageValue) as string[];
    setTasks(tasks);
  }, []);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
  };

  const handleFinishTask = (key: number) => {
    const localStorageValue = localStorage.getItem('finishTasks');
    const finishTasks = JSON.parse(localStorageValue ?? '[]') as string[];
    localStorage.setItem(
      'finishTasks',
      JSON.stringify([...finishTasks, tasks[key]])
    );
    const newTasks = tasks.filter((_, index) => index !== key);
    setTasks(newTasks);
  };

  return (
    <TaskBoardTemplate
      tasks={tasks}
      handleAddTask={handleAddTask}
      handleFinishTask={handleFinishTask}
    />
  );
};

export default TodoBoard;

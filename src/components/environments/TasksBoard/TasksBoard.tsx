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
    // 未完了タスクから削除
    const localStorageTasksValueString = localStorage.getItem('tasks') ?? '[]';
    const localStorageTasksValue = JSON.parse(
      localStorageTasksValueString
    ) as string[];
    const localStorageNewTasksValue = localStorageTasksValue.filter(
      (task) => task !== tasks[key]
    );
    localStorage.setItem('tasks', JSON.stringify(localStorageNewTasksValue));

    // 完了済みタスク用のlocalStorageに保存
    const localStorageValue = localStorage.getItem('finishTasks');
    const finishTasks = JSON.parse(localStorageValue ?? '[]') as string[];
    localStorage.setItem(
      'finishTasks',
      JSON.stringify([...finishTasks, tasks[key]])
    );

    // stateで持っているタスクから完了済みタスクを削除する
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

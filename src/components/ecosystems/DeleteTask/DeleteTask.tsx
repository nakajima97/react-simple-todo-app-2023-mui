import PresentationalDeleteTask from '../../organisms/DeleteTask/DeleteTask';

const DeleteTask = (): JSX.Element => {
  const handleDeleteTask = () => {
    const confirm = window.confirm('本当にすべてのタスクを削除しますか？');
    if (!confirm) {
      return true;
    }

    localStorage.removeItem('finishTasks');
    localStorage.removeItem('tasks');

    window.alert('タスクを削除しました。');
  };

  return <PresentationalDeleteTask handleDeleteTask={handleDeleteTask} />;
};

export default DeleteTask;

import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteTaskButton = (): JSX.Element => {
  const handleDeleteTask = () => {
    const confirm = window.confirm('本当にすべてのタスクを削除しますか？');
    if (!confirm) {
      return true;
    }

    localStorage.removeItem('finishTasks');

    window.alert('タスクを削除しました。');
  };

  return (
    <>
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => handleDeleteTask()}
      >
        データ削除
      </Button>
    </>
  );
};

export default DeleteTaskButton;

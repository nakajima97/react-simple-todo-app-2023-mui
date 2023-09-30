import { Box, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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

  return (
    <>
      <Box>
        <Typography variant="h3">データ削除</Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => handleDeleteTask()}
        >
          データ削除
        </Button>
        <Typography>登録しているタスクの情報をすべて削除します。</Typography>
        <Typography>完了済みタスクも削除されます。</Typography>
      </Box>
    </>
  );
};

export default DeleteTask;

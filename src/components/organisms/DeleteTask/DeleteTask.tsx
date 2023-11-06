import { Box, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
  handleDeleteTask: () => void;
};

const DeleteTask = ({ handleDeleteTask }: Props): JSX.Element => {
  return (
    <>
      <Box>
        <Typography variant="h3">データ削除</Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => {
            handleDeleteTask();
          }}
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

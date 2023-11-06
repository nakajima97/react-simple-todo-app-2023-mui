import { Box, Button, TextField } from '@mui/material';

type Props = {
  onClick: (text: string) => void;
  text: string;
  setText: (text: string) => void;
};

const AddTaskForm = ({ onClick, text, setText }: Props): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <TextField
        label="追加するタスクを入力してください"
        variant="standard"
        content="center"
        sx={{ flexGrow: 1 }}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          onClick(text);
        }}
      >
        タスクを追加する
      </Button>
    </Box>
  );
};

export default AddTaskForm;

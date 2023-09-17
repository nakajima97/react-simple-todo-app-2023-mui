import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

type Props = {
  handleAddTask: (task: string) => void;
};

const AddTaskForm = ({ handleAddTask }: Props): JSX.Element => {
  const [text, setText] = useState('');

  const onClick = (text: string) => {
    handleAddTask(text);
    setText('');
  };

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

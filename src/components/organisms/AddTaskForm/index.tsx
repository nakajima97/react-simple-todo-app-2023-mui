import { Box, Button, TextField } from '@mui/material';

const AddTaskForm = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <TextField
        label="追加するタスクを入力してください"
        variant="standard"
        content="center"
        sx={{ flexGrow: 1 }}
      />
      <Button variant="contained">タスクを追加する</Button>
    </Box>
  );
};

export default AddTaskForm;

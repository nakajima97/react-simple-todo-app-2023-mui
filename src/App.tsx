import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Typography,
  Toolbar,
  TextField,
} from '@mui/material';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<string[]>(['aaa', 'bbb', 'ccc']);

  const renderTodoList = () => {
    if (tasks.length === 0) {
      return <Typography>タスクが0件です。</Typography>;
    }

    return tasks.map((task, index) => <Box key={index}>{task}</Box>);
  };

  return (
    <Container sx={{ display: 'grid', gap: '10px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <TextField
          label="追加するタスクを入力してください"
          variant="standard"
          sx={{ flexGrow: 1 }}
        />
        <Button variant="contained">タスクを追加する</Button>
      </Box>
      <Box>
        <Box>
          <Typography variant="h4">タスク一覧</Typography>
        </Box>
        <Box>{renderTodoList()}</Box>
      </Box>
    </Container>
  );
};

export default App;

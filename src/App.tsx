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
import Header from './components/organisms/Header';

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<string[]>(['aaa', 'bbb', 'ccc']);

  const renderTodoList = () => {
    if (tasks.length === 0) {
      return <Typography>タスクが0件です。</Typography>;
    }

    return tasks.map((task, index) => (
      <Box
        key={index}
        sx={{ display: 'flex', gap: '10px', justifyContent: 'center' }}
      >
        <Typography align="left" sx={{ flexGrow: 1 }}>
          {task}
        </Typography>
        <Button variant="contained">完了</Button>
      </Box>
    ));
  };

  return (
    <Container sx={{ display: 'grid', gap: '10px' }}>
      <Header />

      <Box>
        <Box>
          <Typography variant="h4">タスク一覧</Typography>
        </Box>
        <Box sx={{ display: 'grid', gap: '10px' }}>{renderTodoList()}</Box>
      </Box>
    </Container>
  );
};

export default App;

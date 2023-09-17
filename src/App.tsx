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
      <Box>タスク一覧</Box>
    </Container>
  );
};

export default App;

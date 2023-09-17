import { AppBar, Box, Container, Typography, Toolbar } from '@mui/material';

const App = (): JSX.Element => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>タスク追加欄</Box>
      <Box>タスク一覧</Box>
    </Container>
  );
};

export default App;

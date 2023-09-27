import { Container, Typography } from '@mui/material';
import Layout from '../../organisms/Layout/Layout';

const FinishTodoBoard = (): JSX.Element => {
  const localStorageValue = localStorage.getItem('finishTasks');
  const finishTasks = JSON.parse(localStorageValue ?? '[]') as string[];

  return (
    <Container sx={{ display: 'grid', gap: '10px' }}>
      <Layout />
      <ul>
        {finishTasks.map((task, key) => (
          <li key={key}>{task}</li>
        ))}
        {finishTasks.length === 0 && (
          <Typography>完了済みタスクはないです。</Typography>
        )}
      </ul>
    </Container>
  );
};

export default FinishTodoBoard;

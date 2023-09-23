import { Container } from '@mui/material';
import Header from '../../organisms/Header/Header';

const FinishTodoBoard = (): JSX.Element => (
  <Container sx={{ display: 'grid', gap: '10px' }}>
    <Header />
  </Container>
);

export default FinishTodoBoard;

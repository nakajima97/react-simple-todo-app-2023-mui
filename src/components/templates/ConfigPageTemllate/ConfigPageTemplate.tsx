import { Container } from '@mui/material';
import DeleteTask from '../../organisms/DeleteTask/DeleteTask';
import Layout from '../../organisms/Layout/Layout';

const ConfigPage = (): JSX.Element => {
  return (
    <Container>
      <Layout />
      <DeleteTask />
    </Container>
  );
};

export default ConfigPage;

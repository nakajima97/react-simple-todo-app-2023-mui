import { Box, Container, Typography } from '@mui/material';
import DeleteTaskButton from '../../organisms/DeleteTaskButton/DeleteTaskButton';
import Layout from '../../organisms/Layout/Layout';

const ConfigPage = (): JSX.Element => {
  return (
    <Container>
      <Layout />
      <Box>
        <Typography variant="h3">データ削除</Typography>
        <DeleteTaskButton />
        <Typography>登録しているタスクの情報をすべて削除します。</Typography>
        <Typography>完了済みタスクも削除されます。</Typography>
      </Box>
    </Container>
  );
};

export default ConfigPage;

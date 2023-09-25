import { Box, Container, Typography } from '@mui/material';
import DeleteTaskButton from '../../organisms/DeleteTaskButton/DeleteTaskButton';
import Header from '../../organisms/Header/Header';

const ConfigPage = (): JSX.Element => {
  return (
    <Container>
      <Header />
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

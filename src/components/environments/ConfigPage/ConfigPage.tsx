import { Box, Button, Container, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../../organisms/Header/Header';

const ConfigPage = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Box>
        <Typography variant="h3">データ削除</Typography>
        <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
          データ削除
        </Button>
        <Typography>登録しているタスクの情報をすべて削除します。</Typography>
        <Typography>完了済みタスクも削除されます。</Typography>
      </Box>
    </Container>
  );
};

export default ConfigPage;

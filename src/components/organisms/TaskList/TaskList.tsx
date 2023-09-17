import { Box, Typography, Button } from '@mui/material';

type Props = {
  tasks: string[];
};

const TaskList = ({ tasks }: Props): JSX.Element => {
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
    <Box>
      <Box>
        <Typography variant="h4">タスク一覧</Typography>
      </Box>
      <Box sx={{ display: 'grid', gap: '10px' }}>{renderTodoList()}</Box>
    </Box>
  );
};

export default TaskList;

import { Routes, Route } from 'react-router-dom';
import FinishTasksBoard from '../components/environments/FinishTasksBoard/FinishTasksBoard';
import TasksBoard from '../components/environments/TasksBoard/TasksBoard';

const IndexRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<TasksBoard />} />
    <Route path="finish" element={<FinishTasksBoard />} />
  </Routes>
);

export default IndexRoutes;

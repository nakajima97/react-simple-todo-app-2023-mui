import { Routes, Route } from 'react-router-dom';
import ConfigPage from '../components/environments/ConfigPage/ConfigPage';
import FinishTasksBoard from '../components/environments/FinishTasksBoard/FinishTasksBoard';
import TasksBoard from '../components/environments/TasksBoard/TasksBoard';

const IndexRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<TasksBoard />} />
    <Route path="finish" element={<FinishTasksBoard />} />
    <Route path="config" element={<ConfigPage />} />
  </Routes>
);

export default IndexRoutes;

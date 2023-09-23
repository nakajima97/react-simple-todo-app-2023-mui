import { Routes, Route } from 'react-router-dom';
import TodoBoard from '../components/environments/TodoBoard/TodoBoard';

const IndexRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<TodoBoard />} />
  </Routes>
);

export default IndexRoutes;

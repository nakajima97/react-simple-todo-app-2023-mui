import { Routes, Route } from 'react-router-dom';
import FinishTodoBoard from '../components/environments/FinishTodoBoard/FinishTodoBoard';
import TodoBoard from '../components/environments/TodoBoard/TodoBoard';

const IndexRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<TodoBoard />} />
    <Route path="finish" element={<FinishTodoBoard />} />
  </Routes>
);

export default IndexRoutes;

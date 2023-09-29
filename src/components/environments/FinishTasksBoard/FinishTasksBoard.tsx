import FinishTaskTemplate from '../../templates/FinishTaskBoardTemplate/FinishTaskBoardTemplate';

const FinishTodoBoard = (): JSX.Element => {
  const localStorageValue = localStorage.getItem('finishTasks');
  const finishTasks = JSON.parse(localStorageValue ?? '[]') as string[];

  return <FinishTaskTemplate finishTasks={finishTasks} />;
};

export default FinishTodoBoard;

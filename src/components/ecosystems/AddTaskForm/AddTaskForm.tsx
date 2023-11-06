import { useState } from 'react';
import PresentationalAddTaskForm from '../../organisms/AddTaskForm/AddTaskForm';

type Props = {
  handleAddTask: (task: string) => void;
};

const AddTaskForm = ({ handleAddTask }: Props): JSX.Element => {
  const [text, setText] = useState('');

  const onClick = (text: string) => {
    handleAddTask(text);
    setText('');
  };

  return (
    <PresentationalAddTaskForm
      onClick={onClick}
      setText={(value: string) => {
        setText(value);
      }}
      text={text}
    />
  );
};

export default AddTaskForm;

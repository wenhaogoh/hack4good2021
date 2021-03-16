import React, {useState} from 'react';
import './Layout.css';
import QuestionSet from '../QuestionSet/QuestionSet';

interface Props {
  questionIds: number[];
}

const Layout = ({questionIds}: Props) => {
  const questionSetCount = questionIds.length;
  const [index, setIndex] = useState<number>(0);

  const increamentIndex = () => {
    setIndex(index + 1 >= questionSetCount ? 0 : index + 1);
  };

  const nextQuestion = () => {
    increamentIndex();
  };

  return (
    <div className="Layout">
      <QuestionSet id={questionIds[index]} nextQuestion={nextQuestion} />
    </div>
  );
};

export default Layout;

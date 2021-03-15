import React, {useState} from 'react';
import './Layout.css';
import QuestionSet from '../QuestionSet/QuestionSet';
import {questionSets} from '../../data/data';

const Layout = () => {
  const questionSetCount = questionSets.length;
  const [index, setIndex] = useState<number>(0);

  const increamentIndex = () => {
    setIndex(index + 1 >= questionSetCount ? 0 : index + 1);
  };

  const nextQuestion = () => {
    increamentIndex();
  };

  return (
    <div className="Layout">
      <QuestionSet
        questionSet={questionSets[index]}
        nextQuestion={nextQuestion}
      />
    </div>
  );
};

export default Layout;

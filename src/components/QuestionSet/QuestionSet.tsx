import React, {useState} from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import {IQuestionSet} from '../../data/data';
import './QuestionSet.css';
import {IDelayedAction, executeDelayedActions} from '../../action/action';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';

interface Props {
  questionSet: IQuestionSet;
  nextQuestion: () => void;
}

const QuestionSet = ({questionSet, nextQuestion}: Props) => {
  const [isAnswered, setisAnswered] = useState(false);
  const [show, setShow] = useState(true);

  const setIsAnsweredToTrue = () => {
    setisAnswered(true);
  };

  const setIsAnsweredToFalse = () => {
    setisAnswered(false);
  };

  const hideQuestionSetAction = () => {
    setShow(false);
  };

  const showQuestionSetAction = () => {
    setIsAnsweredToFalse();
    nextQuestion();
    setShow(true);
  };

  const delayedActions: IDelayedAction[] = [
    {action: hideQuestionSetAction, delay: 200},
    {action: showQuestionSetAction},
  ];

  const nextQuestionClickHandler = () => {
    setShow(false);
    executeDelayedActions(delayedActions);
  };

  return (
    <>
      <div className="QuestionSet" style={show ? {opacity: 1} : undefined}>
        <Question question={questionSet.question} />
        <Answer
          isAnswered={isAnswered}
          choices={questionSet.choices}
          setIsAnsweredToTrue={setIsAnsweredToTrue}
        />
        {isAnswered ? null : (
          <div onClick={nextQuestionClickHandler} className="Skip">
            skip question
          </div>
        )}
        {isAnswered ? (
          <div className="Icons">
            <div className="Icon">
              <AiFillFacebook size={40} />
            </div>
            <div className="Icon">
              <AiFillInstagram size={40} />
            </div>
            <div className="Icon">
              <FaTwitter size={35} />
            </div>
          </div>
        ) : null}
      </div>
      <div
        className="Next"
        style={isAnswered ? undefined : {visibility: 'hidden'}}
        onClick={nextQuestionClickHandler}
      />
    </>
  );
};

export default QuestionSet;

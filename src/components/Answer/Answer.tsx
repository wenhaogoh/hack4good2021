import {IChoice} from '../../data/data';
import Button from '../Button/Button';
import './Answer.css';

interface Props {
  setIsAnsweredToTrue: () => void;
  choices: IChoice[];
  isAnswered: boolean;
}

const Answer = ({isAnswered, setIsAnsweredToTrue, choices}: Props) => {
  const totalCount = choices
    .map(choice => choice.count)
    .reduce((acc, curr) => acc + curr);
  return (
    <div className="Answer">
      {choices.map((choice, index) => (
        <Button
          key={index}
          show
          choice={choice}
          totalCount={totalCount}
          setIsAnsweredToTrue={setIsAnsweredToTrue}
          showPercentage={isAnswered}
        />
      ))}
    </div>
  );
};

export default Answer;

import { IChoice } from "../../data/data";
import Button from "../Button/Button";
import "./Answer.css";

interface Props {
  setIsAnsweredToTrue: () => void;
  choices: IChoice[];
  isAnswered: boolean;
}

const Answer = ({
  isAnswered: showPercentage,
  setIsAnsweredToTrue,
  choices,
}: Props) => {
  const onClickHandler = () => {
    setIsAnsweredToTrue();
  };

  return (
    <div className="Answer">
      {choices.map((choice, index) => (
        <Button
          key={index}
          show
          label={choice.label}
          percentage={choice.percentage}
          onClickHandler={onClickHandler}
          showPercentage={showPercentage}
        />
      ))}
    </div>
  );
};

export default Answer;

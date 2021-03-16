export interface IQuestion {
  id: number;
  name: string;
  Choices: IChoice[];
}

export interface IChoice {
  id: number;
  name: string;
  count: number;
  questionId: number;
}

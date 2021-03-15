export interface IQuestionSet {
  question?: string;
  choices: IChoice[];
}

export interface IChoice {
  label: string;
  percentage: number;
}

export const questionSets: IQuestionSet[] = [
  {
    question: "Would you speak up if a relative raises a homophobic comment?",
    choices: [
      { label: "Yes", percentage: 64 },
      { label: "No", percentage: 36 },
    ],
  },
  {
    question: "Do you feel safe when you go out alone?",
    choices: [
      { label: "No", percentage: 10 },
      { label: "Yes", percentage: 90 },
    ],
  },
  {
    question: "How old are you?",
    choices: [
      { label: "1 to 20", percentage: 23 },
      { label: "21 to 30", percentage: 37 },
      { label: "31 to 40", percentage: 21 },
      { label: "41 to 50", percentage: 14 },
      { label: "51 and above", percentage: 5 },
    ],
  },
  {
    question: "Chicken Rice",
    choices: [
      { label: "Roasted", percentage: 20 },
      { label: "Steamed", percentage: 80 },
    ],
  },
  {
    question: undefined,
    choices: [
      { label: "East", percentage: 49 },
      { label: "West", percentage: 51 },
    ],
  },
];

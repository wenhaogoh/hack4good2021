export interface IQuestionSet {
  question?: string;
  choices: string[];
}

export const questionSets = [
  {
    question: 'Would you speak up if a relative raises a homophobic comment?',
    choices: ['Yes', 'No'],
  },
  {
    question: 'Do you feel safe when you go out alone?',
    choices: ['Yes', 'No'],
  },
  {
    question: 'How old are you?',
    choices: ['1 to 10', '11 to 20', '21 to 30', '31 to 40', '41 to 50'],
  },
  {
    question: 'Chicken Rice',
    choices: ['Roasted', 'Steamed'],
  },
  {
    question: undefined,
    choices: ['East', 'West'],
  },
];

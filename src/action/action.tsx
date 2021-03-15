export interface IDelayedAction {
  action: () => void;
  delay?: number;
}

export const executeDelayedActions = (delayedActions: IDelayedAction[]) => {
  const delayedAction = delayedActions.shift();

  if (!delayedAction) {
    return;
  }

  delayedAction.action();

  if (delayedAction.delay) {
    setTimeout(() => {
      executeDelayedActions(delayedActions);
    }, delayedAction.delay);
  } else {
    executeDelayedActions(delayedActions);
  }
};

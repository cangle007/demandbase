export default function mainReducer(
  currentState = {
    taskDetails: [],
  },
  action
) {
  switch (action.type) {
    case 'UPDATE_TASK':
      return {
        ...currentState,
        taskDetails: [...currentState.taskDetails, action.taskDetails],
      };

    default:
      return currentState;
  }
}

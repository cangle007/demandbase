import { useSelector } from 'react-redux';

const TasksList = () => {
  //const { taskDetails } = useSelector((state) => state);
  const taskDetails = useSelector((state) => state.taskDetails) || [];

  return (
    <div>
      <div>Task Lists:</div>

      {taskDetails &&
        taskDetails.map((obj, i) => {
          return (
            <div key={i}>
              <div>{'id: ' + obj.id}</div>
              <div>{'name: ' + obj.name}</div>
              <div>{'time: ' + obj.elapsedTime}</div>
            </div>
          );
        })}
    </div>
  );
};

export default TasksList;

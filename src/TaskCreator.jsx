import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TasksList from './TasksList';

const updateProcess = (obj) => {
  return async (dispatch) => {
    dispatch({ type: 'UPDATE_TASK', taskDetails: obj });
  };
};

const TaskCreator = () => {
  const dispatch = useDispatch();

  const [time, setTime] = useState(0);
  const [generatedId, setId] = useState(0);
  const intervalRef = useRef(null);
  const taskRef = useRef(null);
  const timeRef = useRef(null);

  const startTimer = () => {
    const timeInputByUser = Number(timeRef.current.value) || 0;
    setTime(timeInputByUser);

    intervalRef.current = setInterval(() => {
      setTime((prev) => (prev += 1));
    }, 1000);
  };

  const stopTimer = () => {
    const inputValue = taskRef.current.value;

    // dont push to redux if time = 0
    if (time === 0) {
      return;
    }

    setId((prev) => (prev += 1));

    const taskDetails = {
      id: generatedId,
      name: inputValue || 'forgotName',
      elapsedTime: time,
    };

    setTime(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    dispatch(updateProcess(taskDetails));

    console.log('taskDetails--', taskDetails);
  };

  const stopTimeOnFocus = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <div id='taskName'>
        <input type='text' ref={taskRef} />
        <label>Task Name</label>
      </div>

      <div id='taskField'>
        <input
          ref={timeRef}
          onFocus={stopTimeOnFocus}
          onBlur={startTimer}
          type='number'
        />
        <label>Time Elapased</label>
      </div>

      <button id='start' onClick={startTimer}>
        START
      </button>

      <button id='stop' onClick={stopTimer}>
        STOP
      </button>

      <div>Time Field:</div>
      <span>{time}</span>

      <p>Result from Redux: </p>
      <TasksList />
    </div>
  );
};

export default TaskCreator;

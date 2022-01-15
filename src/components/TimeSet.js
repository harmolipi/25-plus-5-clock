import { useState } from 'react';

const TimeSet = ({ isWork }) => {
  const workSettings = {
    title: 'Work',
    labelId: 'session-label',
    containerId: 'work',
    selectorId: 'work-selector',
    decrementId: 'session-decrement',
    incrementId: 'session-increment',
    lengthId: 'session-length',
    defaultLength: 25,
  };

  const breakSettings = {
    title: 'Break',
    labelId: 'break-label',
    containerId: 'break',
    selectorId: 'break-selector',
    decrementId: 'break-decrement',
    incrementId: 'break-increment',
    lengthId: 'break-length',
    defaultLength: 5,
  };

  const selectorSettings = isWork ? workSettings : breakSettings;
  const [time, setTime] = useState(selectorSettings.defaultLength);

  const decrement = () => {
    if (time > 1) {
      setTime((prevTime) => prevTime - 1);
    }
  };

  const increment = () => {
    if (time < 60) {
      setTime((prevTime) => prevTime + 1);
    }
  };

  return (
    <div
      id={selectorSettings.containerId}
      className="w-5/12 border-2 border-solid rounded"
    >
      <h2 id={selectorSettings.labelId} className="text-center text-xl">
        {selectorSettings.title}
      </h2>
      <div
        id={selectorSettings.selectorId}
        className="mx-auto my-2 flex flex-row justify-between divide-x"
      >
        <div className="px-2 basis-full">
          <button
            id={selectorSettings.decrementId}
            className="text-center py-4 w-full hover:bg-gray-200 rounded"
            onClick={decrement}
          >
            v
          </button>
        </div>
        <span
          id={selectorSettings.lengthId}
          className="font-mono basis-full text-center text-4xl px-2 py-3"
        >
          {time}
        </span>
        <div className="px-2 basis-full">
          <button
            id={selectorSettings.incrementId}
            className="text-center py-4 w-full hover:bg-gray-200 rounded"
            onClick={increment}
          >
            ^
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeSet;

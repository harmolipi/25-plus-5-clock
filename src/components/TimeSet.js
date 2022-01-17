import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const TimeSet = ({ isWork, time, increment, decrement }) => {
  const workSettings = {
    title: 'Work',
    labelId: 'session-label',
    containerId: 'work',
    selectorId: 'work-selector',
    decrementId: 'session-decrement',
    incrementId: 'session-increment',
    lengthId: 'session-length',
    defaultLength: 1500,
  };

  const breakSettings = {
    title: 'Break',
    labelId: 'break-label',
    containerId: 'break',
    selectorId: 'break-selector',
    decrementId: 'break-decrement',
    incrementId: 'break-increment',
    lengthId: 'break-length',
    defaultLength: 300,
  };

  const selectorSettings = isWork ? workSettings : breakSettings;

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
            className="text-center text-2xl py-4 w-full hover:bg-gray-200 rounded"
            onClick={() => decrement(time, isWork)}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
        <span
          id={selectorSettings.lengthId}
          className="font-mono basis-full text-center text-4xl px-2 py-3"
        >
          {time / 60}
        </span>
        <div className="px-2 basis-full">
          <button
            id={selectorSettings.incrementId}
            className="text-center text-2xl py-4 w-full hover:bg-gray-200 rounded"
            onClick={() => increment(time, isWork)}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeSet;

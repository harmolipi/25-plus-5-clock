const Timer = ({ time }) => {
  return (
    <div
      id="timer"
      className="mx-auto p-2 w-2/6 border-2 border-solid rounded divide-y"
    >
      <h2 id="timer-label" className="text-center pb-2 text-3xl text-blue-500">
        Work
      </h2>
      <p
        id="time-left"
        className="text-center text-5xl font-bold font-mono py-8"
      >
        {time}
      </p>
      <div
        id="timer-controls"
        className="mx-auto flex flex-row justify-around pt-2 divide-x"
      >
        <div className="w-full px-2">
          <button
            id="start_stop"
            className="w-full py-2 hover:bg-gray-200 text-gray-800 font-bold rounded"
          >
            Start
          </button>
        </div>
        <div className="w-full px-2">
          <button
            id="reset"
            className="w-full py-2 hover:bg-gray-200 text-gray-800 font-bold rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

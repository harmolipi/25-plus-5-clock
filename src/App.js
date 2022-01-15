import TimeSet from './components/TimeSet';

const App = () => {
  return (
    <div className="App container mx-auto my-9">
      <h1 className="text-5xl font-bold text-center text-slate-600">25plus5</h1>
      <p className="w-72 mx-auto my-7 text-center">
        Use the controls below to help set your work into short intervals,
        separated by shorter breaks to keep you efficient (
        <a
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
          rel="noreferrer"
          className="text-red-700 underline"
        >
          Pomodoro Technique
        </a>
        ).
      </p>
      <div
        id="time-selectors"
        className="flex flex-row flex-wrap justify-between w-7/12 mx-auto my-12"
      >
        <TimeSet isWork={true} />
        <TimeSet isWork={false} />
      </div>
      <div
        id="timer"
        className="mx-auto p-2 w-2/6 border-2 border-solid rounded divide-y"
      >
        <h2
          id="timer-label"
          className="text-center pb-2 text-3xl text-blue-500"
        >
          Work
        </h2>
        <p
          id="time-left"
          className="text-center text-5xl font-bold font-mono py-8"
        >
          25:00
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
    </div>
  );
};

export default App;

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
        <div id="work" className="w-5/12 border-2 border-solid rounded">
          <h2 id="session-label" className="text-center text-xl">
            Work
          </h2>
          <div
            id="work-selector"
            className="mx-auto my-2 flex flex-row justify-between divide-x"
          >
            <div className="px-2 basis-full">
              <div
                id="session-decrement"
                className="text-center py-4 w-full hover:bg-gray-200 rounded"
              >
                v
              </div>
            </div>
            <span
              id="session-length"
              className="font-mono basis-full text-center text-4xl px-2 py-3"
            >
              25
            </span>
            <div className="px-2 basis-full">
              <div
                id="session-decrement"
                className="text-center py-4 w-full hover:bg-gray-200 rounded"
              >
                ^
              </div>
            </div>
          </div>
        </div>
        <div id="break" className="w-5/12 border-2 border-solid rounded">
          <h2 id="break-label" className="text-center text-xl">
            Break
          </h2>
          <div
            id="break-selector"
            className="mx-auto my-2 flex flex-row justify-between divide-x"
          >
            <div className="px-2 basis-full">
              <div
                id="session-decrement"
                className="text-center py-4 w-full hover:bg-gray-200 rounded"
              >
                v
              </div>
            </div>
            <span
              id="break-length"
              className="font-mono basis-full text-center text-4xl px-2 py-3"
            >
              5
            </span>
            <div className="px-2 basis-full">
              <div
                id="session-decrement"
                className="text-center py-4 w-full hover:bg-gray-200 rounded"
              >
                ^
              </div>
            </div>
          </div>
        </div>
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

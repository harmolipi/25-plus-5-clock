import TimeSet from './components/TimeSet';
import Timer from './components/Timer';

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
      <Timer />
    </div>
  );
};

export default App;

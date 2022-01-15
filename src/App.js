import Info from './components/Info';
import TimeSet from './components/TimeSet';
import Timer from './components/Timer';

const App = () => {
  return (
    <div className="App container mx-auto my-9">
      <Info />
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

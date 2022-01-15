import { useState } from 'react';
import Info from './components/Info';
import TimeSet from './components/TimeSet';
import Timer from './components/Timer';

const App = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const decrement = (settingTime, isWork) => {
    if (settingTime > 1) {
      if (isWork) {
        setWorkTime((prevTime) => prevTime - 1);
      } else {
        setBreakTime((prevTime) => prevTime - 1);
      }
    }
  };

  const increment = (settingTime, isWork) => {
    if (settingTime < 60) {
      if (isWork) {
        setWorkTime((prevTime) => prevTime + 1);
      } else {
        setBreakTime((prevTime) => prevTime + 1);
      }
    }
  };

  return (
    <div className="App container mx-auto my-9">
      <Info />
      <div
        id="time-selectors"
        className="flex flex-row flex-wrap justify-between w-7/12 mx-auto my-12"
      >
        <TimeSet
          isWork={true}
          time={workTime}
          increment={increment}
          decrement={decrement}
        />
        <TimeSet
          isWork={false}
          time={breakTime}
          increment={increment}
          decrement={decrement}
        />
      </div>
      <Timer />
    </div>
  );
};

export default App;

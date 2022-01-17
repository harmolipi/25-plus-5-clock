import { useState, useEffect } from 'react';
import Info from './components/Info';
import TimeSet from './components/TimeSet';
import Timer from './components/Timer';

const App = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [currentCountdown, setCurrentCountdown] = useState(workTime);
  const [timerMode, setTimerMode] = useState('Work');
  const [active, setActive] = useState(false);
  const [intervalToSet, setIntervalToSet] = useState(null);

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

  const changeMode = () => {
    if (timerMode === 'Work') {
      setTimerMode('Break');
      setCurrentCountdown(breakTime);
    } else {
      setTimerMode('Work');
      setCurrentCountdown(workTime);
    }
  };

  // Count down every second when active
  useEffect(() => {
    if (active) {
      setIntervalToSet(
        setInterval(() => {
          if (currentCountdown > 0) {
            setCurrentCountdown((prevCountdown) => prevCountdown - 1);
          }
        }, 1000)
      );
    } else {
      clearInterval(intervalToSet);
    }
  }, [active]);

  // Reset the timer when the current countdown reaches 0
  useEffect(() => {
    if (currentCountdown < 0) {
      changeMode();
    }
  }, [currentCountdown]);

  // Pause time when work time is changed if currently in work mode
  useEffect(() => {
    if (timerMode === 'Work') {
      setCurrentCountdown(workTime);
      setActive(false);
    }
  }, [workTime]);

  // Pause time when work time is changed if currently in work mode
  useEffect(() => {
    if (timerMode === 'Break') {
      setCurrentCountdown(breakTime);
      setActive(false);
    }
  }, [breakTime]);

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
      <Timer
        time={currentCountdown}
        mode={timerMode}
        changeMode={changeMode}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};

export default App;

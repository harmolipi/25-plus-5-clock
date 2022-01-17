import { useEffect } from 'react';

const Timer = ({ time, mode, changeMode, active, setActive, reset }) => {
  return (
    <div
      id="timer"
      className="mx-auto p-2 w-2/6 border-2 border-solid rounded divide-y"
    >
      <h2 id="timer-label" className="text-center pb-2 text-3xl text-blue-500">
        {mode}
      </h2>
      <div
        id="time-left"
        className="text-center text-5xl font-bold font-mono py-8"
      >
        {`${time / 60 < 10 ? '0' : ''}${Math.floor(time / 60)}:${
          time % 60 < 10 ? '0' : ''
        }${time % 60}`}
      </div>
      <div
        id="timer-controls"
        className="mx-auto flex flex-row justify-around pt-2 divide-x"
      >
        <div className="w-full px-2">
          <button
            id="start_stop"
            className="w-full py-2 hover:bg-gray-200 text-gray-800 font-bold rounded"
            onClick={() => setActive((prevActive) => !prevActive)}
          >
            {active ? 'Pause' : 'Start'}
          </button>
        </div>
        <div className="w-full px-2">
          <button
            id="reset"
            className="w-full py-2 hover:bg-gray-200 text-gray-800 font-bold rounded"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
};

export default Timer;

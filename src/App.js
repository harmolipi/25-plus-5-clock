function App() {
  return (
    <div className="App">
      <h1>25plus5</h1>
      <p>
        Use the controls below to help set your work into short intervals,
        separated by shorter breaks to keep you efficient (
        <a
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
        >
          Pomodoro Technique
        </a>
        ).
      </p>
      <div
        id="time-selectors"
        className="flex flex-row flex-wrap justify-between"
      >
        <div id="work">
          <h2 id="session-label">Work</h2>
          <div id="work-selector">
            <span id="session-decrement">v</span>
            <span id="session-length">25</span>
            <span id="session-increment">^</span>
          </div>
        </div>
        <div id="break">
          <h2 id="break-label">Break</h2>
          <div id="break-selector">
            <span id="break-decrement">v</span>
            <span id="break-length">5</span>
            <span id="break-increment">^</span>
          </div>
        </div>
      </div>
      <div id="timer">
        <h2 id="timer-label">Work</h2>
        <p id="time-left">25:00</p>
        <div id="timer-controls">
          <button id="start_stop">Start</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

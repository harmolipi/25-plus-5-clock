const Info = () => {
  return (
    <div id="info">
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
    </div>
  );
};

export default Info;

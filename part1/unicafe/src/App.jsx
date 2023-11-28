import { useState } from "react";

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {(100 * good) / total} %</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClicking = () => {
    setGood(good + 1);
  };

  const neutralClicking = () => {
    setNeutral(neutral + 1);
  };

  const badClicking = () => {
    setBad(bad + 1);
  };

  let total = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodClicking}>good</button>
      <button onClick={neutralClicking}>neutral</button>
      <button onClick={badClicking}>bad</button>
      {total === 0 && <p>No feedback given</p>}
      {total !== 0 && (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      )}
    </div>
  );
};

export default App;

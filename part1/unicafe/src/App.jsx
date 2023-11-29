import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={(good - bad) / total} />
      <StatisticLine text="positive" value={`${(100 * good) / total}%`} />

      {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {(100 * good) / total} %</p> */}
    </div>
  );
};

const Button = ({ click, text }) => {
  return <button onClick={click}>{text}</button>;
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
      <Button click={goodClicking} text="good" />
      <Button click={neutralClicking} text="neutral" />
      <Button click={badClicking} text="bad" />
      {/* <button onClick={goodClicking}>good</button>
      <button onClick={neutralClicking}>neutral</button>
      <button onClick={badClicking}>bad</button> */}
      {total === 0 && <p>No feedback given</p>}
      {total !== 0 && (
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      )}
    </div>
  );
};

export default App;

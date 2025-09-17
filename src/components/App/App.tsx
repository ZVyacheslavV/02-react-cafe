// import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';

function App() {
  // const [count, setCount] = useState(0);

  const votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}

export default App;

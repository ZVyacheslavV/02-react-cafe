// import { useState } from 'react';
import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import css from './App.module.css';
import VoteOptions from '../VoteOptions/VoteOptions';

const App = () => {
  // const [count, setCount] = useState(0);

  /*   const votes: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  }; */

  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: /* keyof Votes */ VoteType): void => {
    setVotes({
      ...votes,
      [type]: /* votes[type]++ */ votes[type] + 1,
    });
  };

  const resetVotes = (): void =>
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  );
};

export default App;

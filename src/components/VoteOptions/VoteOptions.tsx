/* import clsx from 'clsx'; */
import css from './VoteOptions.module.css';
import type { Votes } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (type: keyof Votes) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => (
  <div className={css.container}>
    <button className={css.button} onClick={() => onVote('good')}>
      Good
    </button>
    <button className={css.button} onClick={() => onVote('neutral')}>
      Neutral
    </button>
    <button className={css.button} onClick={() => onVote('bad')}>
      Bad
    </button>
    {canReset && (
      <button
        className={
          /* clsx(css.button, css.reset) */ `${css.button} ${css.reset}`
        }
        onClick={onReset}
      >
        Reset
      </button>
    )}
  </div>
);

export default VoteOptions;

/* import clsx from 'clsx'; */
import css from './VoteOptions.module.css';

/* interface VoteOptionsProps {} */

const VoteOptions = () => (
  <div className={css.container}>
    <button className={css.button}>Good</button>
    <button className={css.button}>Neutral</button>
    <button className={css.button}>Bad</button>
    <button
      className={/* clsx(css.button, css.reset) */ `${css.button} ${css.reset}`}
    >
      Reset
    </button>
  </div>
);

export default VoteOptions;

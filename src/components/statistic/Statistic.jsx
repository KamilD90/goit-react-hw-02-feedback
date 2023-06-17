import css from './Statistic.module.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statList}>
      <li className={css.statList_item}>
        <span className={css.statList__item__name}>Positive:</span>
        <span className={css.statList__item__value}>{good}</span>
      </li>
      <li className={css.statList_item}>
        <span className={css.statList__item__name}>Neutral:</span>
        <span className={css.statList__item__value}>{neutral}</span>
      </li>
      <li className={css.statList_item}>
        <span className={css.statList__item__name}>Negative:</span>
        <span className={css.statList__item__value}>{bad}</span>
      </li>
      <li className={css.statList_item}>
        <span className={css.statList__item__name}>Total:</span>
        <span className={css.statList__item__value}>{total}</span>
      </li>
      <li className={css.statList_item}>
        <span className={css.statList__item__name}>Positive Feedback:</span>
        <span className={css.statList__item__value}>
          {positivePercentage.toFixed(1)}%
        </span>
      </li>
    </ul>
  );
};

export default Statistic;

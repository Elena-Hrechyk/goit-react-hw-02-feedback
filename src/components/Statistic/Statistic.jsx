import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
};

Statistic.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import classes from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      <ul className={classes.stat}>
        {stats.map(({ id, label, percentage }) => (
          <li className={classes.item} key={id}>
            <span className={classes.label}>{label}</span>
            <span className={classes.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

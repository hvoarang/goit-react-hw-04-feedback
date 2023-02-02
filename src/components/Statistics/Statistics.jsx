import {
	// StatisticsHead,
	StatisticsGood,
	StatisticsNeutral,
	StatisticsBad,
	StatisticsTotal,
	StatisticsPositive,
	// FeedBackStatisticsAccent,
} from './Statistics.styled';
import PropTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, totalPositive }) => {
	return (
		<>
			<StatisticsGood>Good: {good}</StatisticsGood>
			<StatisticsNeutral>Neutral: {neutral}</StatisticsNeutral>
			<StatisticsBad>Bad: {bad}</StatisticsBad>
			<StatisticsTotal>Total: {total}</StatisticsTotal>
			<StatisticsPositive>Positive: {totalPositive}%</StatisticsPositive>
		</>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	totalPositive: PropTypes.number.isRequired,
};

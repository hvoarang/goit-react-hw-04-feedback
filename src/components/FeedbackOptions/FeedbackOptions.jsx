import { FeedBackBtn, FeedBackBtnWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			<FeedBackBtnWrapper>
				{options.map(option => (
					<FeedBackBtn
						key={option}
						type="button"
						onClick={() => {
							onLeaveFeedback(option);
						}}
					>
						{option}
					</FeedBackBtn>
				))}
			</FeedBackBtnWrapper>
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};
